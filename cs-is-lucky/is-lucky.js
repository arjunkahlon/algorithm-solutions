/* eslint-disable no-unused-vars */

function isLucky(n) {
  const inputString = n.toString();
  const firstHalf = inputString.slice(0, inputString.length / 2);
  const secondHalf = inputString.slice(inputString.length / 2, inputString.length);

  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    firstSum += parseInt(firstHalf[i]);
  }

  for (let i = 0; i < secondHalf.length; i++) {
    secondSum += parseInt(secondHalf[i]);
  }

  if (firstSum === secondSum) {
    return true;
  }

  return false;
}

isLucky(2556);
