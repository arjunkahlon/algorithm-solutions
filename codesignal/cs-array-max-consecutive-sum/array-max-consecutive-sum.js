/* eslint-disable no-unused-vars */

function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;

  for (let i = 0; i <= inputArray.length - k; i++) {
    let subMax = 0;
    for (let j = i; j < (i + k); j++) {
      subMax += inputArray[j];
    }
    if (subMax > max) {
      max = subMax;
    }
  }
  return max;
}
