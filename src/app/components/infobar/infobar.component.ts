import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss']
})
export class InfobarComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

  reset() {
    this.game.generateTiles();
  }

}
