import { Pawn } from "../Pawn.js";

export class Rook extends Pawn {
  constructor(...props) {
    super(...props);
  }
  getMoves(board) {
    let i = 1;
    this.position = board[this.y][this.x];
    while (i < 8) {
      if (this.y - i >= 0) {
        this.moves.push(board[this.y - i][this.x]);
      }
      if (this.y + i < 7) {
        this.moves.push(board[this.y + i][this.x]);
      }
      if (this.x + i < 8) {
        this.moves.push(board[this.y][this.x + i]);
      }
      if (this.x - i >= 0) {
        this.moves.push(board[this.y][this.x - i]);
      }
      i++;
    }
    return;
  }
}
