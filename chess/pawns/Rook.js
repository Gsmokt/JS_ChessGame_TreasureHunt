import { Pawn } from "../Pawn.js";

export class Rook extends Pawn {
  constructor(...props) {
    super(...props);
  }
  getMoves(board) {
    let i = 1;
    let table = [];
    this.position = board[this.y][this.x];
    while (i < 8) {
      if (this.y - i >= 0) {
        table = [...table, board[this.y - i][this.x]];
      }
      if (this.y + i < 7) {
        table = [...table, board[this.y + i][this.x]];
      }
      if (this.x + i < 8) {
        table = [...table, board[this.y][this.x + i]];
      }
      if (this.x - i >= 0) {
        table = [...table, board[this.y][this.x - i]];
      }
      i++;
    }
    this.moves.push(...table);
    return;
  }
}
