/* eslint-disable no-unused-vars */

function electionWinners(votes, k) {

  const max = Math.max(...votes);
  let counter = 0;

  if (k === 0 && votes.filter(e => e === max).length === 1) {
    return 1;
  }

  for (let i = 0; i < votes.length; i++) {
    if (votes[i] + k > max) {
      counter++;
    }
  }
  return counter;
}
