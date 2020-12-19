import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Game } from './game';
import { Player } from './player';
import { Round } from './round';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private socket;
  private game: Game = null;
  private player: Player;
  private round: Round = null;

  isCreator = false;

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  public get(): Game {
    return this.game;
  }

  public create() {
    if (this.game) {
      this.leave();
    }

    let createdGame = this.http.get<any>('/game/create');
    createdGame.subscribe(game => {
      this.getSocket().subscribe(() => {
        console.log('connected');
      });
    });

    this.isCreator = true;
    return createdGame;
  }

  private getSocket() {
    return new Observable((observer) => {
      if (this.socket) {
        observer.next(this.socket);
        observer.complete();
      } else {
        this.socket = io('http://localhost:8091');
        this.socket.on('connect', () => {
          observer.next(this.socket);
          observer.complete();
        });

        this.socket.on('player-joined', (response) => {
          this.game = response.game;
          this.snackBar.open(response.newPlayer + ' has joined the game', '', {
            duration: 2000,
          });
          console.log('player-joined', response);
        });

        this.socket.on('start-game', (response) => {
          this.game = response;
          console.log('start-game', response);
        })

        this.socket.on('start-round', (response) => {
          this.round = response;
          console.log('start-round', response);
        })
      }
    });
  }

  public join(gameId: string, name: string) {
    return new Observable((observer) => {
      this.emit('/game/join', {
        gameId: gameId,
        player: name
      }).subscribe(() => {
        this.getSocket().subscribe((socket: any) => {
          this.player = new Player(name, socket);
          observer.next();
          observer.complete();
        });
      });
    });
  }

  public start() {
    return this.emit('/game/start', {
      gameId: this.game.id
    }).subscribe(() => {
      this.snackBar.open('Mögen die Spiele beginnen', '', {
        duration: 2000,
      });
    });
  }

  public playCard(card: Card) {
    return this.emit('card-selected', card);
  }

  private emit(route: string, data: Object) {
    return new Observable((observer) => {
      this.getSocket().subscribe((socket: any) => {
        socket.emit(route, data, (response) => {
          if (response.error) {
            this.snackBar.open(response.reason, '', {
              duration: 2000,
            });
            observer.error(response);
          } else {
            this.game = response.game;
            observer.next(response);
            observer.complete();
          }
        });
      });
    });
  }

  public leave() {

  }
}


