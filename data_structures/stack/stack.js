/*
A Stack is a unique structure that operates in a first-in, last-out priority
schedule.

A typical Stack will have two basic operations in addition to storing data, which
are adding data to the top of the stack and then popping data off the top.

Time complexity of O(1) can be achieved easily in this data structure.
*/

class Stack {
  constructor(initialValue = null) {
    this._stack = [];
    if (initialValue) {
      this._stack.push(initialValue);
    }
  }

  length() {
    /**
     * Returns the current length of the stack
     */
    return this._stack.length;
  }

  push(value) {
    /**
     * Pushes a new value to the top of the stack
     */
    this._stack.push(value);
  }

  pop() {
    /**
     * Pops a value off the top of the stack and returns it
     */
    return this._stack.pop();
  }

  getValues() {
    /**
     * Returns a copy of an array of all current values in the stack
     */
    return [...this._stack];
  }
}

module.exports = Stack;
