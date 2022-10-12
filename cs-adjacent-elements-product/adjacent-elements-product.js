/* eslint-disable no-unused-vars */

function adjacentElementsProduct(inputArray) {
  let product = Number.NEGATIVE_INFINITY;
  let adjInd = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    if ((inputArray[i] * inputArray[i + 1]) > product) {
      product = inputArray[i] * inputArray[i + 1];
      adjInd = [i, i + 1];
    }
  }
  return product;
}
