const BSTWithBFS = require('./breadthFirstSearch.js');

describe('Breadth First Search', () => {
  let bst;
  let originalConsoleLog;
  let testConsoleLog;

  beforeEach(() => {
    bst = new BSTWithBFS(10);
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

  it('finds a node and returns it if it exists', () => {
    bst.breadthFirstSearch();
    expect(testConsoleLog).toHaveBeenCalledWith([
      10, 5, 18, 3, 8, 10, 123, 4, 9,
    ]);
  });
});
