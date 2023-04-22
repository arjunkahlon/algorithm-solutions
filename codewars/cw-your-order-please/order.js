/* eslint-disable no-unused-vars */

function order(words) {
  return words.split(' ').sort(
    (a, b) => extractNumber(a) - extractNumber(b)
  ).join(' ');
}

function extractNumber(word) {
  return parseInt(word.match(/\d+/));
}
