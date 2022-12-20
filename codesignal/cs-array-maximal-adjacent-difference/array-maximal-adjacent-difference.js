/* eslint-disable no-unused-vars */

function arrayMaximalAdjacentDifference(inputArray) {

  let diff = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    const subDiff = Math.abs(inputArray[i + 1] - inputArray[i]);
    if (subDiff > diff) {
      diff = subDiff;
    }
  }

  return diff;

}
