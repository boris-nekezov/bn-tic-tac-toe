const checkWin = (matrix, btnContent) => {
	const delay = 300;
	const winLineClassName = 'win-line';
	const winRowName = `${winLineClassName}--win-row`;
	const winRow1ClassName = `${winRowName}-1`;
	const winRow1ClassNameActive = `${winRow1ClassName}-active`;
	const winRow2ClassName = `${winRowName}-2`;
	const winRow2ClassNameActive = `${winRow2ClassName}-active`;
	const winRowName3 = `${winRowName}-3`;
	const winLineClassSelector = `.${winLineClassName}`;
	// const winLineRow;
	const winLine = document.querySelector(winLineClassSelector);
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

	// todo make this whole if a function that is called in switch statement
	// row wins
	// row 1 wins
	if (isRow1Win) {
		console.log('[Row1Win]');
		winLine.classList.add(winRow1ClassName);
		setTimeout(() => {
			console.log('add active');
			winLine.classList.add(winRow1ClassNameActive);
		}, delay);
		return true;
	}
	// row 2 wins
	if (isRow2Win) {
		console.log('[Row2Win]');
		winLine.classList.add(winRow2ClassName);
		setTimeout(() => {
			console.log('add active');
			winLine.classList.add(winRow2ClassNameActive);
		}, delay);
		return true;
	}

	if (isRow2Win) {
		console.log('[Row2Win]');
		winLine.classList.add('win-line--win-row-2', 'win-line--active');
		return true;
	}
	if (isRow3Win) {
		console.log('[Row3Win]');
		winLine.classList.add('win-line--win-row-3', 'win-line--active');
		return true;
	}

	// column wins
	if (isCol1Win) {
		console.log('[Col1Win]');
		winLine.classList.add('win-line--win-col-1', 'win-line--active');
		return true;
	}
	if (isCol2Win) {
		console.log('[Col2Win]');
		winLine.classList.add('win-line--win-col-2', 'win-line--active');
		return true;
	}
	if (isCol3Win) {
		console.log('[Col3Win]');
		winLine.classList.add('win-line--win-col-3', 'win-line--active');
		return true;
	}

	//diagonal wins
	if (isDiag1Win) {
		console.log('[Diag1Win]');
		winLine.classList.add('win-line--win-diag-1', 'win-line--active');
		return true;
	}
	if (isDiag2Win) {
		console.log('[Diag2Win]');
		winLine.classList.add('win-line--win-diag-2', 'win-line--active');
		return true;
	}
};

export default checkWin;
