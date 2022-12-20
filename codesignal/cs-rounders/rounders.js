/* eslint-disable no-unused-vars */

function rounders(n) {
  const nStr = n.toString().split('');
  let roundedStr = '';

  while (nStr.length > 1) {
    let digit = parseInt(nStr.pop());

    if (digit >= 5) {
      nStr[nStr.length - 1] = (parseInt(nStr[nStr.length - 1]) + 1).toString();
    }
    digit = 0;
    roundedStr = digit + roundedStr;
  }
  roundedStr = nStr[nStr.length - 1] + roundedStr;
  return parseInt(roundedStr);
}
