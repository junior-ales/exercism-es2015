// RNA :: { Char: Char }
const RNA = { C:'G', G:'C', A:'U', T:'A' };

// getRna :: Char -> Char
const getRna = function(dna) {
  if (RNA[dna]) return RNA[dna];
  throw Error('Invalid DNA strand: ' + dna);
};

export default class {
  // toRna :: String -> String
  toRna(dna) {
    return [...dna].map(getRna).join('');
  }
}
