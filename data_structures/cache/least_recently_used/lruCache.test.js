const { Node, LRUCache: LRU } = require('./lruCache.js');

describe('Least Recently Used Cache', () => {
  describe('Node', () => {
    describe('instantiates', () => {
      test('instantiates a new version of Node', () => {
        const node = new Node();
        expect(node instanceof Node).toBeTruthy();
      });

      test('instantiates with null as default value', () => {
        const node = new Node();
        const result = node._value;
        expect(result).toBeNull();
      });
    });

    describe('getValue()', () => {
      test('returns null if no value has been assigned yet', () => {
        const node = new Node();
        const result = node.getValue();
        expect(result).toBeNull();
      });

      test('returns the value of the node that has been assigned', () => {
        const node = new Node('test');
        const result = node.getValue();
        expect(result).toBe('test');
      });
    });

    describe('delete()', () => {
      test('returns the value of the deleted node', () => {
        const node = new Node('test');
        const result = node.delete();
        expect(result).toBe('test');
      });

      test('removes the reference to previous and next nodes when deleted', () => {
        const node = new Node('test');
        node._next = new Node('next');
        node._previous = new Node('test');
        node.delete();
        expect(node._next).toBeNull();
        expect(node._previous).toBeNull();
      });

      test("sets the previous and next node's references to each other", () => {
        const node = new Node('middle');
        const next = new Node('next');
        const previous = new Node('previous');
        node._next = next;
        node._previous = previous;
        node.delete();
        expect(next._previous).toEqual(previous);
        expect(previous._next).toEqual(next);
      });
    });
  });

  describe('LRU', () => {
    describe('instantiates', () => {
      test('instantiates a new version of Node', () => {
        const cache = new LRU(10);
        expect(cache instanceof LRU).toBeTruthy();
      });

      test('records the correct max size of the cache', () => {
        const cache = new LRU(100);
        const result = cache._maxSize;
        expect(result).toBe(100);
      });

      test('instantiates with null as default initial values for front and back', () => {
        const cache = new LRU(10);
        const front = cache._front;
        const back = cache._back;
        expect(front).toBeNull();
        expect(back).toBeNull();
      });

      test('instantiates with an initial value if given as seconds argument', () => {
        const cache = new LRU(10, 'test');
        const frontValue = cache._front._value;
        const backValue = cache._back._value;
        expect(frontValue).toBe('test');
        expect(backValue).toBe('test');
      });
    });

    describe('length()', () => {
      test('returns 0 if no values have been added yet', () => {
        const cache = new LRU(100);
        const result = cache.length();
        expect(result).toBe(0);
      });

      test('returns the correct length of the cache', () => {
        const cache = new LRU(100);
        cache.addValue(1);
        cache.addValue(2);
        const result = cache.length();
        expect(result).toBe(2);
      });
    });

    describe('maxSize()', () => {
      test('returns the max size from when the cache was instantiated', () => {
        const cache = new LRU(9876);
        const result = cache.maxSize();
        expect(result).toBe(9876);
      });
    });

    describe('addValue()', () => {
      test('adds a new value to the front of the cache', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        const frontValue = cache._front.getValue();
        const tailValue = cache._back.getValue();
        expect(frontValue).toBe(2);
        expect(tailValue).toBe(1);
      });

      test('removes a value at the back of the cache if the max size has been reached', () => {
        const cache = new LRU(5);
        cache.addValue(1);
        cache.addValue(2);
        cache.addValue(3);
        cache.addValue(4);
        cache.addValue(5);
        cache.addValue(6);
        const tailValue = cache._back.getValue();
        expect(tailValue).toBe(2);
      });
    });

    describe('accessValue()', () => {
      test("moves a value to the front of the cache if it's accessed", () => {
        const cache = new LRU(10, 'first');
        cache.addValue('second');
        cache.addValue('third');
        cache.accessValue('first');
        const frontValue = cache._front.getValue();
        const backValue = cache._back.getValue();
        expect(frontValue).toBe('first');
        expect(backValue).toBe('second');
      });

      test('returns true if the value is in the cache', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        const result = cache.accessValue(1);
        expect(result).toBeTruthy();
      });

      test('returns false if the value is not in the cache', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        const result = cache.accessValue('this value is not present');
        expect(result).toBeFalsy();
      });
    });

    describe('deleteValue()', () => {
      test('sets front and back references to null', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.deleteValue(1);
        const front = cache._front;
        const back = cache._back;
        expect(front).toBeNull();
        expect(back).toBeNull();
      });

      test('returns true if the value has been deleted from the cache', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        cache.addValue(3);
        cache.addValue(4);
        cache.addValue(5);
        const result = cache.deleteValue(4);
        expect(result).toBeTruthy();
      });

      test('returns false if the value is not found in the cache', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        cache.addValue(3);
        const result = cache.addValue('test');
        expect(result).toBeFalsy();
      });

      test('updates the correct length of the cache', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        cache.addValue(3);
        cache.deleteValue(3);
        const result = cache.length();
        expect(result).toBe(2);
      });

      test('sets the new back correctly when deleting back value', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        cache.addValue(3);
        cache.deleteValue(1);
        const result = cache._back.getValue();
        expect(result).toBe(2);
      });

      test('sets the new front correctly when deleting front value', () => {
        const cache = new LRU(10);
        cache.addValue(1);
        cache.addValue(2);
        cache.addValue(3);
        cache.deleteValue(3);
        const result = cache._front.getValue();
        expect(result).toBe(2);
      });
    });
  });
});
