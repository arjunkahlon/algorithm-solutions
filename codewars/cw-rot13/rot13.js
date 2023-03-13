/* eslint-disable no-unused-vars */

function rot13(str) {
  return str.split('').map(e => {
    if (!isNaN(e)) {
      return e;
    }

    if (e.match(/^[.,:!?]/)) {
      return e;
    }

    return (e.toLowerCase() <= 'm')
      ? String.fromCharCode(e.charCodeAt(0) + 13)
      : String.fromCharCode(e.charCodeAt(0) - 13);
  }).join('');
}
