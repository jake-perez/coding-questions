/**
 * This problem was asked by Alibaba.
 *
 * Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.
 * A solution will always exist. See Goldbach’s conjecture.
 *
 * Example:
 * Input: 4
 * Output: 2 + 2 = 4
 *
 * If there are more than one solution possible, return the lexicographically smaller solution.
 * If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then [a, b] < [c, d]
 * If a < c OR a==c AND b < d.
 */

const goldbach = (num: number): string => {
  const primes: Set<number> = generatePrimes(num);
  const sortedPairs: number[][] = generatePairs(num, primes).sort(lexicalSort);
  const [a, b] = sortedPairs[0];

  return `${a} + ${b} = ${num}`;
};

const generatePairs = (num: number, primes: Set<number>): number[][] => {
  let pairs: number[][] = [];
  primes.forEach((v: number, _: number, s: Set<number>) => {
    const compliment = num - v;
    if (compliment >= v && s.has(compliment)) {
      pairs.push([v, compliment]);
    }
  });
  return pairs;
};

const generatePrimes = (num: number): Set<number> => {
  let primes: Set<number> = new Set();
  let i = 2;
  while (i < num) {
    if (isPrime(i)) {
      primes.add(i);
    }
    i++;
  }

  return primes;
};

const isPrime = (num: number): boolean => {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const lexicalSort = (a: number[], b: number[]): number => {
  if (a[0] <= b[0]) {
    return -1;
  } else {
    return 1;
  }
};

export default goldbach;
