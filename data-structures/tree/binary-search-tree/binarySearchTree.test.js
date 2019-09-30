const BinarySearchTree = require('./binarySearchTree.js');

describe('Binary Search Tree', () => {
  describe('BinarySearchTree class', () => {
    describe('should instantiate a Binary Search Tree class', () => {
      it('tests if a Binary Search Tree has been instantiated', () => {
        const bst = new BinarySearchTree(1);
        expect(bst instanceof BinarySearchTree).toBeTruthy();
      });
    });

    describe('should insert a value into a new Binary Search Tree', () => {
      it('tests if a value has been inserted', () => {
        const bst = new BinarySearchTree(1);
        bst.insert(100);
        bst.insert(4);
        bst.insert(-4);
        bst.insert(-100);
        const val1 = bst.contains(100);
        expect(val1).toBeTruthy();
        const val2 = bst.contains(555);
        expect(val2).toBeFalsy();
      });
    });

    describe('should check if a value is contained in the Binary Search Tree', () => {
      it('tests if a boolean is returned when checking for a value contained in the Binary Search Tree', () => {
        const bst = new BinarySearchTree('test');
        bst.insert('111111');
        bst.insert('aaaaaa');
        bst.insert('zzzzzz');
        bst.insert('another test');
        bst.insert('testing');
        const outcome1 = bst.contains('zzzzzz');
        expect(outcome1).toBeTruthy();
        const outcome2 = bst.contains('asdfasdf');
        expect(outcome2).toBeFalsy();
      });
    });

    describe('should check for what the maximum value in a Binary Search Tree is', () => {
      it('tests if the maximum value in a Binary Search Tree is correctly returned', () => {
        const bst = new BinarySearchTree(123);
        bst.insert(5);
        bst.insert(10);
        bst.insert(678);
        bst.insert(1);
        bst.insert(444);
        bst.insert(23);
        const max = bst.getMax();
        expect(max).toBe(678);
      });
    });

    describe('should return the values from low-to-high in a depth-first search traversal', () => {
      it('tests that the values from low-to-high are correctly returned from the Binary Search Tree', () => {
        const bst = new BinarySearchTree(123);
        bst.insert(5);
        bst.insert(10);
        bst.insert(678);
        bst.insert(1);
        bst.insert(444);
        bst.insert(23);
        bst.insert(99);
        bst.insert(-34);
        const arr = bst.inOrderDFT(bst);
        expect(arr).toEqual([-34, 1, 5, 10, 23, 99, 123, 444, 678]);
      });
    });
  });
});
