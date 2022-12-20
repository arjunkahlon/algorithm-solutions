/* eslint-disable no-unused-vars */

function leastFactorial(n) {
  let k = 1; let m = 1;

  while (k < n) {
    k *= ++m;
  }
  return k;
}
