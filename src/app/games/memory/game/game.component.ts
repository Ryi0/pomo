import {Component, effect, signal, ViewChild} from '@angular/core';
import {BoardComponent} from "../board/board.component";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  standalone: true,
  imports: [
    NgStyle,
    BoardComponent
  ],
  styleUrl: './game.component.scss'
})
export class GameComponent {

  @ViewChild(BoardComponent) board: BoardComponent | undefined;
  // @Input() playerOneScore:number = 0;
  // @Input() playerTwoScore:number = 0;
  // protected readonly BoardComponent = BoardComponent;
  blendMode: Record<string, string> = {};
  p1Count = signal(0)
  p2Count = signal(0);
  gameStarted = signal(true);
  _thisActuallyMagicFrFr = effect(() => {
    this.blendMode = {
      'mix-blend-mode': this.gameStarted() ? 'normal' : 'color-dodge',
    }
    console.log(this.gameStarted());
  })
  public playerOneScore: number = 0; // problem here is that it doesnt get updated everytime that it changes value in board component.ts
  public playerTwoScore: number = 0;
  // p1Count:number = 0;
  // p2Count:number = 0;

  startGame(): void {
    if (this.gameStarted()) {
      // this.stopGame();
      return;
    }
    setTimeout(() => {

      this.gameStarted.set(true);
    }, 100)
    this.board?.resetGame();
  }

  stopGame(): void {

    this.p1Count.set(0);
    this.p2Count.set(0);
    this.gameStarted.set(false);
  }

  receiveDataP1($event: number) {
    this.p1Count.set($event);

    //console.log('Player one count : ' + this.p1Count)
  }

  receiveDataP2($event: number) {
    this.p2Count.set($event);
    //console.log('Player two count : ' + this.p2Count)
  }


}

