/* eslint-disable no-unused-vars */

function narcissistic(value) {
  const valueStr = value.toString();

  return value === value.toString().split('').reduce(
    (a, b) => a + Math.pow(Number(b), valueStr.length), 0
  );
}
