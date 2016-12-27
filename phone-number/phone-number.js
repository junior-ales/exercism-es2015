import Maybe from 'data.maybe';
import Either from 'data.either';
import * as R from 'ramda';
const { Just, Nothing } = Maybe;
const { Left, Right } = Either;

// mask :: String -> String
const mask = n => {
  return `(${R.slice(0, 3, n)}) ${R.slice(3, 6, n)}-${R.slice(6, Infinity, n)}`;
};

// toPhoneNumber :: String -> PhoneNumber
const toPhoneNumber = n => ({
  number: () => n,
  areaCode: () => R.take(3, n),
  toString: () => mask(n)
});

// beginsWithValidDigit :: String :: Maybe(String)
const beginsWithValidDigit = n => R.head(n) === '1' ? Just(n) : Nothing();

// validateElevenDigitsNumber :: String :: Maybe(String)
const validateElevenDigitsNumber = R.compose(R.map(R.tail), beginsWithValidDigit);

// hasElevenDigits :: String -> Either[String, String]
const hasElevenDigits = n => R.length(n) === 11 ? Right(n) : Left(n);

// validateInitialNumber :: String -> Maybe(String)
const validateInitialNumber = n => hasElevenDigits(n)
                                    .chain(validateElevenDigitsNumber)
                                    .orElse(Maybe.fromNullable);

// hasMaxLength :: String -> Maybe(String)
const hasMaxLength = n => R.length(n) < 12 ? Just(n) : Nothing();

// hasMinLength :: String -> Maybe(String)
const hasMinLength = n => R.length(n) > 9 ? Just(n) : Nothing();

// onlyNumbers :: String -> String
const onlyNumbers = R.replace(/[^0-9]/g, '');

// validateNumber :: String -> String
const validateNumber = n => {
  return Maybe.fromNullable(n)
              .map(onlyNumbers)
              .chain(hasMinLength)
              .chain(hasMaxLength)
              .chain(validateInitialNumber)
              .getOrElse('0000000000');
};

// PhoneNumber :: String -> PhoneNumber
export default R.compose(toPhoneNumber, validateNumber);
