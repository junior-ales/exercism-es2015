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
  let _xs = [x.toLowerCase()];
  return shouldConcatArrays(last(acc), _xs) ? concatLast(acc, _xs) : acc.concat([_xs]);
}, [[]]);

// sort :: [String] -> [String]
const sort = xs => xs.slice(0).sort();

// groupByWords :: [String] -> [[String]]
const groupByWords = compose(groupWords, sort);

// splitBySpace :: String -> [String]
const splitBySpace = s => s.split(' ');

// trim :: String -> String
const trim = s => s.trim();

// replaceForSpace :: [RegExp] -> String -> String
const replaceForSpace = curry((seps, s) => seps.reduce((_s, sp) => _s.replace(sp, ' '), s));

// separators :: [RegExp]
const separators = [/( {2,})/g , /\n+/g, /\t+/g];

// toWordsArray :: String -> [String]
const toWordsArray = compose(splitBySpace, trim, replaceForSpace(separators));

class Words {
  // count :: String -> { String: Number }
  count(string) {
    return compose(flatMapObj(toOccurr), groupByWords, toWordsArray)(string);
  }
}

export default Words;
