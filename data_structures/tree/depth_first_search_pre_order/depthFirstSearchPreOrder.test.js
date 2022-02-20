const BSTWithDFSPreOrder = require('./depthFirstSearchPreOrder.js');

describe('Depth-First Pre-Order Search', () => {
  let bst;
  let originalConsoleLog;
  let testConsoleLog;

  beforeEach(() => {
    bst = new BSTWithDFSPreOrder(10);
    originalConsoleLog = console.log;
    testConsoleLog = jest.fn();
    console.log = testConsoleLog;

    [5, 18, 123, 8, 3, 10, 9, 4].forEach((num) => {
      bst.insert(num);
    });
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  it('searches the tree in the correct order', () => {
    bst.depthFirstSearchPreOrder();
    expect(testConsoleLog).toHaveBeenCalledWith([
      10, 5, 3, 4, 8, 9, 18, 10, 123,
    ]);
  });
});
