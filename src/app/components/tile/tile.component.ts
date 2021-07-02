import { Component, OnInit, Input } from '@angular/core';

import { Tile } from '../../interfaces/tile-interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() cell: Tile;
  rippleColor = "rgba(255, 255, 255, 0.5)";

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

  onRotate() {
    console.log("Cell ID:"+ this.cell.id + " rotated");
    this.game.rotateTile(this.cell);
  }
}
