/**
 * This problem was asked by Google.
 *
 * Given an array of strictly the characters 'R', 'G', and 'B',
 * segregate the values of the array so that all the Rs come first,
 * the Gs come second, and the Bs come last. You can only swap elements of the array.
 *
 * Do this in linear time and in-place.
 *
 * For example, given the array
 * ['G', 'B', 'R', 'R', 'B', 'R', 'G'] => ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
 */

const rgbSort = (array: String[]): String[] => {
  let r_index: number = 0;
  let b_index: number = array.length - 1;

  for (let i = 0; i < array.length && i <= b_index; i++) {
    if (array[i] === 'R') {
      swap(array, i, r_index++);
    }
    if (array[i] === 'B') {
      swap(array, i--, b_index--);
    }
  }

  return array;
};

const swap = (arr: any[], i: number, j: number): void => {
  const temp: any = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export { rgbSort };
