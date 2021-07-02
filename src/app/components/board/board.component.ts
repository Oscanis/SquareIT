import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';
import { Tile } from '../../interfaces/tile-interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit(): void {
    this.game.generateTiles();
  }

  getLayout() {
    let layout: string = "auto";

    for(let i = 1; i < this.game.boardWidth; i++)
    {
      layout = layout + " auto";
    }

    let styles = {'grid-template-columns': layout};
    return styles;
  }

}
