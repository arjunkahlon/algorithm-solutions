/* eslint-disable no-unused-vars */

function rangeBitCount(a, b) {
  // console.log(a.toString(2));
  let counter = 0;
  let binaryRange = a.toString(2);

  for (let i = a + 1; i < b; i++) {
    binaryRange += i.toString(2);
  }

  binaryRange += b.toString(2);

  for (let i = 0; i < binaryRange.length; i++) {
    if (binaryRange[i] === '1') {
      counter++;
    }
  }

  return counter;
}
