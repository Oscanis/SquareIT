import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BoardComponent } from './components/board/board.component';
import { SetupComponent } from './components/setup/setup.component';
import { PlayerComponent } from './components/player/player.component';
import { ToplistComponent } from './components/toplist/toplist.component';

const routes: Routes = [
  {path: 'game', component: BoardComponent},
  {path: 'toplist', component: ToplistComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'setup', component: SetupComponent},
  {path: '',   redirectTo: '/player', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
