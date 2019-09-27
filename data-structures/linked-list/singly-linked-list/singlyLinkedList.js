class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  insertAfter(value) {
    /**
     * Instantiates a new Node with the given value
     * and inserts it after this Node
     */
    const node = new Node(value);
    this.next = node;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getLength() {
    /**
     * Returns the length of the current list
     */
    return this.length;
  }

  addTohead(value) {
    /**
     * Instantiates a new Node and inserts it as the new head
     * of the list.
     */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeFromHead() {
    /**
     * Removes the current head Node and sets the next Node
     * as the head. It returns the removed Node value.
     */
    const newHead = this.head.next;
    const oldHead = this.head;
    this.head.next = null;
    this.head = newHead;
    return oldHead.value;
  }

  addToTail(value) {
    /**
     * Instantiates a new Node and inserts it as the new tail
     * of the list.
     */
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  removeFromTail() {
    /**
     * Removes the current tail Node and returns the removed Node
     * value.
     */
    let currentNode = this.head;
    let previous = null;
    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = null;
    return currentNode.value;
  }

  moveToFront(node) {
    /**
     * Removes the current placement of the Node and moves it
     * to the head of the list.
     */
    const nodeVal = node.value;
    node.delete();
    this.addTohead(nodeVal);
  }

  moveToEnd(node) {
    /**
     * Removes the current placement of the Node and moves it
     * to the tail of the list.
     */
    const nodeVal = node.value;
    node.delete();
    this.addToTail(nodeVal);
  }

  delete(node) {
    /**
     * Removes a Node from the list and handles cases where
     * the Node was the head of the tail.
     */
    let returnedVal = null;
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      const next = currentNode.next;
      if (currentNode === node) {
        currentNode.next = null;
        returnedVal = currentNode.value;
        previousNode.next = next;
        currentNode = next;
      } else {
        currentNode = currentNode.next;
      }
    }
    return returnedVal;
  }

  getMax() {
    /**
     * Returns the maximum value currently in the list
     */
    let maxVal = this.head.value;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value > maxVal) {
        maxVal = currentNode.value;
      }
    }
    return maxVal;
  }
}

module.exports = {
  Node,
  SinglyLinkedList
};
