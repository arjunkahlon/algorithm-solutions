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

function alternativeSolution(noun) {
  return noun[0].toUpperCase() + noun.slice(1, noun.length).toLowerCase();
}
