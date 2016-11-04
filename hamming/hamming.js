import { compose } from 'ramda';

// validateLength :: [String] -> [String]
const validateLength = ([x, y]) => {
  if (x.length === y.length) return [x, y];
  throw Error('DNA strands must be of equal length.');
};

// toArray :: String -> [Char]
const toArray = x => Array.from(x);

// toArrays :: [String] -> [[Char]]
const toArrays = ([x, y]) => [toArray(x), toArray(y)];

// toTuples :: [[Char]] -> [[Char]]
const toTuples = ([xs, ys]) => xs.map((x, idx) => [x, ys[idx]]);

// isTupleEqual :: [[Char]] -> [Boolean]
const isTupleEqual = xs => xs.map(([x, y]) => x === y);

// sumFalsy :: [Boolean] -> Number
const sumFalsy = xs => xs.reduce((acc, x) => acc + (x ? 0 : 1), 0);

// sumDifferentTuples :: [[Char]] -> Number
const sumDifferentTuples = compose(sumFalsy, isTupleEqual);

// validTuples :: [String] -> [[Char]]
const validTuples = compose(toTuples, toArrays, validateLength);

// strandsDiff :: [String] -> Number
const strandsDiff = compose(sumDifferentTuples, validTuples);

export default class {
  // compute :: String -> String -> Number
  compute(...strands) {
    return strandsDiff(strands);
  }
}
