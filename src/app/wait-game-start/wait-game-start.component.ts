import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from 'src/service/game/game.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-wait-game-start',
  templateUrl: './wait-game-start.component.html',
  styleUrls: ['./wait-game-start.component.scss']
})
export class WaitGameStartComponent implements OnInit {
  environment = environment;

  constructor(
    public gameService: GameService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  public startGame() {
    this.gameService.start();
  }

  public copyLink() {
    let copyText = document.getElementById("link-input") as HTMLInputElement;
    copyText.select();
    document.execCommand("copy");
    this.snackBar.open('Link copied', '', {
      duration: 2000,
    });
  }

}
