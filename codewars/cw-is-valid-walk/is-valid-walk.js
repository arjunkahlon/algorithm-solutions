/* eslint-disable no-unused-vars */

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const location = {
    x: 0,
    y: 0
  };

  for (let i = 0; i < walk.length; i++) {
    locationHelper(walk[i], location);
  }

  return (location.x === 0 && location.y === 0);
}

function locationHelper(direction, location) {
  switch (direction) {
    case 'n':
      location.y += 1;
      break;
    case 's':
      location.y -= 1;
      break;
    case 'w':
      location.x -= 1;
      break;
    case 'e':
      location.x += 1;
      break;
  }
}
