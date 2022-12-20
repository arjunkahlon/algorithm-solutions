/* eslint-disable no-unused-vars */

function killKthBit(n, k) {
  return n & ~(1 << (k - 1));
}
