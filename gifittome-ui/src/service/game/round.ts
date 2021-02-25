import { Player } from './player';

export enum RoundStatus {
  CHOOSE_GIF,
  CHOOSE_CARDS,
  REVEAL_CARDS,
  CHOOSE_WINNER,
  START_NEXT_ROUND
}

export class Round {
  private _gif;
  public get gif() {
    return this._gif;
  }
  public set gif(value) {
    this._gif = value;
  }

  private _choosingPlayer: Player;
  public get choosingPlayer(): Player {
    return this._choosingPlayer;
  }
  public set choosingPlayer(value: Player) {
    this._choosingPlayer = value;
  }

  private _cardPlayed: boolean;
  public get cardPlayed(): boolean {
    return this._cardPlayed;
  }
  public set cardPlayed(value: boolean) {
    this._cardPlayed = value;
  }

  private _status: RoundStatus;
  public get status(): RoundStatus {
    return this._status;
  }
  public set status(value: RoundStatus) {
    this._status = value;
  }
}
