import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GifService, Gif } from '../../service/gif/gif.service';
import { GameService } from '../../service/game/game.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  playerName: string = '';

  private gameId: string;
  private startGifs: Gif[];
  private gifIntervalSubscribtion;
  currentGif: Gif;

  constructor(
    private gameSevice: GameService,
    private gifService: GifService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = params['gameId'];
    });

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

  public joinGame() {
    if (this.gifIntervalSubscribtion) {
      this.gifIntervalSubscribtion.unsubscribe();
    }
    let cookie = this.getCookieValue('game');
    let player = {
      name: this.playerName,
      id: cookie.playerId
    };

    this.gameSevice.join(this.gameId, player).subscribe((game) => {
      this.router.navigate(['game', this.gameId, 'play']);
    });
  }

  private getCookieValue (name):any {
    var cookieString =  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
    cookieString = decodeURIComponent(cookieString);
    cookieString = cookieString.substring(2); //express is prefixing json cookies with j: -> remove this befor parsing
    return JSON.parse(cookieString);
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
