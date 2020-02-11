import goldbach from '..';

describe('Goldbach Problem', () => {
  it('should generate two primes for even numbers', () => {
    expect(goldbach(10)).toEqual('5 + 5 = 10');
    expect(goldbach(12)).toEqual('5 + 7 = 12');
    expect(goldbach(2000)).toEqual('457 + 1543 = 2000');
    expect(goldbach(123456)).toEqual('25439 + 98017 = 123456');
  });
});
