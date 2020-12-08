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

	const winLine = document.querySelector('.tic-tac-toe__win-line');

	// row wins
	if (isRow1Win) {
		console.log('[Row1Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-row-1',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}
	if (isRow2Win) {
		console.log('[Row2Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-row-2',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}
	if (isRow3Win) {
		console.log('[Row3Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-row-3',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}

	// column wins
	if (isCol1Win) {
		console.log('[Col1Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-col-1',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}
	if (isCol2Win) {
		console.log('[Col2Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-col-2',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}
	if (isCol3Win) {
		console.log('[Col3Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-col-3',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}

	//diagonal wins
	if (isDiag1Win) {
		console.log('[Diag1Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-diag-1',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}
	if (isDiag2Win) {
		console.log('[Diag2Win]');
		winLine.classList.add(
			'tic-tac-toe__win-line--win-diag-2',
			'tic-tac-toe__win-line--active'
		);
		return true;
	}
};

export default checkWin;
