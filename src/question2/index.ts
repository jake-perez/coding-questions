/**
 *
 * This problem was asked by Indeed.
 *
 * Given a 32-bit positive integer N,
 * determine whether it is a power of four in faster than O(log N) time.
 *
 * Example: '1011101100101010010101101010111'
 */

const isPowerOfFour = (value: number): boolean => {
  if (value < 4) {
    return value === 1;
  }
  if (value % 4 === 0) {
    return isPowerOfFour(value / 4);
  }
  return false;
};

export default isPowerOfFour;
