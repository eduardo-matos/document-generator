const { randInt } = require('../utils');

module.exports = (req, res) => res.end(generateCnpj());

function generateCnpj() {
  const max = 9;

  const n1 = randInt(max);
  const n2 = randInt(max);
  const n3 = randInt(max);
  const n4 = randInt(max);
  const n5 = randInt(max);
  const n6 = randInt(max);
  const n7 = randInt(max);
  const n8 = randInt(max);
  const n9 = 0;
  const n10 = 0;
  const n11 = 0;
  const n12 = 1;

  let verifierDigit1 = (n12 * 2) + (n11 * 3) + (n10 * 4) + (n9 * 5) + (n8 * 6) + (n7 * 7) + (n6 * 8) + (n5 * 9) + (n4 * 2) + (n3 * 3) + (n2 * 4) + (n1 * 5);
  verifierDigit1 = 11 - (verifierDigit1  % 11);

  if (verifierDigit1 >= 10) verifierDigit1 = 0;

  let verifierDigit2 = verifierDigit1*2 + (n12 * 3) + (n11 * 4) + (n10 * 5) + (n9 * 6) + (n8 * 7) + (n7 * 8) + (n6 * 9) + (n5 * 2) + (n4 * 3) + (n3 * 4) + (n2 * 5) + (n1 * 6);
  verifierDigit2 = 11 - (verifierDigit2 % 11);

  if (verifierDigit2 >= 10) verifierDigit2 = 0;

  return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${verifierDigit1}${verifierDigit2}`;
}