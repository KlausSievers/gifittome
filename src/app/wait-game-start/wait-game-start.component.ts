import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/service/game/game.service';

@Component({
  selector: 'app-wait-game-start',
  templateUrl: './wait-game-start.component.html',
  styleUrls: ['./wait-game-start.component.scss']
})
export class WaitGameStartComponent implements OnInit {

  constructor(
    public gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  public startGame() {
    this.gameService.start();
  }

}
