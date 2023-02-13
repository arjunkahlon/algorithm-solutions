/* eslint-disable no-unused-vars */

function digitDegree(n) {

  if (n < 10) {
    return 0;
  }

  let counter = 0;
  let num = n;
  let sum = null;

  do {
    sum = num
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);
    counter++;
    num = sum;
  } while (sum >= 10);

  return counter;
}
