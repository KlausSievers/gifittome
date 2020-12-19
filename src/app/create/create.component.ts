import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game/game.service';
import { GifService, Gif } from '../../service/gif/gif.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private gameId: string;
  private startGifs: Gif[];
  private gifIntervalSubscribtion ;
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

      const gifInterval = interval(10000);

      this.gifIntervalSubscribtion = gifInterval.subscribe(n =>
        this.currentGif = this.startGifs[Math.floor(Math.random() * this.startGifs.length)]
      );
    });


  }

  public createGame() {
    this.gifIntervalSubscribtion.unsubscribe();
    this.gameService.create().subscribe((game) => {
      this.router.navigate(['game', game.id, 'join']);
    });
  }


}
