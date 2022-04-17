export const ChessBoardCreator = (function () {
  let instance;
  function init() {
    return new ChessBoard();
  }
  class ChessBoard {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    createTable() {
      const table = this.numbers.map((e) => this.letters.map((el) => e + el));
      return table;
    }
  }
  return {
    getChessBoard: function () {
      if (!instance) instance = init().createTable();
      return instance;
    },
  };
})();
