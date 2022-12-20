/* eslint-disable no-unused-vars */

var palindrome = function (x) {
  var inputString = x.toString();
  var reversedStr = inputString.split('').reverse().join('');
  if (reversedStr === inputString) {
    return true;
  }

  return false;
};
