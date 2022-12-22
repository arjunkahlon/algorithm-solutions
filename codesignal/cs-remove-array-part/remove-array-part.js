/* eslint-disable no-unused-vars */

function removeArrayPart(inputArray, l, r) {
  inputArray.splice(l, 1 + (r - l));
  return inputArray;
}
