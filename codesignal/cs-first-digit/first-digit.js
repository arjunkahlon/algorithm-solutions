/* eslint-disable no-unused-vars */

function firstDigit(inputString) {
  return inputString.split('').find(element => /^\d$/.test(element));
}
