import { compose, reverse, range } from 'ramda';

const lyrics = {
  regular: num => `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.\n`,
  seclast: () => `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`,
  last: () => `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`,
  zero: () => `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
};

const verseToLyrics = {
  0: lyrics.zero(),
  1: lyrics.last(),
  2: lyrics.seclast()
};

const verse = idx => verseToLyrics[idx] || lyrics.regular(idx);

const idxRange = compose(reverse, range);

const sing = (thr1 = 99, thr2 = 0) => {
  return idxRange(thr2, thr1 + 1).map(verse).join('\n');
};

export default { verse, sing };
