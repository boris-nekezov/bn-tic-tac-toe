const overlay = 'overlay';
const SETTINGS = {
	isPlayerOne: true,
	matrix: [],
	matrixSize: 3,
	playerOneSymbol: 'X',
	playerTwoSymbol: 'O',
	// overlay
	playgroundOverlay: document.querySelector(`.${overlay}--playground`),
    overlayActiveClass: `${overlay}--active`,
    durration: 300
};

export default SETTINGS;
