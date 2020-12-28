import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/service/game/game.service';
import { Card } from 'src/service/game/card';
import { Player } from 'src/service/game/player';
import { RoundStatus } from 'src/service/game/round';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Object;
  sentence: string;
  selectedCardIdx: number = -1;
  RoundStatus = RoundStatus;

  constructor(
    public gameService: GameService
  ) {

  }

  ngOnInit(): void {
  }

  public isChoosingPlayer(player: Player): boolean {
    if (this.gameService.getRound()) {
      return this.gameService.getRound().choosingPlayer.name === player.name;
    } else {
      return false;
    }
  }

  public isOkay(): boolean {
   return this.gameService.get().player.find(p => {return p.name === this.gameService.getPlayer().name})['okay']; //@todo
  }

  public playCard(card: Card) {
    this.gameService.playCard(card)
    //   .subscribe(() => {
    //     console.log('Karte gespielt')
    //     //@todo so anzeigen
    //   });
  }

  public playSentence() {
    let card: Card = new Card();
    card.value = this.sentence;

    this.gameService.playCard(card)
    this.sentence = null;
    // .subscribe(() => {
    //   console.log('Karte gespielt')
    //   //@todo so anzeigen
    // });
  }

  public startGame() {
    this.gameService.start();
  }

  public startRound() {
    // this.gameService.start();
  }

  public cardClicked(index) {
    if (this.isRoundStatus(RoundStatus.CHOOSE_WINNER)) {
      if (this.selectedCardIdx === index) {
        this.selectedCardIdx = -1;
      } else {
        this.selectedCardIdx = index;
      }
    } else {
      if (this.isChoosingPlayer(this.gameService.getPlayer()) && !this.gameService.getCards()[index].value) {
        this.gameService.revealCard(index);
      }
    }
  }

  public isCardSelected() {
    return this.selectedCardIdx >= 0;
  }

  public getPlayerIndezes() {
    return Array(this.gameService.get().player.length - 1).fill(0).map((x, i) => i)
  }

  public isOpen(i: number): boolean {
    return !!this.gameService.getCards()[i].value;
  }

  public isWinner(i: number): boolean {
    if (this.gameService.getWinnerCard()) {
      //@todo ugly -> other card definition as in Card
      return this.gameService.getWinnerCard()['player'] === this.gameService.getCards()[i]['player'];
    } else {
      return false;
    }
  }

  public isRoundStatus(status: RoundStatus): boolean {
    if (this.gameService.getRound()) {
      return this.gameService.getRound().status === status;
    } else {
      return false;
    }
  }

  public chooseWinner() {
    this.gameService.chooseWinner(this.selectedCardIdx);
    this.selectedCardIdx = -1;
  }

  public nextRound() {
    this.gameService.nextRoundVote();
  }

}
