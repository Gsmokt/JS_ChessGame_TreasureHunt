const ChessBoardCreator = (function(){
    let instance;
    function init(){
        return new ChessBoard();
    }
    class ChessBoard{
        numbers = [8,7,6,5,4,3,2,1];
        letters = ['a','b','c','d','e','f','g','h'];
        createTable(){
            const table = this.numbers.map(e => this.letters.map(el => e+el));
            return table;
        }
    }
    return {
        getChessBoard: function(){
            if(!instance) instance = init().createTable();
            return instance;
        }
    }
})();

const table  = ChessBoardCreator.getChessBoard();
const table1  = ChessBoardCreator.getChessBoard();
if(table === table1) console.log(true);
// class Game{
//     constructor(){

//     }
// }

// class Factory{
//     constructor(){

//     }
// }





