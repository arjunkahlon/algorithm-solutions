/* eslint-disable no-unused-vars */

function magicalWell(a, b, n) {
  let total = 0;
  while (n-- > 0) {
    total += (a++ * b++);
  }
  return total;
}
