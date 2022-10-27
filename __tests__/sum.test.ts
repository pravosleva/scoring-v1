import sum from '../src';

describe('sum', () => {
  it.each([
    [2, 3, 5],
    [6, 4, 10],
    [3, 3, 6],
    [0, 0, 0],
    [522, 11, 533],
  ])('should add two numbers: %d, %d', (a, b, expected) => {
    const result = sum(a, b);

    expect(result).toBe(expected);
  });
});
