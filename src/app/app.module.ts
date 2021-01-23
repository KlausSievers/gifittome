import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RoundStatusComponent } from './round-status/round-status.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { GifBoardComponent } from './gif-board/gif-board.component';
import { CardListComponent } from './card-list/card-list.component';
import { WaitGameStartComponent } from './wait-game-start/wait-game-start.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { DataPrivacyComponent } from './data-privacy/data-privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    JoinComponent,
    GameComponent,
    RoundStatusComponent,
    GameStatusComponent,
    GifBoardComponent,
    CardListComponent,
    WaitGameStartComponent,
    LegalNoticeComponent,
    DataPrivacyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
