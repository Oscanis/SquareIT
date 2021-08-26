import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/interfaces/user-interface';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  loggedIn: boolean = false;
  statusText: string = "Please log in";
  topplayers: {name: string, score: number}[];

  //private apiurl = "http://localhost:5000"; for local testing
  private apiurl = "https://squareit-api.herokuapp.com";

  constructor(private http: HttpClient) { }
  
  login(name: string, pass: string) {
    
      this.getUserByName(name).subscribe(user => {
        try {
            if(user[0].userName === name && user[0].password === pass) {
              this.user = user[0];
              this.statusText = "Successfully logged in as " + this.user.userName;
              console.log(this.statusText);
              this.loggedIn = true;
            }
            else {
              alert("Incorrect password, try again!");
            }
        }
        catch(e) {
          alert("Player doesn't exist!");
        }
      });
  }

  newPlayer(name: string, pass: string) {
    this.getUserByName(name).subscribe(user => {
      try {
        if(user[0].userName != undefined) {
          alert(user.userName + " already exists!");
        }
      }
      catch
      {
        if(name === "") {
          alert("Please type your name!");
        }
        else if(pass === "") {
          alert("Please give a password!");
        }
        else {
          if(confirm("Create new user with the given password?")) {
            const nUser: User = {
              _id: null,
              userName: name,
              password: pass,
              highScore: 0
            }
    
            this.postUser(nUser).subscribe(newUser => {
              this.user = newUser;
              this.statusText = this.user.userName + " created and logged in";
              console.log(this.statusText);
              this.loggedIn = true;
            });
          }
          else {
            this.statusText = "User creation cancelled";
            console.log(this.statusText);
          }
        }
      }
    });
  }

  saveHighScore(highScore: number) {
    this.user.highScore = highScore;
    this.patchUserScore(this.user._id, highScore).subscribe(user => {
      console.log(user.highScore);
      //this.user.highScore = user.highScore;
    });
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
  }

  delete() {
    this.deleteUser(this.user._id).subscribe(user => {
      this.loggedIn = false;
      console.log(this.user.userName + " deleted");
    });
  }

  topList() {
    this.getUsers().subscribe(users => {
      const toplist = users.map((element) => {
        return {'name': element.userName, 'score': element.highScore}
      });
      this.topplayers = toplist;
      this.topplayers.sort((a, b) => (a.score - b.score)).reverse();
      console.log(this.topplayers);
    });
  }

  private getUsers(): Observable<User[]> {
    const url = `${this.apiurl}/users`;
    return this.http.get<User[]>(url);
  }

  private getUserByName(name: String): Observable<User> {
    const url = `${this.apiurl}/name/${name}`;
    return this.http.get<User>(url);
  }

  private getUserById(id: String): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<User>(url);
  }

  private patchUserScore(id: String, highScore): Observable<User> {
    const url = `${this.apiurl}/save/${id}`;
    return this.http.patch<User>(url, {"highScore": highScore});
  }

  private postUser(newUser: User) {
    const url = `${this.apiurl}/adduser`;
    return this.http.post<User>(url, newUser, httpOptions);
  }

  private deleteUser(id: String) {
    const url = `${this.apiurl}/delete/${id}`;
    return this.http.delete<User>(url); 
  }

}
