/* eslint-disable no-unused-vars */

function arrayPacking(a) {
  const binaryArr = a.slice(0).reverse().map(x => (
    '00000000' + x.toString(2)
  ).slice(-8));
  const M = parseInt(binaryArr.join(''), 2);
  return M;
}
