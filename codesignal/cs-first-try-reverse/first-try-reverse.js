/* eslint-disable no-unused-vars */

function firstReverseTry(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const firstElement = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = firstElement;
  return arr;
}
