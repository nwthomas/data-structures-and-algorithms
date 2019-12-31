/*
A Least Recently Used (LRU) Cache allows the storage of data where a record is kept of when
the data was last touched.

Older data is overwritten when the maximum capacity of the cache is reached.
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

  delete() {
    /**
     * Deletes the current Node from the linked list and
     * returns its value
     */
    const current = this;
    const previous = this._previous;
    const next = this._next;
    if (previous) {
      previous._next = next;
    }
    if (next) {
      next._previous = previous;
    }
    current._next = null;
    current._previous = null;
    return current.getValue();
  }
}

class LRUCache {
  constructor(maxSize, initialValue = null) {
    if (!maxSize) {
      return null;
    }
    this._front = null;
    this._back = null;
    this._maxSize = maxSize;
    this._length = 0;
    if (initialValue) {
      const node = new Node(initialValue);
      this._front = node;
      this._back = node;
      this._length++;
    }
  }

  length() {
    /**
     * Returns the current length of the cache
     */
    return this._length;
  }

  maxSize() {
    /**
     * Returns the maximum possible size of the cache
     */
    return this._maxSize;
  }

  addValue(value) {
    /**
     * Adds a new value to the cache, placing it in the front (or
     * most recently used) position
     *
     * If the max length of the cache has been reached, the back
     * (or least recently used) value will be removed from the
     * cache
     */
    if (this.length() < this._maxSize) {
      const node = new Node(value);
      if (!this.length()) {
        this._front = node;
        this._back = node;
      } else {
        node._next = this._front;
        this._front._previous = node;
        this._front = node;
      }
      this._length++;
    } else {
      const oldBack = this._back;
      this._back = this._back._previous;
      oldBack.delete();
      this._length--;
      this.addValue(value);
    }
  }

  accessValue(value) {
    /**
     * Accesses a value from the cache, also moving it into the
     * front (or most recently used) position
     *
     * Returns true if value in cache or false otherwise
     */
    if (value === this._front.getValue()) {
      return true;
    }
    let current = this._front;
    while (current._next && current.getValue() !== value) {
      current = current._next;
    }
    if (current.getValue() === value) {
      if (current === this._back) {
        this._back = this._back._previous;
      }
      current.delete();
      this.addValue(value);
      return true;
    } else {
      return false;
    }
  }

  deleteValue(value) {
    /**
     * Deletes a value from the cache
     *
     * Returns true if value is deleted from the cache or
     * false otherwise
     */
    let current = this._front;
    while (current._next && current.getValue() !== value) {
      current = current._next;
    }
    if (current.getValue() === value) {
      if (this.length() <= 1) {
        this._front = null;
        this._back = null;
      } else if (current === this._front) {
        const newFront = this._front._next;
        current.delete();
        this._front = newFront;
      } else if (current === this._back) {
        const newBack = this._back._previous;
        current.delete();
        this._back = newBack;
      }
      this._length--;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Node, LRUCache };
