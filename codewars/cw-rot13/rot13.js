/* eslint-disable no-unused-vars */

function rot13(str) {
  return str.split('').map(e => {
    const charCode = e.charCodeAt(0);

    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      return e;
    }

    return (e.toLowerCase() <= 'm')
      ? String.fromCharCode(e.charCodeAt(0) + 13)
      : String.fromCharCode(e.charCodeAt(0) - 13);
  }).join('');
}
