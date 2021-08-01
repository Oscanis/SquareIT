import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BoardComponent } from './components/board/board.component';
import { SetupComponent } from './components/setup/setup.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'setup', component: SetupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
