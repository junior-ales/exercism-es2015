const base = 2;
const isValid = s => RegExp('^(1|0)+$').test(s);

class Binary {
  constructor(val) {
    this.result = (isValid(val) ? Array.from(val) : [])
      .reverse()
      .reduce((acc, curr, idx) => acc + curr * Math.pow(base, idx), 0);
  }

  toDecimal() {
    return this.result;
  }
}

export default Binary;
