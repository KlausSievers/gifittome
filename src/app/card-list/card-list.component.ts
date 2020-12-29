import { Component, OnInit } from '@angular/core';
import { RoundStatus } from 'src/service/game/round';
import { GameService } from 'src/service/game/game.service';
import { Card } from 'src/service/game/card';
import { CardSelectionService } from 'src/service/card-selection/card-selection.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  RoundStatus = RoundStatus;
  sentence: string;

  constructor(
    public gameService: GameService,
    private cardSelectionService: CardSelectionService
  ) { }

  ngOnInit(): void {
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

  public cardClicked(index) {
    if (this.gameService.isRoundStatus(RoundStatus.CHOOSE_WINNER)) {
      this.cardSelectionService.cardClicked(index);
    } else {
      if (this.gameService.isChoosingPlayer(this.gameService.getPlayer()) && !this.gameService.getCards()[index].value) {
        this.gameService.revealCard(index);
      }
    }
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


}
