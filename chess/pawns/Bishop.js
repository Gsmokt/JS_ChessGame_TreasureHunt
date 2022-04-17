import { Pawn } from "../Pawn.js";

export class Bishop extends Pawn {
  constructor(...props) {
    super(...props);
  }
  getMoves(board) {
    let i = 1;
    let table = [];
    this.position = board[this.y][this.x];
    while (i < 8) {
      if (this.y + i < 7 && this.x - i >= 0) {
        table = [...table, board[this.y + i][this.x - i]];
      }
      if (this.y + i < 7 && this.x + i < 8) {
        table = [...table, board[this.y + i][this.x + i]];
      }
      if (this.y - i >= 0 && this.x - i >= 0) {
        table = [...table, board[this.y - i][this.x - i]];
      }
      if (this.y - i >= 0 && this.x + i < 8) {
        table = [...table, board[this.y - i][this.x + i]];
      }
      i++;
    }
    this.moves.push(...table);
    return;
  }
}
