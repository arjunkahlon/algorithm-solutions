/* eslint-disable no-unused-vars */

function cakes(recipe, available) {
  return Object.keys(recipe).reduce((value, e) => {
    return Math.min(
      Math.floor(available[e] / recipe[e] || 0),
      value
    );
  }, Infinity);
}
