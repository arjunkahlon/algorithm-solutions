/* eslint-disable no-unused-vars */

function reverseInParenthesis(inputString) {
  while (inputString.includes('(')) {
    inputString = inputString.replaceAll(/\([a-z]*\)/g, str => {
      return str.split('').slice(1, -1).reverse().join('');
    });
  }
  return inputString;
}
