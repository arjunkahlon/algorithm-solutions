/* eslint-disable no-unused-vars */

function depositProfit(deposit, rate, threshold) {
  let counter = 0;

  while (deposit < threshold) {
    deposit += deposit * (rate / 100);
    counter++;
  }
  return counter;
}
