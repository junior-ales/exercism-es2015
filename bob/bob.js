import { compose, both, filter, equals, head, keys } from 'ramda';

// isUpperCase :: String -> Boolean
const isUpperCase = c => c === c.toUpperCase();

// endsWithQuestion :: String -> Boolean
const endsWithQuestion = s => s.endsWith('?');

// hasLetters :: String -> Boolean
const hasLetters = s => /[a-zA-Z]/.test(s);

// allUpperCase :: String -> Boolean
const allUpperCase = s => [...s].every(isUpperCase);

// allLettersUppercase :: String -> Boolean
const allLettersUppercase = both(hasLetters, allUpperCase);

// isEmpty :: String -> Boolean
const isEmpty = s => s.trim().length === 0;

const answers = {
  fine: 'Fine. Be that way!',
  chillOut: 'Whoa, chill out!',
  sure: 'Sure.',
  whatever: 'Whatever.'
};

const mapMsgAnswer = {
  isSilence: answers.fine,
  isShouting: answers.chillOut,
  isQuestion: answers.sure,
  isWhatever: answers.whatever
};

// hear :: String -> { String: Boolean }
const hear = m => {
  const isSilence = isEmpty(m);
  const isShouting = !isSilence && allLettersUppercase(m);
  const isQuestion = !isShouting && endsWithQuestion(m);
  const isWhatever = !isQuestion;

  return { isSilence, isShouting, isQuestion, isWhatever };
};

// interpret :: { String: Boolean } -> String
const interpret = compose(head, keys, filter(equals(true)));

// answer :: String -> String
const answer = msg => mapMsgAnswer[msg];

class Bob {
  // hey :: String -> String
  hey(message) {
    return compose(answer, interpret, hear)(message);
  }
}

export default Bob;
