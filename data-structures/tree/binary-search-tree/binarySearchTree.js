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

  contains(target) {
    /**
     * Traverses the BST to check if a given target value is
     * included in it.
     */
    let current = this;
    while (true) {
      if (current.value === target) {
        return true;
      } else if (current.value > value && current.left) {
        current = current.left;
      } else if (current.value <= value && current.right) {
        current = current.right;
      } else if (current.value > value && !current.left) {
        return false;
      } else if (current.value <= value && !current.right) {
        return false;
      }
    }
  }

  getMax() {
    /**
     * Traverses the BST to find the highest value in it.
     */
    let highest = this.value;
    let current = this;
    let traverseNodes = true;
    while (traverseNodes) {
      if (current.value > highest) {
        highest = current.value;
      }
      if (current.right) {
        current = current.right;
      } else if (!current.right) {
        traverseNodes = false;
      }
    }
    return highest;
  }

  inOrderDFT(node) {
    /**
     * Returns all the values in order from low to high.
     */
    const values = [];
    function dfs(n) {
      values.push(n.value);
      if (n.right) dfs(n.right);
      if (n.left) dfs(n.left);
    }
    dfs(node);
    values.sort();
    return values;
  }
}

module.exports = BinarySearchTree;
