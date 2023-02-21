/* eslint-disable no-unused-vars */

function mostFrequentDigitSum(n) {
  const sequence = [];
  let num = n;

  while (num > 0) {
    const numStr = num.toString();
    const subtractor = numStr.split('').reduce((a, c) => parseInt(a) + parseInt(c), 0);
    sequence.push(subtractor);
    num -= subtractor;
  }

  return sequence.length === 1
    ? parseInt(sequence[0])
    : mostFrequentElement(sequence);
}

function mostFrequentElement(arr) {
  const map = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(map).reduce((a, b) => map[a] > map[b] ? parseInt(a) : parseInt(b));
}
