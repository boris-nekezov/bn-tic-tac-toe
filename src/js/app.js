/** Tic Tac Toa for 2 players
 * button "New Game" when it clicks it it load the playground
 *  */

import SETTINGS from './src/SETTINGS';
// handlers
import createMatrix from './src/handlers/createMatrix';
import resetButtons from './src/handlers/resetButtons';
import resetMatrix from './src/handlers/resetMatrix';
import checkWin from './src/handlers/checkWin';

const buttons = document.querySelectorAll('.tic-tac-toe__button');

let {
	isPlayerOne,
	matrix,
	matrixSize,
	playerOneSymbol,
	playerTwoSymbol,
	playgroundOverlay,
	overlayActiveClass,
	durration,
} = SETTINGS;
let isMatrixCreated = false;

const startGame = () => {
	console.log('[START GAME]');
	isPlayerOne = true;
	resetMatrix(matrix);
	resetButtons(buttons);
	// reset the class of winline
	document.querySelector('.win-line').className = 'win-line';
	// remove overlay active class
	playgroundOverlay.classList.remove(overlayActiveClass);
	// create matrix once
	if (!isMatrixCreated) {
		createMatrix(matrix, matrixSize);
		isMatrixCreated = true;
	}
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
		// win case confirm new game
		setTimeout(() => {
			alert(`Player ${player ? 'one' : 'two'} wins!`);
			startGame();
		}, durration * 2);
	} else {
		// no winner case when every button is clicked but there is no match
		let nowWinStack = 0;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix.length; j++) {
				if (matrix[i][j] !== '') {
					nowWinStack++;
				}
			}
		}
		if (nowWinStack === matrix.length * matrix.length) {
			setTimeout(() => {
				alert('No more moves! Tie!');
				startGame();
			}, durration);
		}
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
