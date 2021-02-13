import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private startUrl: string = 'gif/';

  constructor(private http: HttpClient) { }

  public trending() {
    return this.http.get<Gif[]>(this.startUrl + 'trending');
  }

  public start() {
    return this.http.get<Gif[]>(this.startUrl + 'start');
  }
}

export interface GifResponse {
  next: string,
  results: Gif[]
}

export interface MediaMap {
  gif: Media;
}


export interface Media {
  preview: string,
  url: string,
  dims: number[],
  size: number
}

export interface Gif {
  //@todo media
  created: number,
  hasaudio: boolean,
  id: string,
  tags: string[],
  title: string,
  itemurl: string,
  hascaption: boolean,
  url: string,
  media: MediaMap;
}
