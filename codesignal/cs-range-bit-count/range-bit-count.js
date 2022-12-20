/* eslint-disable no-unused-vars */

function rangeBitCount(a, b) {

  let counter = 0;
  let binaryRange = '';

  for (let i = a; i <= b; i++) {
    binaryRange += i.toString(2);
  }

  for (let i = 0; i < binaryRange.length; i++) {
    if (binaryRange[i] === '1') {
      counter++;
    }
  }

  return counter;
}
