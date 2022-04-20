import { Pawn } from "../Pawn.js";

export class Knight extends Pawn {
  constructor(...props) {
    super(...props);
  }
  getMoves(board) {
    let table = [];
    this.position = board[this.y][this.x];
    if (this.y < 6 && this.x > 0)
      table = [...table, board[this.y + 2][this.x - 1]];
    if (this.y < 7 && this.x > 1)
      table = [...table, board[this.y + 1][this.x - 2]];
    if (this.y > 0 && this.x > 1)
      table = [...table, board[this.y - 1][this.x - 2]];
    if (this.y > 1 && this.x > 0)
      table = [...table, board[this.y - 2][this.x - 1]];
    if (this.y < 6 && this.x < 7)
      table = [...table, board[this.y + 2][this.x + 1]];
    if (this.y < 7 && this.x < 6)
      table = [...table, board[this.y + 1][this.x + 2]];
    if (this.y > 1 && this.x < 7)
      table = [...table, board[this.y - 2][this.x + 1]];
    if (this.y > 0 && this.x < 6)
      table = [...table, board[this.y - 1][this.x + 2]];
    this.moves.push(...table);
    return;
  }
}
