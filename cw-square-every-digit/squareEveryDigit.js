/* eslint-disable no-unused-vars */

function squareDigits(num) {
  return parseInt(
    num.toString().split('')
      .map(x => x * x).join('')
  );
}
