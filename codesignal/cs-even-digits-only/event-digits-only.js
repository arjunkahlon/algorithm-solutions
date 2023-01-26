/* eslint-disable no-unused-vars */

function evenDigitsOnly(n) {
  return n.toString().split('').every(
    e => e % 2 === 0
  );
}
