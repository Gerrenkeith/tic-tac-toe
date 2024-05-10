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



