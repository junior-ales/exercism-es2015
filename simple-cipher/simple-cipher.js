const defaultKey = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const isValidKey = key => RegExp('^[a-z]+$').test(key);
const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;

class Cipher {
  constructor(key = defaultKey) {
    if (!isValidKey(key)) {
      throw new Error('Bad key');
    }

    this.key = key;
    this.keyShift = Array.from(this.key).map(l => alphabet.indexOf(l));
  }

  cipherOperation(val, operator) {
    return Array.from(val)
      .map((letter, index) =>
        operator(alphabet.indexOf(letter), this.keyShift[index])
      )
      .map(cipheredLetterIndex => alphabet[cipheredLetterIndex])
      .join('');
  }

  encode(val) {
    return this.cipherOperation(val, add);
  }

  decode(val) {
    return this.cipherOperation(val, sub);
  }
}

export default Cipher;
