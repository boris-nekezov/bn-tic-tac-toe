const resetButtons = buttons => {
	console.log(`[RESET BUTTONS]`);
	// reset buttons content
	[...buttons].map(button => {
		button.textContent = '';
		button.removeAttribute('disabled');
	});
};

export default resetButtons;
