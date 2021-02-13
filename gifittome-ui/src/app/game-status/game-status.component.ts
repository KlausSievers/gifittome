import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { GameService } from 'src/service/game/game.service';
import { Player } from 'src/service/game/player';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss']
})
export class GameStatusComponent implements OnInit {
  @ViewChild(MatMenuTrigger) playerMenu: MatMenuTrigger;

  menuData = {
    player: null
  };

  constructor(
    public dialog: MatDialog,
    public gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  public isMyself(player: Player): boolean {
    return player.name === this.gameService.getPlayer().name;
  }

  public selectPlayer(player: Player) {
    if (this.gameService.isHost() || this.isMyself(player)) {
      this.menuData.player = player;
      this.playerMenu.openMenu();
    }
  }

  public kickPlayer(player: Player) {
    const message = 'Are you sure you want to kick ' + player.name + ' ?';

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {

      }
    });
  }

  public leaveGame() {

  }

}
