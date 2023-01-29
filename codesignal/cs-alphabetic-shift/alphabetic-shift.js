/* eslint-disable no-unused-vars */

function alphabeticShift(inputString) {
  return inputString.split('').map(
    e => {
      const charCode = e.charCodeAt();
      return charCode === 122
        ? String.fromCharCode(97)
        : String.fromCharCode(charCode + 1);
    }
  ).join('');
}
