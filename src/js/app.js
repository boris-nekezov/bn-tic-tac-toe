/** Tic Tac Toa for 2 players
 * button "New Game" when it clicks it it load the playground
 *  */ 

import SETTINGS  from './src/SETTINGS';

const buttons = document.querySelectorAll('.tic-tac-toe__button');

let {   
    isPlayerOne, 
    matrix,
    matrixSize ,
    p1s,
    p2s
} = SETTINGS;

const resetGame = () => {
    matrix = [];
    isPlayerOne = true;
    [...buttons].map(button => {
        button.textContent = ''
        button.removeAttribute('disabled');
    });
}

const startGame = () => {
    resetGame();
    isGameStarted = true;

    createMatrix();
}

const createMatrix = () => {
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push('');
        }    
      
    }
}

const setSymbol = (isPlayerOne) => {
    return isPlayerOne ? p1s : p2s;
}

const fillMatrix = (x, y, symbol) => {
    matrix[x][y] = symbol;
 
}

const checkWin = (isPlayerOne,  x, y, s) => {    
    const m = matrix;

    const isRow1Win = m[0][0] == s && m[0][1] == s && m[0][2] == s ? true : false;
    const isRow2Win = m[1][0] == s && m[1][1] == s && m[1][2] == s ? true : false;
    const isRow3Win = m[2][0] == s && m[2][1] == s && m[2][2] == s ? true : false;
    
    const isCow1Win = m[0][0] == s && m[1][0] == s && m[2][0] == s ? true : false;
    const isCow2Win = m[0][1] == s && m[1][1] == s && m[2][1] == s ? true : false;
    const isCow3Win = m[0][2] == s && m[1][2] == s && m[2][2] == s ? true : false;
    
    const isDiag1Win = m[0][0] == s && m[1][1] == s && m[2][2] == s ? true : false;
    const isDiag2Win = m[0][2] == s && m[1][1] == s && m[2][0] == s ? true : false;

    if (
        isRow1Win || isRow2Win || isRow3Win || 
        isCow1Win || isCow2Win || isCow3Win ||
        isDiag1Win || isDiag2Win 
    ) {
        return true;
    } 
}

const playMove = (event) => {
    const symbol = setSymbol(isPlayerOne);
    const btn = event.toElement;
    btn.textContent = symbol;
    btn.setAttribute('disabled', 'disabled');
     
    const x = btn.getAttribute('data-pos-x');
    const y = btn.getAttribute('data-pos-y');
    const s = btn.textContent;

    fillMatrix(x,y, s);

    const player = isPlayerOne;
    if(checkWin(isPlayerOne, x, y, s)) {
        setTimeout(() => {
            confirm(`${player ? 'Player one ' : 'Player two'} wins! New game?`) ? startGame(): null;
        }, 100);
    }
    
    isPlayerOne = !isPlayerOne;
    
}

const App = () => {
    startGame();   
    [...buttons].map((button) => {
        button.addEventListener('click', playMove);
    });
}

export default App;




