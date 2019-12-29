/*
A Queue is a unique structure that operates on a first-in, first-out
priority schedule.

A typical Queue will have two basic operations in addition to storing
data, which are adding data to the back of the Queue and removing data
from the front of it.

Time Complexity of O(1) can be achieved by utilizing a singly-linked list
or doubly-linked list.
*/

class Node {
  constructor(value = null, previous = null, next = null) {
    this._value = value;
    this._next = next;
    this._previous = previous;
  }

  getValue() {
    /**
     * Returns the value of this Node
     */
    return this._value;
  }

  addValue(value) {
    /**
     * Adds a new value to the end of the linked-list
     * and returns the newly-created Node
     */
    let current = this;
    while (current._next) {
      current = current._next;
    }
    current._next = new Node(value, current);
    return current._next;
  }

  delete() {
    /**
     * Deletes the current Node from the linked-list and
     * returns its value
     */
    const current = this;
    const previous = this.previous;
    const next = this._next;
    previous._next = next;
    next._previous = previous;
    this._next = null;
    this._previous = null;
    return current._value;
  }
}

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  length() {
    /**
     * Returns the current length of the Queue
     */
    return this._length;
  }

  addValue(value) {
    /**
     * Adds a new value to the tail of the Queue
     */
    if (!this._head && !this.tail) {
      const newNode = new Node(value);
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._head.addValue(value);
    }
    this._length++;
  }

  deleteNode() {
    /**
     * Deletes a value from the front of the Queue
     * and returns the value from the deleted Node
     */
    const deletedValue = this._head.delete();
    if (this.length() <= 1) {
      this._head = null;
      this._tail = null;
    }
    this._length--;
    return deletedValue;
  }
}

module.exports = { Node, Queue };
