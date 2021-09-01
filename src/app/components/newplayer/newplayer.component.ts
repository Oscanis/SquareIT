import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.scss']
})
export class NewplayerComponent implements OnInit {

  userFormControl = new FormControl("", [Validators.required]);
  passFormControl = new FormControl("", [Validators.required]);
  passRepeatFormControl = new FormControl("", [Validators.required]);

  constructor(private router: Router, private player: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.userFormControl.value === "")
    {
      alert("Please give an username");
    }
    else if(this.passFormControl.value === "" || this.passFormControl.value != this.passRepeatFormControl.value) {
      alert("Password missing or mismatch");
    }
    else {
      this.player.newPlayer(this.userFormControl.value, this.passFormControl.value);
      this.router.navigateByUrl('/');
    }
  }

  onCancel() {
    this.router.navigateByUrl('/player');
  }

}
