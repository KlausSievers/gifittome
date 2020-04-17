import { Component } from '@angular/core';
import { GifService, GifResponse, Gif } from './gif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gifittome';

  private currentGifs: Gif[];

  constructor(
    private gifService: GifService
  ) {

    this.gifService.trending().subscribe((data: Gif[]) =>  {
      this.currentGifs = data;
      console.log(this.currentGifs);
    });

}
};
