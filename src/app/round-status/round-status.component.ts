import { Component, OnInit } from '@angular/core';
import { RoundStatus } from 'src/service/game/round';
import { GameService } from 'src/service/game/game.service';

@Component({
  selector: 'app-round-status',
  templateUrl: './round-status.component.html',
  styleUrls: ['./round-status.component.scss']
})
export class RoundStatusComponent implements OnInit {
  RoundStatus = RoundStatus;

  constructor(
    public gameService: GameService
  ) { }

  ngOnInit(): void {
  }

}
