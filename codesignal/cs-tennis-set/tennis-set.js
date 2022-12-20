/* eslint-disable no-unused-vars */

function tennisSet(score1, score2) {
  const maxScore = Math.max(score1, score2);
  const minScore = Math.min(score1, score2);

  if (maxScore === 6 && minScore < 5) {
    return true;
  } else if (maxScore === 7 && (minScore > 4 && minScore < 7)) {
    return true;
  }
  return false;
}
