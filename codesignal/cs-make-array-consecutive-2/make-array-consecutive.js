/* eslint-disable no-unused-vars */

function makeArrayConsecutive(statues) {

  if (statues.length === 0 || statues.length === 1) {
    return 0;
  }
  statues.sort((a, b) => {
    return a - b;
  });
  let counter = 0;

  for (let i = 0; i < statues.length - 1; i++) {
    const difference = statues[i + 1] - statues[i];
    if (difference > 1) {
      counter += (difference - 1);
    }
  }
  return counter;
}
