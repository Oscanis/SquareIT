import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//importing material.ts
import { MaterialModule } from './material';

//importing custom components
import { InfobarComponent } from './components/infobar/infobar.component';
import { SetupComponent } from './components/setup/setup.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ToplistComponent } from './components/toplist/toplist.component';
import { NewplayerComponent } from './components/newplayer/newplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TileComponent,
    HeaderComponent,
    InfobarComponent,
    SetupComponent,
    AboutComponent,
    LoginComponent,
    PlayerComponent,
    PlayerInfoComponent,
    ToplistComponent,
    NewplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
