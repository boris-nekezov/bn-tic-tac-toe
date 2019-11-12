/** Tic Tac Toa for 2 players
 * button "New Game" when it clicks it it load the playground
 * 
 * player one is active
 * 
 * when play one clicks the button call checkWin() and if there is no wind we switch to player two
 * 
 * Plan: 
 * button have pos-x and pos-y data attribute
 * 
 * player 1 is with "X" symbol
 * player 2 is with "O" symbol
 * 
 * we have matrix 3x3 and there we will save the values X and O
 * 
 * when player clicks on a button we get it's coords and write them
 * in the matrix, then we check if we have 3 in a row
 *  */ 

import SETTINGS  from './src/SETTINGS';
const { isGameStarted, playerOne, playerTwo } = SETTINGS;

const App = () => {
    console.log(isGameStarted, playerOne, playerTwo);
}

export default App;




