const createMatrix = (matrix, matrixSize) => {
  console.log(`[CREATE MATRIX]`);
  for (let i = 0; i < matrixSize; i++) {
    matrix.push([]);
    for (let j = 0; j < matrixSize; j++) {
      matrix[i].push('');
    }
  }
};

export default createMatrix;