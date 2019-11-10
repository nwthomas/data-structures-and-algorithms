const bfs = require('./breadthFirstSearch.js');
const BinarySearchTree = require('../../../data-structures/tree/binary-search-tree/binarySearchTree.js');

describe('breadthFirstSearch()', () => {
  let BST = null;
  beforeEach(() => {
    BST = new BinarySearchTree(5);
    BST.insert(10);
    BST.insert(1);
    BST.insert(9);
    BST.insert(3);
    BST.insert(6);
    BST.insert(2);
    BST.insert(4);
    BST.insert(8);
    BST.insert(7);
  });

  describe('finds an integer value stored in a BinarySearchTree', () => {
    it('tests if an integer value has been found', () => {
      const result = bfs(BST, 4);
      expect(result).toBeTruthy();
    });
  });

  describe('returns a false boolean if an integer is not in the Binary Search Tree', () => {
    it("tests that a false boolean is returned when the number isn't present", () => {
      const result = bfs(BST, 123);
      expect(result).toBeFalsy();
    });
  });
});
