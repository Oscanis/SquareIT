import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public game: GameService) { }

  ngOnInit(): void {

  }

  toggleTheme () {
    if (document.body.classList.contains("darkmode")) {
      document.body.classList.remove("darkmode");
      document.body.classList.add("lightmode");
      this.game.darkmode = false;
    } else if (document.body.classList.contains("lightmode")) {
      document.body.classList.remove("lightmode");
      document.body.classList.add("darkmode");
      this.game.darkmode = true;
    } else {
      document.body.classList.add("lightmode");
      this.game.darkmode = false;
    }
  }

}
