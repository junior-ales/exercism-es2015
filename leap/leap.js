const divisibleBy = x => y => y % x === 0;

const divisibleBy4 = divisibleBy(4);
const divisibleBy100 = divisibleBy(100);
const divisibleBy400 = divisibleBy(400);

export default function isLeapYear(year) {
  return divisibleBy4(year) && (divisibleBy400(year) || !divisibleBy100(year));
}
