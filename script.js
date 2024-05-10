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


const displayGame = () => {
    const board = gameBoard();

    const controller = gameController()

    const justBoard = board.getBoard();

       console.log(justBoard)

    const body = document.querySelector("body")

       console.log(body)

       function handleClick(event) {
            const elementId = event.target.id;


            console.log(elementId)

            const numStr = elementId.toString();

            const digitsArr = numStr.split('');

            const rowColumnArr = digitsArr.map(Number)

            console.log(rowColumnArr)

            console.log(controller.getActivePlayer().token)

            board.dropToken(rowColumnArr[0], rowColumnArr[1], controller.getActivePlayer().token )

            controller.switchPlayerTurn()

            controller.printNewRound()

            if(justBoard[rowColumnArr[0]][rowColumnArr[1]] === 1){
                this.textContent = "X";
            }else if(justBoard[rowColumnArr[0]][rowColumnArr[1]] === 2){
                this.textContent = "O";
            }
       }



       for (let i = 0; i < justBoard.length; i++) {
          const div = document.createElement('div')
           body.appendChild(div)
           body.id = `${i}`
           for(let j = 0; j < justBoard[i].length; j++){
               const span = document.createElement('span')
               div.appendChild(span)
               span.id = `${i}${j}`

                span.addEventListener("click", handleClick);
           }
       }



   }

   displayGame()