/* eslint-disable no-unused-vars */

function rgb(r, g, b) {
  // complete this function
  return convertHex(handleRange(r)) +
    convertHex(handleRange(g)) +
      convertHex(handleRange(b));

}

const handleRange = function (d) {
  if (d < 0) {
    return 0;
  }

  if (d > 255) {
    return 255;
  }

  return d;
};

const convertHex = function (d) {
  const hex = d.toString(16);
  return hex.length === 1
    ? '0' + hex.toUpperCase()
    : hex.toUpperCase();

};
