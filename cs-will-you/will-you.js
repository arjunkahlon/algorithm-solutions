/* eslint-disable no-unused-vars */

function willYou(young, beautiful, loved) {
  if (beautiful && young && !loved) {
    return true;
  }

  if (loved && (!young || !beautiful)) {
    return true;
  }

  return false;
}
