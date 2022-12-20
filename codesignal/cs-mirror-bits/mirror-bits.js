/* eslint-disable no-unused-vars */

function mirrorBits(a) {
  const bits = a.toString(2).split('').reverse().join('');
  return parseInt(bits, 2);
}
