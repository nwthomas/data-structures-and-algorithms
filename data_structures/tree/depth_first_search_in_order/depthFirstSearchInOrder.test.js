const BSTWithDFSInOrder = require('./depthFirstSearchInOrder.js');

describe.only('Depth-First In-Order Search', () => {
  let bst;
  let originalConsoleLog;
  let testConsoleLog;

  beforeEach(() => {
    bst = new BSTWithDFSInOrder(10);
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
    bst.depthFirstSearchInOrder();
    expect(testConsoleLog).toHaveBeenCalledWith([
      3, 4, 5, 8, 9, 10, 10, 18, 123,
    ]);
  });
});
