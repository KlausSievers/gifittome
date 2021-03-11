import { Component, OnInit } from '@angular/core';
import { RoundStatus } from 'src/service/game/round';
import { GameService } from 'src/service/game/game.service';
import { CardSelectionService } from 'src/service/card-selection/card-selection.service';

@Component({
  selector: 'app-gif-board',
  templateUrl: './gif-board.component.html',
  styleUrls: ['./gif-board.component.scss']
})
export class GifBoardComponent implements OnInit {
  RoundStatus = RoundStatus;

  private selectedGif;

  constructor(
    public gameService: GameService,
    public cardSelectionService: CardSelectionService
  ) { }

  ngOnInit(): void {
  }

  public isOkay(): boolean {
    return this.gameService.get().player.find(p => { return p.name === this.gameService.getPlayer().name })['okay']; //@todo
  }

  public nextRound() {
    this.gameService.nextRoundVote();
  }

  public chooseWinner() {
    this.gameService.chooseWinner();
    this.cardSelectionService.resetSelectedCardIdx();
  }

  public getGifsToSelect() {
    return this.gameService.getRound().gifsToSelect;
  }

  public selectGif(gif) {
    this.selectedGif = gif;
  }

  public isGifSelected() {
    return !!this.selectedGif;
  }

  public getSelectedGif() {
    return this.selectedGif;
  }

  public sendGif() {
    this.gameService.selectGif(this.selectedGif);
  }


}
