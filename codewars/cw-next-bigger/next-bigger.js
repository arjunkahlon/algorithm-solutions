/* eslint-disable no-unused-vars */

function nextBigger(n) {
  const nextNum = parseInt(n.toString().split('').sort((a, b) => b - a).join(''));

  return nextNum >= n
    ? nextNum
    : -1;
}
