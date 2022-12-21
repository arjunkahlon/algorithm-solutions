/* eslint-disable no-unused-vars */

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(element => {
    return element === elemToReplace
      ? substitutionElem
      : element;
  });
}
