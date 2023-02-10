/* eslint-disable no-unused-vars */

function longestDigitsPrefix(inputString) {
  const index = inputString.split('').findIndex(e => !e.match(/\d/));

  return index === -1 ? inputString : inputString.slice(0, index);
}
