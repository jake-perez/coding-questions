import isPowerOfFour from '..';

describe('32-unsigned bit problem', () => {
  it('should detect if power of 4 in constant time', () => {
    const bigPower: number = Math.pow(2, 30) + 1;
    const smallPower: number = Math.pow(4, 8);

    expect(isPowerOfFour(bigPower)).toEqual(false);
    expect(isPowerOfFour(smallPower)).toEqual(true);
  });
});
