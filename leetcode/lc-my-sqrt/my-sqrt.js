/* eslint-disable no-unused-vars */

const mySqrt = function (x) {
  let numberSquare = 0;
  let i = 0;

  while (numberSquare <= x) {
    i++;
    numberSquare = i * i;
  }

  return i - 1;
};
