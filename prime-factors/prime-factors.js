const findFactors = (acc, num, factor) => {
  if (num === 1) return acc;

  return num % factor === 0
    ? findFactors(acc.concat(factor), num / factor, factor)
    : findFactors(acc, num, factor + 1);
};

class PrimeFactors {
  for(n) {
    return findFactors([], n, 2);
  }
}

export default PrimeFactors;
