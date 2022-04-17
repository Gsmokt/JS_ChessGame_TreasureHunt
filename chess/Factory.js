import { Bishop } from "./pawns/Bishop.js";
import { King } from "./pawns/King.js";
import { Knight } from "./pawns/Knight.js";
import { Queen } from "./pawns/Queen.js";
import { Rook } from "./pawns/Rook.js";

export class Factory {
  getPawns(name, randomY, randomX, board) {
    switch (name) {
      case "king":
        const king = new King(randomY, randomX, "king");
        king.getMoves(board);
        console.log(king.name + " at position " + king.position);
        return king;
      case "rook":
        const rook = new Rook(randomY, randomX, "rook");
        rook.getMoves(board);
        console.log(rook.name + " at position " + rook.position);
        return rook;
      case "bishop":
        const bishop = new Bishop(randomY, randomX, "bishop");
        bishop.getMoves(board);
        console.log(bishop.name + " at position " + bishop.position);
        return bishop;
      case "queen":
        const queen = new Queen(randomY, randomX, "queen");
        queen.getMoves(board);
        console.log(queen.name + " at position " + queen.position);
        return queen;
      case "knight":
        const knight = new Knight(randomY, randomX, "knight");
        knight.getMoves(board);
        console.log(knight.name + " at position " + knight.position);
        return knight;
      default:
        return;
    }
  }
}
