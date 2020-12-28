import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GameService } from '../../service/game/game.service';
import { GifService, Gif } from '../../service/gif/gif.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private startGifs: Gif[];
  private gifIntervalSubscribtion;
  gameId: string;
  currentGif: Gif;

  constructor(
    private gameService: GameService,
    private gifService: GifService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    const startGifSubscribtion = this.gifService.start().subscribe((data: Gif[]) => {
      startGifSubscribtion.unsubscribe();
      this.startGifs = data;

      const gifInterval = timer(0, 15000);
      this.gifIntervalSubscribtion = gifInterval.subscribe(n =>
        this.currentGif = this.startGifs[n % this.startGifs.length]
      );
    });


  }

  public createGame() {
    if (this.gifIntervalSubscribtion) {
      this.gifIntervalSubscribtion.unsubscribe();
    }
    this.gameService.create().subscribe((game) => {
      this.router.navigate(['game', game.id, 'join']);
    });
  }

  public getGame() {
    this.router.navigate(['game', this.gameId, 'join']);
  }
}
