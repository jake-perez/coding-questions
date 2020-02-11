import { rgbSort } from '..';

describe('Linear RGB sort', () => {
  it('should sort the array in linear time', () => {
    const arr = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
    const arr2 = ['G', 'B', 'G', 'G', 'G', 'G', 'G'];
    const arr3 = ['G', 'B', 'R', 'B', 'R', 'B', 'G'];

    rgbSort(arr);
    rgbSort(arr2);
    rgbSort(arr3);

    expect(arr).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);
    expect(arr2).toEqual(['G', 'G', 'G', 'G', 'G', 'G', 'B']);
    expect(arr3).toEqual(['R', 'R', 'G', 'G', 'B', 'B', 'B']);
  });
});
