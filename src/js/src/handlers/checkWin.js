/** NOTES:
 * * implement facade pattern to create only one class
 * * WinType instead of multiple different classes
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
		constructor(testCondition, winClass, winClassActive, message) {
			this.testCondition = testCondition;
			this.winClass = winClass;
			this.winClassActive = winClassActive;
			this.message = message;
		}
		logMessage() {
			console.log(`[${this.message}!]`);
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
		new WinType(
			isRow1Win,
			winRow1ClassName,
			winRow1ClassNameActive,
			'ROW 1 WIN'
		),
		new WinType(
			isRow2Win,
			winRow2ClassName,
			winRow2ClassNameActive,
			'ROW 2 WIN'
		),
		new WinType(
			isRow3Win,
			winRow3ClassName,
			winRow3ClassNameActive,
			'ROW 3 WIN'
		),
		new WinType(
			isCol1Win,
			winCol1ClassName,
			winCol1ClassNameActive,
			'COL 1 WIN'
		),
		new WinType(
			isCol2Win,
			winCol2ClassName,
			winCol2ClassNameActive,
			'COL 2 WIN'
		),
		new WinType(
			isCol3Win,
			winCol3ClassName,
			winCol3ClassNameActive,
			'COL 3 WIN'
		),
		new WinType(
			isDiag1Win,
			winDiag1ClassName,
			winDiag1ClassNameActive,
			'DIAG 1 WIN'
		),
		new WinType(
			isDiag2Win,
			winDiag2ClassName,
			winDiag2ClassNameActive,
			'DIAG 2 WIN'
		),
	]);

	return isThereAWinner;
};

export default checkWin;
