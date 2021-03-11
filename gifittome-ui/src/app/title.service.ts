import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title) { }

  public setTitle(title: string) {
    this.titleService.setTitle('Gif it to me - ' + title);
  }

}
