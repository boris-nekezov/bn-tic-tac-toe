const resetGame = (matrix, buttons) => {
  console.log(`[RESET GAME]`);
  matrix = [];
    [...buttons].map(button => {
        button.textContent = ''
        button.removeAttribute('disabled');
    });
  return matrix;
}

export default resetGame;