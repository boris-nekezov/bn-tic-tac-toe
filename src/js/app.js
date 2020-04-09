/** Tic Tac Toa for 2 players
 * button "New Game" when it clicks it it load the playground
 *  */ 

import SETTINGS  from './src/SETTINGS';
// handlers
import createMatrix from "./src/handlers/createMatrix";
import resetGame from "./src/handlers/resetGame";

const buttons = document.querySelectorAll('.tic-tac-toe__button');

let {   
    isPlayerOne, 
    matrix,
    matrixSize ,
    p1s,
    p2s
} = SETTINGS;

const startGame = () => {
  matrix = resetGame(matrix, isPlayerOne, buttons);
  createMatrix(matrix, matrixSize);
}

const setSymbol = (isPlayerOne) => {
    return isPlayerOne ? p1s : p2s;
}

const fillMatrix = (x, y, symbol) => {
    matrix[x][y] = symbol;
 
}

const checkRows = (m, l, x, y, s) => {
    let row1set = 0;
    m.map((val, i) => {
        m.map((val2, j) => {
            // console.log(`m[i][j]${m[i][j]}`);
            console.log(`x: ${x} i: ${i} y: ${y} j: ${j} s: ${s} m[x][y] ${m[x][y]}`);
            
            if (x == i && m[i][j] == s) {
                row1set++;
                console.log(`row1set`, row1set);
            }
        });
     
    });
    if (row1set === l) {
        console.log('win roowww!');
        return true;
    }
} 
const checkWin = (isPlayerOne,  x, y, s) => {    
    const m = matrix;
    const l = m.length;
  
    if (checkRows(m,l, x, y, s)) {
        return true;
    }

    const isRow1Win = m[0][0] == s && 
                    m[0][1] == s && 
                    m[0][2] == s ? true : false;
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




