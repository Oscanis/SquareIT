import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  constructor(public player: UserService, private router: Router, private game: GameService) { }

  ngOnInit(): void {
  }

  play() {
    this.router.navigateByUrl('/game');
  }

  logout() {
    this.player.logout();
    this.game.reset();
    this.router.navigateByUrl('/player');
  }

}
