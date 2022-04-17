export class Position {
  constructor(board, factory) {
    this.pawns = ["king", "rook", "bishop", "queen", "knight"];
    this.positions = [];
    this.createdPawns = [];
    this.board = board;
    this.factory = factory;
  }
  randomSpot() {
    const Y = Math.floor(Math.random() * this.board.length);
    const X = Math.floor(Math.random() * this.board.length);
    const pawn = Math.floor(Math.random() * this.pawns.length);
    if (!this.positions.includes(this.board[Y][X])) {
      this.positions.push(this.board[Y][X]);
      this.createdPawns.push(
        this.factory.getPawns(this.pawns[pawn], Y, X, this.board)
      );
      return;
    }
    return this.randomSpot();
  }
}
