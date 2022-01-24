const BSTWithBFS = require('./breadthFirstSearch.js');

describe.only('Breadth First Search', () => {
  let bst;

  beforeEach(() => {
    bst = new BSTWithBFS(10);

    [5, 18, 123, 8, 3, 10, 9, 4].forEach((num) => {
      bst.insert(num);
    });
  });

  it('finds a node and returns it if it exists', () => {
    const result = bst.breadthFirstSearch(9);
    expect(result.value).toBe(9);
  });

  it('returns undefined if the value does not exist', () => {
    const result = bst.breadthFirstSearch(1000000);
    expect(result).toBeUndefined();
  });
});
