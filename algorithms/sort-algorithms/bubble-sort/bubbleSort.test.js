const bubbleSort = require('./bubbleSort.js');

describe('bubbleSort()', () => {
  describe('should sort a small array of integers successfully', () => {
    it('tests that a small array of integers has been sorted', () => {
      const arr = [1, 5, 3, 8, 123, 56, 344, 9, 78];
      expect(bubbleSort(arr)).toEqual([1, 3, 5, 8, 9, 56, 78, 123, 344]);
    });
  });

  describe('should sort a large array of integers successfully', () => {
    it('tests that a large array of integers was sorted successfully', () => {
      const arr = [
        3,
        1,
        2,
        5,
        4,
        7,
        6,
        9,
        8,
        10,
        23,
        5,
        7,
        123,
        5,
        234,
        567,
        568,
        12,
        3,
        567,
        4563,
        235,
        568,
        3456,
        3
      ];
      expect(bubbleSort(arr)).toEqual([
        1,
        2,
        3,
        3,
        3,
        4,
        5,
        5,
        5,
        6,
        7,
        7,
        8,
        9,
        10,
        12,
        23,
        123,
        234,
        235,
        567,
        567,
        568,
        568,
        3456,
        4563
      ]);
    });
  });
});
