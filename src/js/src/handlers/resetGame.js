const resetGame = (matrix, buttons) => {
	console.log(`[RESET GAME]`);
	console.log('[CONSOLE WILL BE CLEARED!');
	console.clear();

	// reset the matrix
	matrix = [];

	// reset buttons content
	[...buttons].map(button => {
		button.textContent = '';
		button.removeAttribute('disabled');
	});
	return matrix;
};

export default resetGame;
