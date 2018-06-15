const normalize = x =>
  Array.from(x.toLowerCase())
    .sort()
    .join('');

export default class Anagram {
  constructor(value = '') {
    this.value = value;
  }

  matches(firstArg, ...args) {
    const possibleMatches =
      typeof firstArg === 'string' ? [firstArg, ...args] : firstArg;

    return possibleMatches.filter(
      item =>
        item.toLowerCase() !== this.value.toLowerCase() &&
        normalize(item) === normalize(this.value)
    );
  }
}
