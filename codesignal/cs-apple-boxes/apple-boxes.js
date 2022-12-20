/* eslint-disable no-unused-vars */

function appleBoxes(k) {
  let redApples = 0;
  let yellowApples = 0;

  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) {
      redApples += (i * i);
    } else {
      yellowApples += (i * i);
    }
  }
  return (redApples - yellowApples);
}
