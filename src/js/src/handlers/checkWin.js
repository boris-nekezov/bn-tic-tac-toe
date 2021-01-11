import SETTINGS from '../SETTINGS';
let { playgroundOverlay, overlayActiveClass, durration } = SETTINGS;

// win line div class name
const winLineClassName = 'win-line';
const winLineClassSelector = `.${winLineClassName}`;
const winLine = document.querySelector(winLineClassSelector);

// row type of win classes
const winRowName = `${winLineClassName}--win-row`;
// row 1
const winRow1ClassName = `${winRowName}-1`;
const winRow1ClassNameActive = `${winRow1ClassName}-active`;
// row 2
const winRow2ClassName = `${winRowName}-2`;
const winRow2ClassNameActive = `${winRow2ClassName}-active`;
// row 3
const winRow3ClassName = `${winRowName}-3`;
const winRow3ClassNameActive = `${winRow3ClassName}-active`;

// column type of win classes
const winColName = `${winLineClassName}--win-col`;
// col 1
const winCol1ClassName = `${winColName}-1`;
const winCol1ClassNameActive = `${winCol1ClassName}-active`;
// col 2
const winCol2ClassName = `${winColName}-2`;
const winCol2ClassNameActive = `${winCol2ClassName}-active`;
// col 3
const winCol3ClassName = `${winColName}-3`;
const winCol3ClassNameActive = `${winCol3ClassName}-active`;

// diagonal type of win classes
const winDiagName = `${winLineClassName}--win-diag`;
// diag 1
const winDiag1ClassName = `${winDiagName}-1`;
const winDiag1ClassNameActive = `${winDiag1ClassName}-active`;
// diag 2
const winDiag2ClassName = `${winDiagName}-2`;
const winDiag2ClassNameActive = `${winDiag2ClassName}-active`;

// add first modifier class with basic styles for that type of win
// then add another active class after the delay to perform animation
const handleClasses = (className, classNameActive) => {
	winLine.classList.add(className);
	setTimeout(() => {
		console.log('add active');
		winLine.classList.add(classNameActive);
	}, durration);
};

const addPlaygroundOverlay = () => {
	playgroundOverlay.classList.add(overlayActiveClass);
	console.log('[add overlay playground]');
};

const checkWin = (matrix, btnContent) => {
	console.log(`[CHECK WIN]`);

	// row wins
	const isRow1Win =
		matrix[0][0] == btnContent &&
		matrix[0][1] == btnContent &&
		matrix[0][2] == btnContent
			? true
			: false;
	const isRow2Win =
		matrix[1][0] == btnContent &&
		matrix[1][1] == btnContent &&
		matrix[1][2] == btnContent
			? true
			: false;
	const isRow3Win =
		matrix[2][0] == btnContent &&
		matrix[2][1] == btnContent &&
		matrix[2][2] == btnContent
			? true
			: false;

	// column wins
	const isCol1Win =
		matrix[0][0] == btnContent &&
		matrix[1][0] == btnContent &&
		matrix[2][0] == btnContent
			? true
			: false;
	const isCol2Win =
		matrix[0][1] == btnContent &&
		matrix[1][1] == btnContent &&
		matrix[2][1] == btnContent
			? true
			: false;
	const isCol3Win =
		matrix[0][2] == btnContent &&
		matrix[1][2] == btnContent &&
		matrix[2][2] == btnContent
			? true
			: false;

	// diagonal wins
	const isDiag1Win =
		matrix[0][0] == btnContent &&
		matrix[1][1] == btnContent &&
		matrix[2][2] == btnContent
			? true
			: false;
	const isDiag2Win =
		matrix[0][2] == btnContent &&
		matrix[1][1] == btnContent &&
		matrix[2][0] == btnContent
			? true
			: false;

	// row type of wins
	if (isRow1Win) {
		handleClasses(winRow1ClassName, winRow1ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}
	if (isRow2Win) {
		handleClasses(winRow2ClassName, winRow2ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}
	if (isRow3Win) {
		handleClasses(winRow3ClassName, winRow3ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}

	// column type of wins
	if (isCol1Win) {
		handleClasses(winCol1ClassName, winCol1ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}
	if (isCol2Win) {
		handleClasses(winCol2ClassName, winCol2ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}
	if (isCol3Win) {
		handleClasses(winCol3ClassName, winCol3ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}

	// diagonal type of wins
	if (isDiag1Win) {
		handleClasses(winDiag1ClassName, winDiag1ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}
	if (isDiag2Win) {
		handleClasses(winDiag2ClassName, winDiag2ClassNameActive);
		addPlaygroundOverlay();
		return true;
	}
};

export default checkWin;
