import { Pawn } from "../Pawn.js";

export class King extends Pawn {
  constructor(...props) {
    super(...props);
  }
  getMoves(board) {
    this.position = board[this.y][this.x];
    if (this.y < 7) this.moves.push(board[this.y + 1][this.x]);
    if (this.y > 0) this.moves.push(board[this.y - 1][this.x]);
    if (this.y < 7 && this.x > 0)
      this.moves.push(board[this.y + 1][this.x - 1]);
    if (this.y < 7 && this.x < 7)
      this.moves.push(board[this.y + 1][this.x + 1]);
    if (this.x > 0) this.moves.push(board[this.y][this.x - 1]);
    if (this.x < 7) this.moves.push(board[this.y][this.x + 1]);
    if (this.y > 0 && this.x > 0)
      this.moves.push(board[this.y - 1][this.x - 1]);
    if (this.y > 0 && this.x < 7)
      this.moves.push(board[this.y - 1][this.x + 1]);
    return;
  }
}
