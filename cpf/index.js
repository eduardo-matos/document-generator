const { randInt } = require('../utils');

module.exports = (req, res) => res.end(generateCpf());

function generateCpf() {
  const max = 9;

  const n1 = randInt(max);
  const n2 = randInt(max);
  const n3 = randInt(max);
  const n4 = randInt(max);
  const n5 = randInt(max);
  const n6 = randInt(max);
  const n7 = randInt(max);
  const n8 = randInt(max);
  const n9 = randInt(max);

  let verifierDigit1 = (n9 * 2) + (n8 * 3) + (n7 * 4) + (n6 * 5) + (n5 * 6) + (n4 * 7) + (n3 * 8) + (n2 * 9) + (n1 * 10);
  verifierDigit1 = 11 - (verifierDigit1 % 11);

  if (verifierDigit1 >= 10) verifierDigit1 = 0;

  let verifierDigit2 = (verifierDigit1 * 2) + (n9 * 3) + (n8 * 4) + (n7 * 5) + (n6 * 6) + (n5 * 7) + (n4 * 8) + (n3 * 9) + (n2 * 10) + (n1 * 11);
  verifierDigit2 = 11 - (verifierDigit2 % 11);

  if (verifierDigit2 >= 10) verifierDigit2 = 0;
  
  return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${verifierDigit1}${verifierDigit2}`
}
