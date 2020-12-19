import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/service/game/game.service';
import { Card } from 'src/service/game/card';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Object;


  constructor(
    public gameService: GameService
  ) {

   }

  ngOnInit(): void {
  }

  public playCard(card:Card) {
    this.gameService.playCard(card).subscribe(()=>{
      console.log('Karte gespielt')
      //@todo so anzeigen
    });
  }

  public startGame() {
    this.gameService.start();
  }

  public startRound() {
   // this.gameService.start();
  }

}
