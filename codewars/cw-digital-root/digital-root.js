/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */

function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  const number = parseInt(n.toString().split('').reduce(
    (y, x) => y += parseInt(x), Number(0)).toString());

  return digitalRoot(number);
}
