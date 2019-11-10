const dfs = require('./depthFirstSearch.js');
const BinarySearchTree = require('../../../data-structures/tree/binary-search-tree/binarySearchTree.js');

describe('depthFirstSearch()', () => {
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

  describe('should return true if a number is found in the Binary Search Tree', () => {
    it('tests that a true boolean has been returned for a found integer', () => {
      // Finish
    });
  });
});
