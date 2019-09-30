/*
The BinarySearchTree class is used to instantiate a new Binary Search 
Tree (as well as associated nodes).

Each one has a value as well as a reference to the next left and right points (if they exist).
*/

class BinarySearchTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    /**
     * Inserts a new BST Node by traversing the BST and inserting
     * it appropriately.
     */
    // Finish
  }

  contains(target) {
    /**
     * Traverses the BST to check if a given target value is
     * included in it.
     */
    // Finish
  }

  getMax() {
    /**
     * Traverses the BST to find the highest value in it.
     */
    // Finish
  }

  inOrderDFT(node) {
    /**
     * Returns all the values in order from low to high.
     */
    // Finish
  }
}

module.exports = BinarySearchTree;
