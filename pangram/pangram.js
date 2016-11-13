import { reduce, compose } from 'ramda';

// isEmpty :: Array -> Boolean
const isEmpty = xs => xs.length === 0;

// removeChar :: [Char] -> Char -> [Char]
const removeChar = (cs, c) => cs.filter(_c => _c !== c);

// alphabet :: [Char]
const alphabet = toArray('abcdefghijklmnopqrstuvxywz');

// reduceAlphabet :: [Char] -> [Char]
const reduceAlphabet = reduce(removeChar, alphabet);

// toArray :: T -> [T]
const toArray = Array.from;

// toLowerCase :: String -> String
const toLowerCase = s => s.toLowerCase();

// isPangram :: String -> Boolean
const isPangram = compose(isEmpty, reduceAlphabet, toArray, toLowerCase);

class Pangram {
  constructor(sentence) {
    // isPangram :: Void -> Boolean
    this.isPangram = () => isPangram(sentence || '');
  }
}

export default Pangram;
