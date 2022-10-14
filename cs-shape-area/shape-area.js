/* eslint-disable no-unused-vars */

function shapeArea(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * n + (n - 1) * (n - 1);
}
