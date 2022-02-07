/*

A Breadth-First Search looks through any tree for a specific value in a lateral
manner.

In other words, for a tree of:

             10
          2     15
        1   5      20

The searching order would be:

10 -> 2 -> 15 -> 1 -> 5 -> 20

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

  breadthFirstSearch() {
    /**
     * Traverses the BST to find a value in a breadth first search
     */
    const queue = [this];
    const visited = [];

    while (queue.length) {
      const currentNode = queue.shift();
      visited.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    console.log(visited);
  }
}

module.exports = BinarySearchTree;
