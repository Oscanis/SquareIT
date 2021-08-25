import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-toplist',
  templateUrl: './toplist.component.html',
  styleUrls: ['./toplist.component.scss']
})

export class ToplistComponent implements OnInit {

  playerList: {name: string, score: number}[];

  constructor(private player: UserService) { }

  ngOnInit(): void {
    this.player.topList();
    this.playerList = this.player.topplayers.sort((a, b) => (a.score - b.score));
    this.playerList.reverse();
  }
  
  /*ngDoCheck() {
    this.player.topList();
    this.playerList = this.player.topplayers;
  }*/


}
