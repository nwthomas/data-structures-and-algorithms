/*

This searches through a tree data structure in a depth-first search in-order manner.

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
    let current = this;
    let traverseNodes = true;

    while (traverseNodes) {
      if (current.value > value && current.left) {
        current = current.left;
      } else if (current.value <= value && current.right) {
        current = current.right;
      } else if (current.value > value && !current.left) {
        current.left = new BinarySearchTree(value);
        traverseNodes = false;
      } else if (current.value <= value && !current.right) {
        current.right = new BinarySearchTree(value);
        traverseNodes = false;
      }
    }
  }

  depthFirstSearchInOrder() {
    /**
     * Searches through a tree in a depth first search order with
     * the caveat of using an in-order pattern
     */
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this);

    console.log(visited);
  }
}

module.exports = BinarySearchTree;
