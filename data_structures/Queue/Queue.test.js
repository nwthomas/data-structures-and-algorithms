const { Node, Queue } = require('./Queue.js');

describe('Queue', () => {
  describe('Node', () => {
    describe('instantiates', () => {
      test('instantiates a new version of the Node class', () => {
        const node = new Node('test');
        expect(node instanceof Node).toBeTruthy();
        expect(node._value).toBe('test');
      });

      test('instantiates with this._value as defaulted to null if no value is provided', () => {
        const node = new Node();
        expect(node.getValue()).toBeNull();
      });

      test('instantiates with this._next and this._previous defaulted to null', () => {
        const node = new Node();
        expect(node._previous).toBeNull();
        expect(node._next).toBeNull();
      });
    });

    describe('getValue()', () => {
      test('returns the value of the current node', () => {
        const node = new Node('test');
        const result = node.getValue();
        expect(result).toBe('test');
      });
    });
  });

  describe('Queue', () => {
    // finish
  });
});
