/* eslint-disable no-unused-vars */

function highAndLow(numbers) {
  // ...
  const arr = numbers.split(' ').map(e => parseInt(e));
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
