/* eslint-disable no-unused-vars */

function arrayChange(inputArray) {
  let counter = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      counter += (inputArray[i] + 1 - inputArray[i + 1]);
      inputArray[i + 1] = inputArray[i] + 1;
    }
  }
  return counter;
}
