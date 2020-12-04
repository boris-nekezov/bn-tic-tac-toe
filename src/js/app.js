/** Tic Tac Toa for 2 players
 * button "New Game" when it clicks it it load the playground
 *  */

import SETTINGS from './src/SETTINGS';
// handlers
import createMatrix from './src/handlers/createMatrix';
import resetGame from './src/handlers/resetGame';
import checkWin from './src/handlers/checkWin';

const buttons = document.querySelectorAll('.tic-tac-toe__button');

let {
	isPlayerOne,
	matrix,
	matrixSize,
	playerOneSymbol,
	playerTwoSymbol,
} = SETTINGS;

const startGame = () => {
	isPlayerOne = true;
	// console.log('resetGame(matrix, buttons)', resetGame(matrix, buttons));
	matrix = resetGame(matrix, buttons);
	console.log('startGame matrix', matrix);
	createMatrix(matrix, matrixSize);
};

const setSymbol = isPlayerOne => {
	return isPlayerOne ? playerOneSymbol : playerTwoSymbol;
};

const fillMatrix = (x, y, btnContent) => {
	matrix[x][y] = btnContent;
};

const playMove = event => {
	const symbol = setSymbol(isPlayerOne);
	const btn = event.target;

	btn.textContent = symbol;
	btn.setAttribute('disabled', 'disabled');

	const x = btn.getAttribute('data-pos-x');
	const y = btn.getAttribute('data-pos-y');
	const btnContent = btn.textContent;

	fillMatrix(x, y, btnContent);

	const player = isPlayerOne;
	if (checkWin(matrix, btnContent)) {
		setTimeout(() => {
			confirm(`Player ${player ? 'one' : 'two'} wins! New game?`)
				? startGame()
				: null;
		}, 100);
	}

	isPlayerOne = !isPlayerOne;
};

const App = () => {
	startGame();
	[...buttons].map(button => {
		button.addEventListener('click', playMove);
	});
};

export default App;
