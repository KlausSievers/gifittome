import { Player } from './player';

export class Game {
  private _id: string = null;
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  private _player: Array<Player> = [];
  public get player(): Array<Player> {
    return this._player;
  }
  public set player(value: Array<Player>) {
    this._player = value;
  }

  private _active: boolean;
  public get active(): boolean {
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }

  private _round: number;
  public get round(): number {
    return this._round;
  }
  public set round(value: number) {
    this._round = value;
  }

  private _host: Player;
  public get host(): Player {
    return this._host;
  }
  public set host(value: Player) {
    this._host = value;
  }
}
