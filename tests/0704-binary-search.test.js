const search = require('../src/0704-binary-search');

test('finds target in sorted array', () => {
  expect(search([1,2,3,4,5], 3)).toBe(2);
  expect(search([1,2,3,4,5], 1)).toBe(0);
  expect(search([1,2,3,4,5], 5)).toBe(4);
  expect(search([1,2,3,4,5], 6)).toBe(-1);
});