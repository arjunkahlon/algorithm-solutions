/* eslint-disable no-unused-vars */

function properNounCorrection(noun) {
  return noun.split('').map(
    (element, index) => {
      return index === 0
        ? element.toUpperCase()
        : element.toLowerCase();
    }
  ).join('');
}
