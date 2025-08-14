const arraySum = require('../src/recursive-array-sum');

describe('Array Sum - Recursive Function', () => {
  test('should return 0 for empty array', () => {
    expect(arraySum([])).toBe(0);
  });

  test('should return the single element for array with one element', () => {
    expect(arraySum([5])).toBe(5);
    expect(arraySum([-3])).toBe(-3);
    expect(arraySum([0])).toBe(0);
  });

  test('should sum positive numbers correctly', () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
    expect(arraySum([10, 20, 30])).toBe(60);
  });

  test('should sum negative numbers correctly', () => {
    expect(arraySum([-1, -2, -3])).toBe(-6);
    expect(arraySum([-10, -5])).toBe(-15);
  });

  test('should sum mixed positive and negative numbers', () => {
    expect(arraySum([1, -2, 3, -4, 5])).toBe(3);
    expect(arraySum([-1, 2, -3, 4])).toBe(2);
    expect(arraySum([10, -10, 5, -5])).toBe(0);
  });

  test('should handle arrays with zeros', () => {
    expect(arraySum([0, 0, 0])).toBe(0);
    expect(arraySum([1, 0, 2, 0, 3])).toBe(6);
  });

  test('should handle large arrays', () => {
    const largeArray = Array.from({length: 100}, (_, i) => i + 1); // [1, 2, 3, ..., 100]
    expect(arraySum(largeArray)).toBe(5050); // Sum of 1 to 100
  });

  test('should handle decimal numbers', () => {
    expect(arraySum([1.5, 2.5, 3.0])).toBe(7);
    expect(arraySum([0.1, 0.2, 0.3])).toBeCloseTo(0.6, 5);
  });
});