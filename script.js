const gameBoard = () => {
    const rows = 3;
    const columns = 3;
    const board = [];

    for( let i = 0; i < rows; i++){
        board[i] = [];
        for( let j = 0; j < columns; j++){
            board[i][j] = 0;
        }
    }

    const getBoard = () => board;
    

    const dropToken = (row, column, player ) => {
        if(board[row][column] === 0){
            board[row][column] = player;
            }
    }

    const printBoard = () => console.log(board)
    
    
        return { getBoard, dropToken, printBoard}
}


const gameController = (playerOneName = "Player One", playerTwoName = "Player Two") => {

    const board = gameBoard();

    const players = [
        {
            name: playerOneName,
            token: 1
        }, 
        {
            name: playerTwoName,
            token: 2
        }
    ]

    let activePlayer = players[0]

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
      };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
      };

    return { board, players, switchPlayerTurn, getActivePlayer, printNewRound }
}
