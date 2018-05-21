const isValid = s => RegExp('^(1|0)+$').test(s);
const base = 2;

export default function Binary(val) {
  const values = isValid(val) ? Array.from(val) : [];

  return {
    toDecimal: () =>
      values
        .reverse()
        .reduce((acc, curr, idx) => acc + curr * Math.pow(base, idx), 0)
  };
}
