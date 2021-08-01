import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(public player: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.player.login("test", "123");
  }

  logout() {
    this.player.logout();
  }

}
