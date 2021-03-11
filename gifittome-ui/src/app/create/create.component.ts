import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GameService } from '../../service/game/game.service';
import { GifService, Gif } from '../../service/gif/gif.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { timer } from 'rxjs';
import { TitleService } from '../title.service';

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
    private router: Router,
    private titleService: TitleService
  ) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('the online gif game');

    //@todo same as in join
    const startGifSubscribtion = this.gifService.start().subscribe((data: Gif[]) => {
      startGifSubscribtion.unsubscribe();
      this.startGifs = data;

      this.shuffle(this.startGifs);

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
    this.gameService.create().subscribe((ids) => {
      this.router.navigate(['game', ids.gameId, 'join']);
    });
  }

  public getGame() {
    if (this.gameId) {
      this.router.navigate(['game', this.gameId, 'join']);
    }
  }

  private shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  }

}
