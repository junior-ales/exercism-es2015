import { reduce, compose } from 'ramda';

// isEmpty :: Array -> Boolean
const isEmpty = xs => xs.length === 0;

// removeChar :: [Char] -> Char -> [Char]
const removeChar = (cs, c) => cs.filter(_c => _c !== c);

// toArray :: T -> [T]
const toArray = Array.from;

// alphabet :: [Char]
const alphabet = toArray('abcdefghijklmnopqrstuvxywz');

// reduceAlphabet :: [Char] -> [Char]
const reduceAlphabet = reduce(removeChar, alphabet);

// toLowerCase :: String -> String
const toLowerCase = s => s.toLowerCase();

// isPangram :: String -> Boolean
const isPangram = compose(isEmpty, reduceAlphabet, toArray, toLowerCase);

export default (sentence) => ({
  // isPangram :: Void -> Boolean
  isPangram: () => isPangram(sentence || '')
});
