/* eslint-disable no-unused-vars */

function replaceMiddle(arr) {
  const size = arr.length;
  if (size % 2 !== 0) {
    return arr;
  }
  const middleIndex = Math.floor(size / 2);
  const middle = arr[middleIndex] + arr[middleIndex - 1];

  arr.splice(middleIndex - 1, 2, middle);
  return arr;
}
