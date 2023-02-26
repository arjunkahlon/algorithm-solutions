/* eslint-disable no-unused-vars */

// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  let beerNum = Math.floor(bonus / price);
  let levels = 0;
  let cans = 1;

  while (beerNum > 0) {
    beerNum -= (cans * cans);
    if (beerNum >= 0) {
      levels++;
      cans++;
    }
  }
  return levels;
};
