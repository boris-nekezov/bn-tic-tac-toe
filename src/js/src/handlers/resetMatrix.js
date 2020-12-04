const resetMatrix = matrix => {
	console.log('[RESET MATRIX]');
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			// if the symbol is not empty string make it so
			if (matrix[i][j] !== '') {
				matrix[i][j] = '';
			}
		}
	}
	return matrix;
};

export default resetMatrix;
