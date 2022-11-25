/* eslint-disable no-unused-vars */

function avoidObstacles(inputArray) {
  let obstaclesAvoided = false;
  let jumpLength = 1;

  while (!obstaclesAvoided) {
    jumpLength++;

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % jumpLength === 0) {
        obstaclesAvoided = false;
        break;
      } else {
        obstaclesAvoided = true;
      }
    }
  }

  return jumpLength;
}
