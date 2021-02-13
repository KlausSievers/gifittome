import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';
import { CreateComponent } from './create/create.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';


const routes: Routes = [
  {path: '', component: CreateComponent},
  {path: 'game/:gameId/join', component: JoinComponent},
  {path: 'game/:gameId/play', component: GameComponent},
  {path: 'legal', component: LegalNoticeComponent},
  {path: 'privacy', component: DataPrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
