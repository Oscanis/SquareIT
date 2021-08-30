import { Component, OnInit, Input } from '@angular/core';

import { Tile } from '../../interfaces/tile-interface';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() cell: Tile;
  rippleColor = "rgba(255, 255, 255, 0.5)";

  constructor(public game: GameService, public player: UserService) { }

  ngOnInit(): void {
  }

  onRotate() {
    this.game.rotateTile(this.cell);

    if(this.player.loggedIn && this.game.topScore > this.player.user.highScore) {
      this.player.user.highScore = this.game.topScore;
      this.player.saveHighScore(this.game.topScore);
    }
  }
}
