/* eslint-disable no-unused-vars */

function checkPalindrome(inputString) {
  let newStr = '';
  let revStr = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      newStr += inputString[i];
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    revStr += newStr[i];
  }

  if (newStr === revStr) {
    return true;
  }

  return false;
}
