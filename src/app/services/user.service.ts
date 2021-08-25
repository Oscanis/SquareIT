import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user-interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  loggedIn: boolean = false;

  constructor(private http: HttpClient) { }
  
  login(name: string, pass: string) {
    //if() {
      this.user = {_id: "abc123", userName: name, password: pass, highScore: 0};
      this.loggedIn = true;
    //}
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
  }

}
