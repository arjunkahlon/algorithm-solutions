/* eslint-disable no-unused-vars */

function findHack(arr) {
  const hackers = [];

  for (let i = 0; i < arr.length; i++) {
    if (!determineScoreValid(arr[i][1], arr[i][2])) {
      hackers.push(arr[i][0]);
    }
  }
  return hackers;
}

function determineScoreValid(total, arr) {
  if (total > 200) {
    return false;
  }

  let score = arr.reduce((sum, grade) => {
    return sum + determinePoints(grade);
  }, 0);

  if (arr.length >= 5) {
    if (arr.every(elem => ['A', 'B'].indexOf(elem) > -1)) {
      score += 20;
    }
  }

  score = (score > 200) ? 200 : score;

  return total === score;
}

function determinePoints(grade) {
  switch (grade) {
    case 'A':
      return 30;
    case 'B':
      return 20;
    case 'C':
      return 10;
    case 'D':
      return 5;
    default:
      return 0;
  }
}
