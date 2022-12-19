/* eslint-disable no-unused-vars */

function countBlackCells(n, m) {
  return (n + m) + greatestCommonDivisor(n, m) - 2;

}

function greatestCommonDivisor(a, b) {
  if (a === 0) {
    return b;
  } else {
    return greatestCommonDivisor(b % a, a);
  }
}
