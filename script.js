const TicTacToe = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameOver = false;
  
    const checkWin = () => {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];
  
      return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
      });
    };
  
    const playerMove = (position) => {
      if (!gameOver && board[position] === '') {
        board[position] = currentPlayer;
        document.getElementById('cell-' + position).innerText = currentPlayer;
        if (checkWin()) {
          document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
          gameOver = true;
        } else if (board.every(cell => cell !== '')) {
          document.getElementById('result').innerText = 'It\'s a draw!';
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    };
  
    const reset = () => {
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      gameOver = false;
      document.getElementById('result').innerText = '';
      Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.innerText = '');
    };
  
    const createBoardUI = () => {
      const container = document.createElement('div');
      container.classList.add('container');
  
      const heading = document.createElement('h1');
      heading.textContent = 'Tic Tac Toe';
      container.appendChild(heading);
  
      const boardElement = document.createElement('div');
      boardElement.classList.add('board');
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = 'cell-' + i;
        cell.addEventListener('click', () => playerMove(i));
        boardElement.appendChild(cell);
      }
      container.appendChild(boardElement);
  
      const result = document.createElement('div');
      result.id = 'result';
      result.classList.add('result');
      container.appendChild(result);
  
      const resetButton = document.createElement('button');
      resetButton.textContent = 'Reset';
      resetButton.addEventListener('click', reset);
      container.appendChild(resetButton);
  
      document.body.appendChild(container);
    };
  
    return {
      init: () => {
        createBoardUI();
      }
    };
  })();
  
  TicTacToe.init();
  