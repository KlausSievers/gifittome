import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { GameService } from '../../service/game/game.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  playerName: string = '';

  private gameId:string;

  constructor(
    private gameSevice: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
    });
  }

  public joinGame() {
    this.gameSevice.join(this.gameId, this.playerName).subscribe((game) => {
      this.router.navigate(['game', this.gameId, 'play']);
    });
  }

}
