const countingSort = require('./countingSort.js');

describe('countingSort()', () => {
  describe('should successfully sort a short array of integers', () => {
    it('tests that a short array of integers has been sorted', () => {
      const arr = [4, 2, 8, 7, 67, 3];
      expect(countingSort(arr)).toEqual([2, 3, 4, 7, 8, 67]);
    });
  });

  describe('should successfully sort a large array of integers', () => {
    it('tests that a large array of integers has been sorted', () => {
      const arr = [
        3,
        6,
        ,
        1,
        8,
        4,
        345,
        5,
        47,
        123,
        87,
        234,
        4,
        9,
        2344,
        456,
        1,
        543,
        6,
        84,
        123,
        98,
        3
      ];
      expect(countingSort(arr)).toEqual([
        1,
        1,
        3,
        3,
        4,
        4,
        5,
        6,
        6,
        8,
        9,
        47,
        84,
        87,
        98,
        123,
        123,
        234,
        345,
        456,
        543,
        2344
      ]);
    });
  });
});
