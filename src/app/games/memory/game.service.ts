import { computed, Injectable, signal } from '@angular/core';
import { GameTile } from './game-tile';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  totalUncoveredTiles = computed(
    () => this.playerOneScore() + this.playerTwoScore(),
  );
  protected cardList: GameTile[] = this.arrayOfTiles();
  private _playerTwoScore = signal<number>(0);

  // player1Won = computed(() => {
  //   if (this._playerOneScore()+this._playerTwoScore()>4){
  //     return this._playerOneScore()>this._playerTwoScore();
  //   }
  //   return
  // })
  playerTwoScore = computed(() => {
    console.log('sum');
    return this._playerTwoScore();
  });
  private _playerOneScore = signal<number>(0);

  playerOneScore = computed(() => {
    console.log('sum');
    return this._playerOneScore();
  });

  /**
   * Debating where to place cardSelector method.
   * Could be cool to make it here because the click index will be global to all grids
   * Could make a game where you need to assign each definition to the respective image etc
   * and those images will be on a separate grid than the definition
   * HOWEVER since the ids reset every time i make a new board, I could also just compare the ids
   * that would be ideal if i only envision two maximum compares with two clicks and two grids
   * For now, it will do.
   */

  constructor() {}

  private _playerOneToPlay: boolean = true;

  get playerOneToPlay(): boolean {
    return this._playerOneToPlay;
  }

  set playerOneToPlay(value: boolean) {
    this._playerOneToPlay = value;
  }

  incPlayer() {
    if (!this._playerOneToPlay) {
      this._playerOneScore.update((value) => (value += 1));
    } else this._playerTwoScore.update((value) => (value += 1));
  }

  /**
   * This function could be slimmer but
   * like this, it is easier to change the return value if the card isn't found
   * by changing the undefined return type to the wanted return type
   * @param id
   */

  getCardById(id: number): GameTile | undefined {
    const tmpCard = this.cardList.find((GameTile) => {
      return GameTile.uniqueId === id;
    });
    if (tmpCard != undefined) {
      return tmpCard;
    } else return undefined;
  }

  getAllCards() {
    return this.cardList;
  }

  resetPlayers() {
    this._playerOneScore.set(0);
    this._playerTwoScore.set(0);
    this.playerOneToPlay = true;
  }

  private arrayOfTiles() {
    const tiles1Tmp: GameTile[] = makeHalfArray();
    const tiles2Tmp: GameTile[] = makeHalfArray();

    function makeHalfArray() {
      const arrayTmp = Array(6).fill(-1);
      for (let i = 0; i < 6; i++) {
        arrayTmp[i] = new GameTile(i);
      }
      return arrayTmp;
    }

    return tiles1Tmp.concat(tiles2Tmp);
  }
}
