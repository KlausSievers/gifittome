import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardSelectionService {
  private selectedCardIdx: number = -1;

  constructor() { }

  public cardClicked(index: number): void {
    if (this.getSelectedCardIdx() === index) {
      this.resetSelectedCardIdx();
    } else {
      this.setSelectedCardIdx(index);
    }
  }

  public getSelectedCardIdx(): number {
    return this.selectedCardIdx;
  }

  public setSelectedCardIdx(selectedCardIdx: number): void {
    this.selectedCardIdx = selectedCardIdx;
  }

  public resetSelectedCardIdx(): void {
    this.selectedCardIdx = -1;
  }

  public isCardSelected() {
    return this.getSelectedCardIdx() >= 0;
  }
}
