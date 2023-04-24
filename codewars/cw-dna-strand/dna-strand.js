/* eslint-disable no-unused-vars */

function DNAStrand(dna) {
  return dna.split('').map(e => {
    switch (e) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      default:
        return e;
    }
  }).join('');
}
