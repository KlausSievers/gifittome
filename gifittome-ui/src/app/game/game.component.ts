import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public gameService: GameService,
    private route: ActivatedRoute
  ) {

    let gameId = null;
    this.route.params.subscribe(params => {
      gameId = params['gameId'];
    });

    if(gameService.get() === null) {
      gameService.request(gameId);
    }
  }

// coockie Service erstellen.
// Hier nachgucken, ob man schonmal im Spiel war. ggf, dann JoinComponent

// Socket Reconnect beachten und neu subscriben!

  ngOnInit(): void {
  }
}
