import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { GameTile } from '../game-tile';
import { GameService } from '../game.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  standalone: true,
  imports: [SquareComponent, NgForOf],
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  private static playerOneCount: number;
  private static playerTwoCount: number;
  tmpTiles: GameTile[] = [];
  allTheTiles: GameTile[] = [];
  gameService: GameService = inject(GameService);
  @Input() gameStartedSignalId: any;
  @Output() allTilesUncovered = computed(() => {
    return this.gameService.totalUncoveredTiles() > 5;
  });
  selectedSquares = signal<GameTile[]>([]);
  result = computed(() => {
    let a = false;
    if (this.selectedSquares().length === 2) {
      console.log('this exec');
      a =
        this.selectedSquares()[0].content === this.selectedSquares()[1].content;

      return a;
    }
    if (this.selectedSquares().length === 0) {
      a = false;
    }
    return a;
  });
  onFroze: boolean = false;
  // @Output() player2 = this.gameService.playerTwoScore;
  @Output() sentMessageP1 = new EventEmitter<number>();
  @Output() sentMessageP2 = new EventEmitter<number>();
  /**
   * Make it that if the game is not started, click doesnt work.
   * Start game through main component
   */
  @Input() gameStarted: boolean = false;
  // protected readonly update = update;
  protected readonly SquareComponent = SquareComponent;

  constructor() {
    //reminder try to put constructor args in ngoninit
    this.allTheTiles = this.gameService.getAllCards();
  }

  public static getScores() {
    return [this.playerOneCount, this.playerTwoCount];
  }

  clickHandler(id: number) {
    if (!this.gameStarted) {
      return;
    }
    // setTimeout(()=>{
    //   this.passDataToParent();
    // }, 50)

    if (this.onFroze) return;
    if (!this.onFroze) {
      this.addToSelection(id);
      //this.onFroze = true;
    }
  }

  removeTile() {
    if (this.result()) {
      //could probably add here that depending on what player to play give points to that player or opposite player idk logic seems weird
      //  this.incPlayer();
      this.gameService.incPlayer();
      this.selectedSquares().forEach((value) => {
        const tile = this.allTheTiles.find(() => value === value);
        tile ? (value.hidden = true) : tile;
      });
      if (this.allTilesUncovered()) {
        setTimeout(() => {
          this.gameStartedSignalId.set(false);
          this.gameStarted = false;
        }, 1000);
      }
    }
  }

  unSetSelected() {
    if (this.tmpTiles) {
      this.tmpTiles.forEach((value) => {
        value.selectedProp = false;
      });
    }
  }

  // p1 = this.gameService.playerOneScore()
  // p2 = this.gameService.playerTwoScore()

  // @Output() player1 = this.gameService.playerOneScore;

  setSelected() {
    if (this.tmpTiles.length >= 0) {
      this.tmpTiles.forEach((value) => {
        value.selectedProp = true;
      });
    }
  }

  resetGame() {
    this.gameService.resetPlayers();
    this.testState();
    //this.resetPlayers();
    this.tmpTiles = [];
    this.selectedSquares.update(() => []);
    this.allTheTiles.forEach((value) => {
      value.hidden = false;
      value.selectedProp = false;
    });

    setTimeout(() => {
      this.shuffle();
    }, 500);
  }

  addToSelection(id: number) {
    if (this.gameService.getCardById(id)?.hidden) {
      // problem here is that this will return false if card is undefined
      return;
    }
    const tmp = this.gameService.getCardById(id);
    const mySquares = this.tmpTiles;
    if (tmp) {
      if (mySquares.find((tyeule) => tyeule === tmp)) {
        this.unSetSelected();
        this.tmpTiles = [];
      } else {
        this.tmpTiles.push(tmp);
      }
    }
    console.log('this that tmptiles ' + this.tmpTiles);
    if (this.tmpTiles.length === 2) {
      setTimeout(() => {
        this.passDataToParent();
      }, 502);

      if (this.onFroze) return;
      setTimeout(() => {
        this.gameService.playerOneToPlay = !this.gameService.playerOneToPlay;
      }, 499);

      //this.incPlayer();
      console.log(this.gameService.playerOneScore(), ' ');

      // this.playerOneToPlay=!this.playerOneToPlay;
      if (!this.onFroze) {
        this.onFroze = true;
        this.selectedSquares.update((value) => this.tmpTiles);

        setTimeout(() => {
          this.removeTile();
          //this.onFroze = false;
          this.unSetSelected();
          this.tmpTiles = [];
        }, 500);
      }
      setTimeout(() => {
        this.onFroze = false;
      }, 500);
      //this.onFroze=true;
    }
    this.setSelected();
  }

  shuffle() {
    //stack overflow ngl https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = this.allTheTiles.length,
      randomIndex: number;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.allTheTiles[currentIndex], this.allTheTiles[randomIndex]] = [
        this.allTheTiles[randomIndex],
        this.allTheTiles[currentIndex],
      ];
    }

    //return this.allTheTiles;
  }

  ngOnInit(): void {
    this.shuffle();
  }

  passDataToParent() {
    this.sentMessageP1.emit(this.gameService.playerOneScore());
    this.sentMessageP2.emit(this.gameService.playerTwoScore());
  }

  // I think I broke sum

  testState() {
    this.gameStarted = !this.gameStarted;
  }
}
