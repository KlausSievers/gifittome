import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/service/game/game.service';
import { RoundStatus } from 'src/service/game/round';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Object;
  RoundStatus = RoundStatus;

  constructor(
    public gameService: GameService
  ) { }

  ngOnInit(): void {
  }
}
