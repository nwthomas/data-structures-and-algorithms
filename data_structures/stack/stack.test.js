const Stack = require('./stack.js');

describe('Stack', () => {
  describe('instantiates', () => {
    test('instantiates a new version of Stack', () => {
      const stack = new Stack('test');
      expect(stack instanceof Stack).toBeTruthy();
    });

    test('instantiates with empty as default', () => {
      const stack = new Stack();
      expect(stack._stack).toEqual([]);
    });

    test('adds value when instantiated if one is given', () => {
      const stack = new Stack('test');
      const result = stack._stack;
      expect(result).toEqual(['test']);
    });
  });

  describe('length()', () => {
    test('returns 0 if no values have been added to the Stack', () => {
      const stack = new Stack();
      const result = stack.length();
      expect(result).toBe(0);
    });

    test('returns the correct length of a used Stack', () => {
      const stack = new Stack(1);
      const result = stack.length();
      expect(result).toBe(1);
    });
  });

  describe('push()', () => {
    test('pushes a value to the top of the Stack', () => {
      const stack = new Stack(1);
      stack.push(2);
      stack.push(3);
      const result = stack._stack[stack.length() - 1];
      expect(result).toBe(3);
    });
  });

  describe('pop()', () => {
    test('pops the top value off the top of the Stack', () => {
      const stack = new Stack(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const poppedValue = stack.pop();
      const result = stack._stack[stack.length() - 1];
      expect(poppedValue).toBe(4);
      expect(result).toBe(3);
    });
  });

  describe('getValues()', () => {
    test('returns an empty array if no values have been added to the Stack', () => {
      const stack = new Stack();
      const result = stack.getValues();
      expect(result).toEqual([]);
    });

    test('returns an array of all values inside of the Stack', () => {
      const stack = new Stack(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const result = stack.getValues();
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
