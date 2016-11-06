import { both } from 'ramda';

// isUpperCase :: String -> Boolean
const isUpperCase = c => c === c.toUpperCase();

// isQuestion :: String -> Boolean
const isQuestion = s => s.endsWith('?');

// hasLetters :: String -> Boolean
const hasLetters = s => /[a-zA-Z]/.test(s);

// allUpperCase :: String -> Boolean
const allUpperCase = s => [...s].every(isUpperCase);

// allLettersUppercase :: String -> Boolean
const allLettersUppercase = both(hasLetters, allUpperCase);

// isEmpty :: String -> Boolean
const isEmpty = s => s.trim().length === 0;

class Bob {
  // hey :: String -> String
  hey(message) {
    if (isEmpty(message))
      return 'Fine. Be that way!';
    else if (allLettersUppercase(message))
      return 'Whoa, chill out!';
    else if (isQuestion(message))
      return 'Sure.';
    else
      return 'Whatever.';
  }
}

export default Bob;
