import {Tile} from "./tile";

export class GameTile implements Tile {
  private static _id = 0;
  content: string;
  uniqueId: number;
  selectedProp: boolean;
  hidden: boolean;
  isShuffled: boolean;

  constructor(cardNum: number) {
    this.hidden = false;
    this.selectedProp = false;
    this.content = String(cardNum);
    this.uniqueId = GameTile._id;
    GameTile._id++;
    this.isShuffled = false;
  }

  toString(): string {
    return this.content;
  }

}
