/* eslint-disable no-unused-vars */

function secondRightMostZeroBit(n) {
  let k;
  return ~(k = n | n + 1) & k + 1;
}
