/* eslint-disable no-unused-vars */

function matrixElementsSum(matrix) {
  let sum = 0;
  const skipCol = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (skipCol.includes(j)) {
        continue;
      }
      if (matrix[i][j] === 0) {
        skipCol.push(j);
        continue;
      }
      sum += matrix[i][j];
    }
  }
  return sum;
}
