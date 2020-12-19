import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: '', component: CreateComponent},
  {path: 'game/:gameId/join', component: JoinComponent},
  {path: 'game/:gameId/play', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
