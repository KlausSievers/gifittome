import { Player } from './player';

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


}
