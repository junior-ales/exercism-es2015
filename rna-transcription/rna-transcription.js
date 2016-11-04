// RNA :: { Char: Char }
const RNA = { C:'G', G:'C', A:'U', T:'A' };

// getRna :: Char -> RNA 
const getRna = function(dna) {
  if (RNA[dna]) return RNA[dna];
  throw Error('Invalid DNA strand: ' + dna);
};

// toArray :: String -> [Char]
const toArray = Array.from;

export default class {
  // toRna :: String -> String
  toRna(dna) {
    return toArray(dna).map(getRna).join('');
  }
}
