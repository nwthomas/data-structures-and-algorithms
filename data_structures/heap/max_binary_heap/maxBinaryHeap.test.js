const MaxBinaryHeap = require('./maxBinaryHeap.js');

describe('Max Binary Heap', () => {
  let mbh;

  beforeEach(() => {
    mbh = new MaxBinaryHeap();
  });

  describe('insert and bubbleUp', () => {
    it('inserts first value correctly', () => {
      const addedValueIndex = mbh.insert(55);
      expect(mbh.values).toEqual([55]);
      expect(addedValueIndex).toBe(0);
    });

    it('inserts values in correct order and bubbles up on the right side', () => {
      const values = [41, 39, 33, 18, 27, 12];

      values.forEach((value, index) => {
        const addedValueIndex = mbh.insert(value);
        expect(mbh.values).toEqual(values.slice(0, index + 1));
        expect(mbh.values[addedValueIndex]).toBe(value);
      });

      const bubbledUpValueIndex = mbh.insert(55);
      expect(mbh.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
      expect(mbh.values[bubbledUpValueIndex]).toBe(55);
    });

    it('inserts values in correct order and bubbles up on the left side', () => {
      const values = [55, 39, 41, 18, 27, 12, 33];

      values.forEach((value, index) => {
        const addedValueIndex = mbh.insert(value);
        expect(mbh.values).toEqual(values.slice(0, index + 1));
        expect(mbh.values[addedValueIndex]).toBe(value);
      });

      const bubbledUpValueIndex = mbh.insert(24);
      expect(mbh.values).toEqual([55, 39, 41, 24, 27, 12, 33, 18]);
      expect(mbh.values[bubbledUpValueIndex]).toBe(24);
    });
  });

  describe('remove and bubbleDown', () => {
    it('removes and returns the first value correctly', () => {
      mbh.insert(50);
      mbh.insert(40);
      mbh.insert(60);

      const removedValue = mbh.remove();
      expect(removedValue).toBe(60);
    });

    it('removes and bubbles down values in correct order on right side', () => {
      const values = [41, 33, 39, 18, 27, 12, 8];

      values.forEach((value, index) => {
        const addedValueIndex = mbh.insert(value);
        expect(mbh.values).toEqual(values.slice(0, index + 1));
        expect(mbh.values[addedValueIndex]).toBe(value);
      });

      const removedValue = mbh.remove();
      expect(removedValue).toBe(41);
      expect(mbh.values).toEqual([39, 33, 12, 18, 27, 8]);
    });

    it('removes and bubbles down values in correct order on left side', () => {
      const values = [41, 39, 33, 18, 27, 12];

      values.forEach((value, index) => {
        const addedValueIndex = mbh.insert(value);
        expect(mbh.values).toEqual(values.slice(0, index + 1));
        expect(mbh.values[addedValueIndex]).toBe(value);
      });

      const removedValue = mbh.remove();
      expect(removedValue).toBe(41);
      expect(mbh.values).toEqual([39, 27, 33, 18, 12]);
    });
  });
});
