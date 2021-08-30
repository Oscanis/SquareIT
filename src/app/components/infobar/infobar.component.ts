import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss']
})
export class InfobarComponent implements OnInit {

  constructor(private router: Router, public game: GameService, public player: UserService) { }

  ngOnInit(): void {
  }

  reset() {
    this.game.generateTiles();
  }

  finish() {
    this.game.finish();
    if(this.game.topScore > this.player.user.highScore) {
      this.player.saveHighScore(this.game.topScore);
    }
  }

  hof () {
    this.router.navigateByUrl('/toplist');
  }

}
