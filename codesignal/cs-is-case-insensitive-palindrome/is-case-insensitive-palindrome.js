/* eslint-disable no-unused-vars */

function isCaseInsensitivePalindrome(inputString) {
  return inputString.toLowerCase() ===
    inputString.toLowerCase().split('').reverse().join('');
}
