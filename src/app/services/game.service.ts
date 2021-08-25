import { Injectable } from '@angular/core';
import { Tile } from '../interfaces/tile-interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  darkmode: boolean = false;

  boardWidth: number = 4;
  boardHeight: number = 3;
  maxSteps: number = 10;

  board: Array<Tile>;
  
  rotatesLeft: number = 10;
  score: number = 0;
  topScore: number = 0;

  constructor() { }

  reset() {
    this.rotatesLeft = 10;
    this.score = 0;
    this.topScore = 0;
  }

  generateTiles() {

    this.rotatesLeft = this.maxSteps;
    document.getElementById("rotates").classList.remove("norotates");


    this.score = 0;

    this.board = new Array();
    let idHelper: number = 1;

    for(let r = 0; r < this.boardHeight * this.boardWidth; r++) {
      let buffer: Tile = {
        id: 0,
        top: 0,
        topMatch: false,
        right: 0,
        rightMatch: false,
        bottom: 0,
        bottomMatch: false,
        left: 0,
        leftMatch: false
      };

      buffer.id = idHelper++;
      buffer.top = Math.floor(Math.random() * 10);
      buffer.right = Math.floor(Math.random() * 10);
      buffer.bottom = Math.floor(Math.random() * 10);
      buffer.left = Math.floor(Math.random() * 10);
      this.board.push(buffer);
    }

    this.calcScore();
  }

  rotateTile(tile: Tile) {
    if(this.rotatesLeft > 0 ) {
      let buffer: number = tile.left;

      tile.left = tile.bottom;
      tile.bottom = tile.right;
      tile.right = tile.top;
      tile.top = buffer;
      this.rotatesLeft--;
      this.calcScore();

      if(this.rotatesLeft === 0) {
        document.getElementById("rotates").classList.add("norotates");
        this.finish();
      }
    }
  }

  calcScore() {
    //reset score & matches so the loop works correctly
    this.score = 0;
    this.board.forEach(cell => {
            cell.topMatch = false;
            cell.bottomMatch = false;
            cell.leftMatch = false;
            cell.rightMatch = false;
    });

    //checking matches, adjusting score
    this.board.forEach(cell => {
      //celltype: 0 - regular, 1 - colum end but not last row, 2 - last row, not end, 3 - last cell
      let cellType: number = 0;

      if(cell.id === this.boardHeight * this.boardWidth) {
        cellType = 3;
      }
      else if (cell.id > (this.boardHeight * this.boardWidth) - this.boardWidth ) {
        cellType = 2;
      }
      else if (cell.id % this.boardWidth === 0) {
        cellType = 1;
      }
      else {
        cellType = 0;
      }
      let toRight = this.board.find(next => next.id === cell.id + 1);
      let toBottom = this.board.find(next => next.id === cell.id + this.boardWidth);

      switch(cellType) {
        case 0:
          if(cell.right === toRight.left) {
            this.score = this.score + cell.right;
            cell.rightMatch = true;
            toRight.leftMatch = true;
          }
          if(cell.bottom === toBottom.top) {
            this.score = this.score + cell.bottom;
            cell.bottomMatch = true;
            toBottom.topMatch = true;
          }
          break;
        case 1:
          if(cell.bottom === toBottom.top) {
            this.score = this.score + cell.bottom;
            cell.bottomMatch = true;
            toBottom.topMatch = true;
          }
          break;
        case 2:
          if(cell.right === toRight.left) {
            this.score = this.score + cell.right;
            cell.rightMatch = true;
            toRight.leftMatch = true;
          }
          break;
        case 3:
          break;
      }
    });
  }

  finish() {
    this.rotatesLeft = 0;
    document.getElementById("rotates").classList.add("norotates");
    if(this.score > this.topScore) {
      this.topScore = this.score;
    }
  }
}
