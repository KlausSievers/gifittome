import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Game } from './game';
import { Player } from './player';
import { Round, RoundStatus } from './round';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private socket;
  private game: Game = null;
  private player: Player;
  private round: Round = null;
  private openCards: Card[];
  private winnerCard:Card;

  isCreator = false;

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) {
  }

  public get(): Game {
    return this.game;
  }

  public getRound(): Round {
    return this.round;
  }

  public getPlayer(): Player {
    return this.player;
  }

  public getCards(): Card[] {
    return this.openCards;
  }

  public getWinnerCard(): Card {
    return this.winnerCard;
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
          console.log('Round: '+ this.game.round);
          this.snackBar.open(response.newPlayer + ' has joined the game', '', {
            duration: 2000,
          });
          console.log('player-joined', response);
        });

        this.socket.on('game-update', (response) => {
          this.game = response;
          console.log('Round: '+ this.game.round);
          console.log('game-update', response);
        });

        this.socket.on('start-round', (response) => {
          this.round = response;
          this.round.status = RoundStatus.CHOOSE_CARDS;
          this.winnerCard = null;
          this.openCards = [];
          console.log('start-round', response);
        });

        this.socket.on('reveal-cards', () => {
          this.snackBar.open(this.round.choosingPlayer.name + ' Karten aufdecken', '', {
            duration: 2000,
          });

          this.openCards = [];
          for (let i = 0; i < this.game.player.length - 1; i++) {
            this.openCards.push(new Card());
          }

          this.round.status = RoundStatus.REVEAL_CARDS;
        });

        this.socket.on('card-revealed', (card) => {
          let c : Card = new Card();
          c.value = card._value;
          this.openCards[card.index] =  c;
        });

        this.socket.on('start-voting', () => {
          this.round.status = RoundStatus.CHOOSE_WINNER;
        });

        this.socket.on('winner-selected', (response) => {
          this.game = response.game;
          console.log('Round: '+ this.game.round);
          this.openCards = response.cards;
          this.winnerCard = response.winner;
          this.round.status = RoundStatus.START_NEXT_ROUND;
        });
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
    console.log('Round: '+ this.game.round);
    return this.emit('/game/start', {
      gameId: this.game.id
    }).subscribe(() => {
      this.snackBar.open('Mögen die Spiele beginnen', '', {
        duration: 2000,
      });
    });
  }

  public playCard(card: Card) {
    return this.emit('card-selected', card).subscribe(() => {
      this.round.cardPlayed = true;
    });
  }

  public revealCard(index: number) {
    this.emit('card-revealed', { index: index }).subscribe();
  }

  public chooseWinner(index: number) {
    this.emit('winner-selected', { index: index }).subscribe();
  }

  public nextRoundVote() {
    this.emit('next-round-vote', {}).subscribe();
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
            console.log('Round: '+ this.game.round);
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


