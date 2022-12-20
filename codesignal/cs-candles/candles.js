/* eslint-disable no-unused-vars */

function candles(candlesNumber, makeNew) {
  let leftoverCandle = 0;
  let totalSolution = 0;

  while (candlesNumber > 0) {
    leftoverCandle += candlesNumber;
    totalSolution += candlesNumber;
    candlesNumber = Math.floor(leftoverCandle / makeNew);
    leftoverCandle -= candlesNumber * makeNew;
  }

  return totalSolution;
}
