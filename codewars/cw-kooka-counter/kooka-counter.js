/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */

const kookaCounter = laughing => {
  let bird = null;
  return laughing.split('a').filter(laugh => {
    if (laugh !== bird) {
      bird = laugh;
      return laugh;
    }
  }).length;
};
