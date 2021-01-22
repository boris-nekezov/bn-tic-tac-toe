const overlay = 'overlay';
const winLineClassName = 'win-line';
const winLineClassSelector = `.${winLineClassName}`;

const SETTINGS = {
	isPlayerOne: true,
	matrix: [],
	matrixSize: 3,
	playerOneSymbol: 'X',
	playerTwoSymbol: 'O',
	// overlay
	playgroundOverlay: document.querySelector(`.${overlay}--playground`),
	overlayActiveClass: `${overlay}--active`,
	durration: 300,
	// winline
	winLineClassSelector: winLineClassSelector,
	winLine: document.querySelector(winLineClassSelector),
	winLineClassName: winLineClassName,
};

export default SETTINGS;
