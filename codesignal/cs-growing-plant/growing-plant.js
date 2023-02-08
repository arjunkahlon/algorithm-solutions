/* eslint-disable no-unused-vars */

function growingPlants(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let counter = 0;
  while (height < desiredHeight) {
    height += upSpeed;
    counter++;
    if (height < desiredHeight) {
      height -= downSpeed;
    }
  }
  return counter;
}
