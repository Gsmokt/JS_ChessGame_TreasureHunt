import { ChessBoardCreator } from "./Board.js";
import { Position } from "./Positions.js";
import { Factory } from "./Factory.js";
import { Game } from "./game.js";

const factory = new Factory();
const position = new Position(ChessBoardCreator.getChessBoard(), factory);
const game = new Game(position);
console.log(game.start());
