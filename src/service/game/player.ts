import { Card } from './card';

export class Player {
  private _name: string = '';
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  private _cards: Array<Card> = [];
  public get cards(): Array<Card> {
    return this._cards;
  }
  public set cards(value: Array<Card>) {
    this._cards = value;
  }

  private won: Array<any> = [];
  private socket;

  constructor(name, socket) {
    this.name = name;
    this.socket = socket;

    this.socket.on('new-cards', this.newCardsReceived.bind(this));
  }

  private newCardsReceived(newCards) {
    this.cards = newCards;
  }
}
