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
    const createPlayer = function(name, symbol){
        if(symbol === 'x' || symbol === 'o'){
            return {name, symbol};
        } else {
            return `Wrong symbol, available are only 'x' or 'o'`;
        }
    }

    return {createPlayer}
})()

//module for the game's logic, handling which turn etc.
const gameFlow = (function(){

})()