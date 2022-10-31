/* eslint-disable no-unused-vars */

function addBorder(picture) {
  const topBottom = '*'.repeat(picture[0].length);
  picture.unshift(topBottom);
  picture.push(topBottom);

  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*';
  }

  return picture;
}
