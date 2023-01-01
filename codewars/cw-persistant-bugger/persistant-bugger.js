/* eslint-disable no-unused-vars */

function persistence(num) {
  const numStr = num.toString();

  if (numStr.length === 1) {
    return 0;
  }

  return 1 + persistence(
    numStr.split('').reduce(
      (a, b) => a * b, 1
    ));
}
