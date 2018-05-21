const isValid = s => RegExp('^(1|0)+$').test(s);
const base = 2;
const add = (x, y) => x + y;

export default function Binary(val) {
  const values = isValid(val) ? Array.from(val) : [];

  return {
    toDecimal: () =>
      values
        .reverse()
        .map((s, index) => ({ index, value: Number(s) }))
        .map(({ index, value }) => value * Math.pow(base, index))
        .reduce(add, 0)
  };
}
