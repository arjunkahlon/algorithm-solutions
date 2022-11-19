/* eslint-disable no-unused-vars */

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return yourLeft + yourRight !== friendsLeft + friendsRight
    ? false
    : Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight);

}
