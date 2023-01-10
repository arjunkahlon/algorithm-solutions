/* eslint-disable no-unused-vars */

function isTandemRepeat(inputString) {
  if (inputString.length % 2 !== 0) {
    return false;
  }

  return inputString.substr(0, inputString.length / 2) === inputString.substr(inputString.length / 2);
}
