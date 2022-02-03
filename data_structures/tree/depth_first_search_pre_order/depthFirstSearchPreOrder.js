/*


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

  depthFirstSearchPreOrder(searchValue) {
    /**
     * Searches through a tree in a depth first search order with
     * the caveat of using a pre-order pattern
     */
    const firstQueue = [this];
    const secondQueue = [];

    while (firstQueue.length || secondQueue.length) {
      let currentNode;
      if (firstQueue.length) {
        currentNode = firstQueue.pop();
      } else {
        currentNode = secondQueue.pop();
      }

      if (currentNode.value === searchValue) {
        return currentNode;
      }

      if (currentNode.left) {
        firstQueue.push(currentNode.left);
      }

      if (currentNode.right) {
        secondQueue.push(currentNode.right);
      }
    }
  }
}

module.exports = BinarySearchTree;
