const BSTWithDFSPreOrder = require('./depthFirstSearchPreOrder.js');

describe('Breadth First Search', () => {
  let bst;

  beforeEach(() => {
    bst = new BSTWithDFSPreOrder(10);

    [5, 18, 123, 8, 3, 10, 9, 4].forEach((num) => {
      bst.insert(num);
    });
  });

  it('finds a node and returns it if it exists', () => {
    const result = bst.depthFirstSearchPreOrder(123);
    expect(result.value).toBe(123);
  });

  it('returns undefined if the value does not exist', () => {
    const result = bst.depthFirstSearchPreOrder(1000000);
    expect(result).toBeUndefined();
  });
});
