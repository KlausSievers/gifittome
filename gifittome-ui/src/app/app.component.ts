import { Component } from '@angular/core';
import { GifService, GifResponse, Gif } from '../service/gif/gif.service';
import { GameService } from '../service/game/game.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gifittome';
  currentGifs: Gif[];

  constructor(
    private gifService: GifService,
    private gameSevice: GameService
  ) {

    // this.gifService.trending().subscribe((data: Gif[]) =>  {
    //   this.currentGifs = data;
    //   console.log(this.currentGifs);
    // });

  }

};
