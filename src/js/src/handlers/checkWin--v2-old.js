/** NOTES:
 * * implement open-close principle to remove the huge number of if statements for checking win
 * * create a class for every win type
 * * remove multiple ifs
 */
import SETTINGS from '../SETTINGS';
import addPlaygroundOverlay from './addPlaygroundOverlay';
import addWinClasses from './addWinClasses';
let { winLineClassName } = SETTINGS;

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

	let isThereAWinner = false;

	class WinType {
		constructor() {}
	}

	class Row1Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winRow1ClassName;
			this.winClassActive = winRow1ClassNameActive;
		}
		logMessage() {
			console.log('[ROW 1 WIN!]');
		}
	}

	class Row2Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winRow2ClassName;
			this.winClassActive = winRow2ClassNameActive;
		}
		logMessage() {
			console.log('[ROW 2 WIN!]');
		}
	}

	class Row3Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winRow3ClassName;
			this.winClassActive = winRow3ClassNameActive;
		}
		logMessage() {
			console.log('[ROW 3 WIN!]');
		}
	}

	class Col1Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winCol1ClassName;
			this.winClassActive = winCol1ClassNameActive;
		}
		logMessage() {
			console.log('[COL 1 WIN!]');
		}
	}

	class Col2Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winCol2ClassName;
			this.winClassActive = winCol2ClassNameActive;
		}
		logMessage() {
			console.log('[COL 2 WIN!]');
		}
	}

	class Col3Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winCol3ClassName;
			this.winClassActive = winCol3ClassNameActive;
		}
		logMessage() {
			console.log('[COL 3 WIN!]');
		}
	}

	class Diag1Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winDiag1ClassName;
			this.winClassActive = winDiag1ClassNameActive;
		}
		logMessage() {
			console.log('[DIAG 1 WIN!]');
		}
	}

	class Diag2Win {
		constructor(testCondition) {
			this.testCondition = testCondition;
			this.winClass = winDiag2ClassName;
			this.winClassActive = winDiag2ClassNameActive;
		}
		logMessage() {
			console.log('[DIAG 2 WIN!]');
		}
	}

	function openCloseCheckWin(winTypes) {
		console.log('openCloseCheckWin');
		winTypes.some(winType => {
			if (winType.testCondition) {
				addWinClasses(winType.winClass, winType.winClassActive);
				addPlaygroundOverlay();
				winType.logMessage();
				isThereAWinner = true;
			}
		});
	}

	openCloseCheckWin([
		new Row1Win(isRow1Win),
		new Row2Win(isRow2Win),
		new Row3Win(isRow3Win),
		new Col1Win(isCol1Win),
		new Col2Win(isCol2Win),
		new Col3Win(isCol3Win),
		new Diag1Win(isDiag1Win),
		new Diag2Win(isDiag2Win),
	]);

	return isThereAWinner;
};

export default checkWin;
