const sortArray = require('../src/leetcode/0912-sort-an-array');

describe('Quick Sort', () => {
  test('should handle empty array', () => {
    expect(sortArray([])).toEqual([]);
  });

  test('should handle single element array', () => {
    expect(sortArray([5])).toEqual([5]);
  });

  test('should sort array with two elements', () => {
    expect(sortArray([3, 1])).toEqual([1, 3]);
    expect(sortArray([1, 3])).toEqual([1, 3]);
  });

  test('should sort array with positive numbers', () => {
    expect(sortArray([3, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(sortArray([9, 2, 7, 1, 8, 3])).toEqual([1, 2, 3, 7, 8, 9]);
  });

  test('should sort array with negative numbers', () => {
    expect(sortArray([-3, -1, -5, -2])).toEqual([-5, -3, -2, -1]);
  });

  test('should sort array with mixed positive and negative numbers', () => {
    expect(sortArray([3, -1, 4, -2, 0, 5])).toEqual([-2, -1, 0, 3, 4, 5]);
  });

  test('should handle array with duplicates', () => {
    expect(sortArray([3, 1, 3, 2, 1, 2])).toEqual([1, 1, 2, 2, 3, 3]);
    expect(sortArray([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });

  test('should handle array with zeros', () => {
    expect(sortArray([0, -1, 0, 1, 0])).toEqual([-1, 0, 0, 0, 1]);
  });

  test('should sort already sorted array', () => {
    expect(sortArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort reverse sorted array', () => {
    expect(sortArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle large array', () => {
    const input = [64, 34, 25, 12, 22, 11, 90, 88, 76, 50, 42];
    const expected = [11, 12, 22, 25, 34, 42, 50, 64, 76, 88, 90];
    expect(sortArray(input)).toEqual(expected);
  });

  test('should not modify original array (creates new sorted array)', () => {
    const original = [3, 1, 4, 1, 5];
    const sorted = sortArray([...original]); // pass a copy to test
    expect(sorted).toEqual([1, 1, 3, 4, 5]);
    expect(original).toEqual([3, 1, 4, 1, 5]); // original unchanged
  });

  test('should handle decimal numbers', () => {
    expect(sortArray([3.14, 2.71, 1.41, 1.73])).toEqual([1.41, 1.73, 2.71, 3.14]);
  });
});