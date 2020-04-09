const resetGame = (matrix, isPlayerOne, buttons) => {
  console.log(`[RESET GAME]`);
  matrix = [];
    isPlayerOne = true;
    [...buttons].map(button => {
        button.textContent = ''
        button.removeAttribute('disabled');
    });
  return matrix;
}

export default resetGame;