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

    const div = document.createElement('div');
    body.appendChild(div);
    div.id = "playerNames";

    const player1 = document.createElement('h2')
    const player2 = document.createElement('h2');
    div.appendChild(player1);
    div.appendChild(player2);
    player1.textContent = controller.players[0].name;
    player2.textContent = controller.players[1].name

       function handleClick(event) {
            const elementId = event.target.id;


            console.log(elementId)

            const numStr = elementId.toString();

            const digitsArr = numStr.split('');

            const rowColumnArr = digitsArr.map(Number)

            console.log(rowColumnArr)

            console.log(controller.getActivePlayer().token)

            board.dropToken(rowColumnArr[0], rowColumnArr[1], controller.getActivePlayer().token )

            

            

            if(justBoard[rowColumnArr[0]][rowColumnArr[1]] === 1 && this.textContent === ""){
                this.textContent = "X";
                controller.printNewRound();
                controller.switchPlayerTurn();
            }else if(justBoard[rowColumnArr[0]][rowColumnArr[1]] === 2 && this.textContent === ""){
                this.textContent = "O";
                controller.printNewRound();
                controller.switchPlayerTurn();
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