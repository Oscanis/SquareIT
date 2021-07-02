import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  stepsFormControl = new FormControl(10, [Validators.required]);
  widthFormControl = new FormControl(4, [Validators.required]);
  heightFormControl = new FormControl(3, [Validators.required]);

  constructor(private game: GameService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.game.maxSteps = this.stepsFormControl.value;
    this.game.boardWidth = this.widthFormControl.value;
    this.game.boardHeight = this.heightFormControl.value;
    this.router.navigateByUrl('/');
  }

  onCancel () {
    this.router.navigateByUrl('/');
  }
}
