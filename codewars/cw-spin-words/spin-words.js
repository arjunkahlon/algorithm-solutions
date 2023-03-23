/* eslint-disable no-unused-vars */

const spinWords = function (string) {
  return string.split(' ').map(e => {
    return e.length >= 5
      ? reverseStr(e)
      : e;
  }).join(' ');
};

const reverseStr = function (string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }

  return reversed;
};
