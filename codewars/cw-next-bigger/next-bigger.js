/* eslint-disable no-unused-vars */

function nextBigger(n) {

  if (n < 10) {
    return -1;
  }

  const arr = n.toString().split('');

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      const temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
      break;
    }
  }

  const biggerNum = parseInt(arr.join(''));

  return biggerNum >= n
    ? biggerNum
    : -1;
}
