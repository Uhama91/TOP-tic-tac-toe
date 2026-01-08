const boardgame = (function(){
    let board = ["", "", "", "", "", "", "", "", ""];

    // function that indiquate position and symbole on the game's board
    const writeInTheBoard = (position, symbol) => {
        return board[position] = symbol;
    }

    const getBoard = () => {
        return board
    } 
    
    return {getBoard, writeInTheBoard}
})();

//module for the players
const player = (function(){
    const createPLayer = function(name, symbol){
        if(symbol === 'x' || symbol === 'o'){
            return {name, symbol};
        } else {
            return `Wrong symbol, available are only 'x' or 'o'`;
        }
    }

    console.log(createPLayer('Ullie', 'x'))

    const player1 = createPLayer();
    const player2 = createPLayer();

})()

//module for the game's logic, handling which turn etc.
const gameFlow = (function(){

})()