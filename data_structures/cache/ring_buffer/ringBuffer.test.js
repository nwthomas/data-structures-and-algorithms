const RingBuffer = require('./ringBuffer.js');

describe('RingBuffer()', () => {
  describe('should only create a ring buffer with a number passed as the capacity', () => {
    it('tests that a ring buffer is not created when passed non-number types', () => {
      const rbString = new RingBuffer('test');
      expect(rbString).toEqual({});

      const rbArray = new RingBuffer([]);
      expect(rbArray).toEqual({});

      const rbObject = new RingBuffer({});
      expect(rbObject).toEqual({});

      const rbBool = new RingBuffer(true);
      expect(rbBool).toEqual({});

      const rbNull = new RingBuffer(null);
      expect(rbNull).toEqual({});

      const rbUndefined = new RingBuffer(undefined);
      expect(rbNull).toEqual({});
    });
  });

  describe('should create a new ring buffer and add a few new items', () => {
    it('test that a ring buffer with a few items are created', () => {
      const rb = new RingBuffer(20);
      rb.append(1);
      rb.append(2);
      rb.append(3);
      expect(rb.getBuffer().length).toBe(3);
    });
  });

  describe('should overwrite older items in the ring buffer when it circles back over indices', () => {
    it('tests that the ring buffer circles back to overwrite old items', () => {
      const rb = new RingBuffer(3);
      rb.append(1);
      rb.append(2);
      rb.append(3);
      rb.append(4);
      expect(rb.findItem(1)).toBeFalsy();
      expect(rb.findItem(2)).toBeTruthy();
    });
  });
});
