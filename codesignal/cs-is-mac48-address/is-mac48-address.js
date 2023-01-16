/* eslint-disable no-unused-vars */

function isMac48Address(inputString) {
  var inputArr = inputString.split('-');
  var hexRegex = /^[A-F0-9]{2}$/;

  if (inputArr.length !== 6) {
    return false;
  }

  return inputArr.every(
    a => hexRegex.test(a));
}
