import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Game } from './game';
import { Player } from './player';
import { Round, RoundStatus } from './round';
import { Card } from './card';
import { CardSelectionService } from '../card-selection/card-selection.service';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private socket;
  private game: Game = null;
  private playerId: number = null;
  private player: Player;
  private round: Round = null;
  private openCards: Card[];
  private winnerCard: Card;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private cardSelectionService: CardSelectionService,
    private cookieService: CookieService) {
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

  public isHost() {
    return this.game.host.id === this.getPlayer().id;
  }

  public create() {
    if (this.game) {
      this.leave();
    }

    let idObserveable = this.http.get<any>('/game/create');
    idObserveable.subscribe(ids => {
      this.playerId = ids.playerId;
      this.getSocket().subscribe(() => {
        console.log('connected');
      });
    });

    return idObserveable;
  }

  public request(id) {
    let cookie = this.cookieService.getValue('game');
    this.game = new Game();
    this.game.id = id;

    //@todo game id im cookie ueberpruefen??
    if (cookie.playerId) {
      let playerObserveable = this.http.get<any>('/game/' + id + '/player/' + cookie.playerId);
      playerObserveable.subscribe(player => {
        if (player) {
          this.player = player;
          this.getSocket().subscribe(() => {
            console.log('connected');

          });

          let gameObserveable = this.http.get<any>('/game/' + id);
          gameObserveable.subscribe(game => {
            this.game = game;
          });

          let roundObserveable = this.http.get<any>('/game/' + id + '/round');
          roundObserveable.subscribe(round => {
            this.round = new Round();
            this.round.gif = round.gif;
            this.round.gifsToSelect = round.gifsToSelect;
            this.round.choosingPlayer = round.choosingPlayer;
            this.round.cardPlayed = !!round.playedCards[this.player.name];
            this.round.status = round.status;

            this.openCards = round.revealedCards;

            //nextRound vote
            //player okay state
          });
        }
      });
    }
  }


  private getSocket() {
    return new Observable((observer) => {
      if (this.socket) {
        observer.next(this.socket);
        observer.complete();
      } else {
        this.socket = io(environment.websocket);
        this.socket.on('connect', () => {
          if(this.game !== null && this.player !== null) {
            this.emit('resubscribe', {
              gameId: this.game.id,
              player: this.player.name
            }).subscribe(() => {
              observer.next(this.socket);
              observer.complete();
            });
          } else {
            observer.next(this.socket);
            observer.complete();
          }
        });

        this.socket.on('player-joined', (response) => {
          this.game = response.game;
          console.log('Round: ' + this.game.round);
          this.snackBar.open(response.newPlayer + ' has joined the game', '', {
            duration: 2000,
          });
          console.log('player-joined', response);
        });

        this.socket.on('game-update', (response) => {
          this.game = response.game;
          if (response.msg) {
            this.snackBar.open(response.msg, '', {
              duration: 2000,
            });
          }
          console.log('Round: ' + this.game.round);
          console.log('game-update', response);
        });

        this.socket.on('start-round', (response) => {
          this.round = response;
          this.round.status = RoundStatus.CHOOSE_GIF;
          this.winnerCard = null;
          this.openCards = [];
          console.log('start-round', response);
        });

        this.socket.on('start-choosing-cards', (response) => {
          this.round = response;
          this.round.status = RoundStatus.CHOOSE_CARDS;
          console.log('start-choosing-cards', response);
        });

        this.socket.on('reveal-cards', () => {
          this.snackBar.open(this.round.choosingPlayer.name + ' reveal cards', '', {
            duration: 2000,
          });

          this.openCards = [];
          for (let i = 0; i < this.game.player.length - 1; i++) {
            this.openCards.push(new Card());
          }

          this.round.status = RoundStatus.REVEAL_CARDS;
        });

        this.socket.on('card-revealed', (card) => {
          let c: Card = new Card();
          c.value = card._value;
          this.openCards[card.index] = c;
        });

        this.socket.on('start-voting', () => {
          this.round.status = RoundStatus.CHOOSE_WINNER;
        });

        this.socket.on('winner-selected', (response) => {
          this.game = response.game;
          console.log('Round: ' + this.game.round);
          this.openCards = response.cards;
          this.winnerCard = response.winner;
          this.round.status = RoundStatus.START_NEXT_ROUND;
        });
      }
    });
  }

  public join(gameId: string, rawPlayer: any) {
    return new Observable((observer) => {
      this.emit('/game/join', {
        gameId: gameId,
        player: rawPlayer
      }).subscribe(() => {
        this.getSocket().subscribe((socket: any) => {
          this.player = new Player(rawPlayer.id, rawPlayer.name, socket);
          observer.next();
          observer.complete();
        });
      });
    });
  }

  public start() {
    console.log('Round: ' + this.game.round);
    return this.emit('/game/start', {
      gameId: this.game.id
    }).subscribe(() => {
      this.snackBar.open('Let the games begin', '', {
        duration: 2000,
      });
    });
  }

  public playCard(card: Card) {
    return this.emit('card-selected', card).subscribe(() => {
      this.round.cardPlayed = true;
    });
  }

  public selectGif(gif) {
    return this.emit('gif-selected', gif).subscribe(() => {});
  }

  public revealCard(index: number) {
    this.emit('card-revealed', { index: index }).subscribe();
  }

  public chooseWinner() {
    this.emit('winner-selected', { index: this.cardSelectionService.getSelectedCardIdx() }).subscribe();
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
            console.log('Round: ' + this.game.round);
            observer.next(response);
            observer.complete();
          }
        });
      });
    });
  }

  public leave() {
    this.emit('game/leave', {}).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  public kick(player: Player) {
    this.emit('game/kick', player).subscribe();
  }

  //--------------------

  public isRoundStatus(status: RoundStatus): boolean {
    if (this.getRound()) {
      return this.getRound().status === status;
    } else {
      return false;
    }
  }

  public isChoosingPlayer(player: Player): boolean {
    if (this.getRound()) {
      return this.getRound().choosingPlayer.name === player.name;
    } else {
      return false;
    }
  }
}


