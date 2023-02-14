/* eslint-disable no-unused-vars */

function removeNb(n) {
  const removedNumbers = [];

  for (let a = 1; a <= n; a++) {
    const b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      removedNumbers.push([a, b]);
    }
  }
  return removedNumbers;
}
