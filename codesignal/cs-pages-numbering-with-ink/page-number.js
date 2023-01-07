/* eslint-disable no-unused-vars */

function pageNumber(current, numberOfDigits) {

  const firstPageLength = current.toString().length;
  numberOfDigits -= firstPageLength;

  if (!numberOfDigits > 0) {
    return current;
  }

  while (numberOfDigits > 0) {

    const nextLength = parseInt((current + 1).toString().length);
    if (numberOfDigits - nextLength >= 0) {
      current++;
      numberOfDigits -= nextLength;
    } else {
      break;
    }
  }
  return current;

}
