const radixSort = require('./radixSort.js');

describe('radixSort()', () => {
  describe('should sort a short array of integers', () => {
    it('tests if a short array of numbers has been sorted', () => {
      const shortArr = [2, 5, 4, 7, 1, 0];
      expect(radixSort(shortArr)).toEqual([0, 1, 2, 4, 5, 7]);
    });
  });

  describe('should sort a long array of integers', () => {
    it('tests if a long array of integers has been sorted', () => {
      const longArr = [
        5,
        2,
        7,
        3,
        9,
        1,
        5,
        7,
        3,
        2,
        456,
        123,
        34,
        89,
        5,
        2,
        1,
        89123
      ];
      expect(radixSort(longArr)).toEqual([
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        5,
        5,
        5,
        7,
        7,
        9,
        34,
        89,
        123,
        456,
        89123
      ]);
    });
  });

  describe('should sort an array of floating point numbers', () => {
    it('tests that an array of floating point numbers has been sorted', () => {
      const floatArr = [7.32445, 1.111111, 6.567, 3.789];
      expect(radixSort(floatArr)).toEqual([1.111111, 3.789, 6.567, 7.32445]);
    });
  });
});
