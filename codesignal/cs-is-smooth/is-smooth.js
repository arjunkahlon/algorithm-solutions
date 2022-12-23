/* eslint-disable no-unused-vars */

function isSmooth(arr) {
  const beginningElement = arr[0];
  const lastElement = arr[arr.length - 1];
  const middle = (arr.length % 2 === 0)
    ? arr[(arr.length / 2) - 1] + arr[arr.length / 2]
    : arr[Math.floor(arr.length / 2)];

  return (new Set([beginningElement, lastElement, middle]).size === 1);
}
