import { board } from "./board.js";

class CellCoordinates {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }
}

class Game {
  constructor(cell, board) {
    this.cell = cell;
    this.board = board;
  }

  getCellClue({ y, x } = this.cell, board = this.board) {
    const clue = board[y - 1][x - 1];
    return clue;
  }

  moveCell({ y, x } = this.cell) {
    const coordinates = this.getCellClue()
      .toString()
      .match(/\d/g)
      .flatMap((e) => parseInt(e));
    this.cell.y = coordinates[0];
    this.cell.x = coordinates[1];
    console.log(`Visited cell: ${y}/${x}`);
  }

  findTreasure({ y, x } = this.cell) {
    if (String(y) + String(x) === this.getCellClue().toString()) {
      return true;
    }
    return false;
  }

  start({ y, x } = this.cell) {
    if (this.findTreasure())
      return `Visited cell: ${y}/${x}\n\nYou got it!\nThe treasure was in the cell: ${y}/${x}`;
    this.moveCell();
    return this.start();
  }
}

const game = new Game(new CellCoordinates(1, 1), board);
console.log(game.start());
