const BSTWithDFSPostOrder = require('./depthFirstSearchPostOrder.js');

describe('Depth-First Post-Order Search', () => {
  let bst;
  let originalConsoleLog;
  let testConsoleLog;

  beforeEach(() => {
    bst = new BSTWithDFSPostOrder(10);
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
    bst.depthFirstSearchPostOrder();
    expect(testConsoleLog).toHaveBeenCalledWith([
      4, 3, 9, 8, 5, 10, 123, 18, 10,
    ]);
  });
});
