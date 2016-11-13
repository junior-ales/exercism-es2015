import { compose, curry, reduce, map, head, init, last } from 'ramda';

// flatMapObj :: (Array -> Object) -> [[String]] -> Object
const flatMapObj = curry((fn, xs) => Object.assign({}, ...(map(fn, xs))));

// toOccurr :: [ T ] -> { T: Number }
const toOccurr = xs => ({ [head(xs)]: xs.length });

// concatLast :: [Array] -> Array -> [Array]
const concatLast = (xss, xs) => init(xss).concat([last(xss).concat(xs)]);

// shouldConcatArrays :: Array -> Array -> Boolean
const shouldConcatArrays = (xs, ys) => xs.length === 0 || head(xs) === head(ys);

// groupWords :: [String] -> [[String]]
const groupWords = reduce((acc, x) => {
  return shouldConcatArrays(last(acc), [x]) ? concatLast(acc, [x]) : acc.concat([[x]]);
}, [[]]);

// sort :: [String] -> [String]
const sort = xs => xs.slice(0).sort();

// groupByWords :: [String] -> [[String]]
const groupByWords = compose(groupWords, sort);

// splitBySeparator :: String -> [String]
const splitBySeparator = s => s.split(/\s+/);

// toLowerCase :: String -> String
const toLowerCase = s => s.toLowerCase();

// trim :: String -> String
const trim = s => s.trim();

// toWordsArray :: String -> [String]
const toWordsArray = compose(splitBySeparator, toLowerCase, trim);

class Words {
  // count :: String -> { String: Number }
  count(string) {
    return compose(flatMapObj(toOccurr), groupByWords, toWordsArray)(string);
  }
}

export default Words;
