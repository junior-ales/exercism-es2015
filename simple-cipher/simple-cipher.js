const defaultKey = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const isValidKey = key => RegExp('^[a-z]+$').test(key);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const head = x => x[0];

class Cipher {
  constructor(key = defaultKey) {
    if (!isValidKey(key)) {
      throw new Error('Bad key');
    }

    this.key = key;
    this.keyShiftValues = Array.from(this.key).map(l => alphabet.indexOf(l));
  }

  cipherOperation(val, operator) {
    return Array.from(val)
      .map((letter, index) => {
        const offset = operator(
          alphabet.indexOf(letter),
          this.keyShiftValues[index]
        );
        return offset % alphabet.length;
      })
      .map(cipheredLetterIndex => head(alphabet.slice(cipheredLetterIndex)))
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
