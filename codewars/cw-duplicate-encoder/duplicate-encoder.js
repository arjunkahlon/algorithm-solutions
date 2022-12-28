/* eslint-disable no-unused-vars */

function duplicateEncoder(word) {
  const wordArr = word.toLowerCase().split('');

  return wordArr.map(
    (element, index, array) => {
      return array.indexOf(element) === array.lastIndexOf(element)
        ? '('
        : ')';
    }
  ).join('');
}
