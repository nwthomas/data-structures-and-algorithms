class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  insertAfter(value) {
    /**
     * Instantiates a new Node with the given value
     * and inserts it after this Node.
     */
    let currentNext = this.next;
    this.next = new Node(value, this, currentNext);
    if (currentNext !== null) currentNext.prev = this.next;
  }

  insertBefore(value) {
    /**
     * Instantiates a new Node with the given value
     * and inserts it before this Node.
     */
    let currentPrev = this.prev;
    this.prev = new Node(value, currentPrev, this);
    if (currentPrev !== null) currentPrev.next = this.prev;
  }

  delete() {
    /**
     * Rearranges this Node's previous and next pointers,
     * effectively deleting this Node and allowing for
     * garbage collection to clean it up.
     */
    if (this.prev !== null) this.prev.next = this.next;
    if (this.next !== null) this.next.prev = this.prev;
  }
}

class DoublyLinkedList {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
    this.length = node ? 1 : 0;
  }

  length() {
    /**
     * Returns the length of the current list
     */
    return self.length;
  }

  addToHead(value) {
    /**
     * Instantiates a new Node and inserts it as the new head
     * of the list.
     */
    let newNode = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  removeFromHead() {
    /**
     * Removes the current head Node and sets the next Node
     * as the head. It returns the removed Node value.
     */
    let nodeValue = this.head.value;
    this.delete(this.head);
    return nodeValue;
  }

  addToTail(value) {
    /**
     * Instantiates a new Node and inserts it as the new tail
     * of the list.
     */
    let newNode = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFromTail() {
    /**
     * Removes the current tail Node and sets the previous Node
     * as the tail. It returns the removed Node value.
     */
    let nodeValue = this.tail.value;
    this.delete(this.tail);
    return nodeValue;
  }

  moveToFront(node) {
    /**
     * Removes the input Node from the current spot in the
     * list and inserts it as the new head Node of the list.
     */
    if (node === this.head) return null;
    let value = node.value;
    if (node === this.tail) {
      this.removeFromTail();
    } else {
      node.delete();
      this.length--;
    }
    this.addToHead(value);
  }

  moveToEnd(node) {
    /**
     * Removes the input Node from the current spot in the
     * list and inserts it as the new tail Node of the list.
     */
    if (node == this.tail) return null;
    let value = node.value;
    if (node === this.head) {
      this.removeFromHead();
    } else {
      node.delete();
      this.length--;
    }
    this.addToTail(value);
  }
}

const node = new Node(1);
node.insertBefore(5);
console.log(node);
node.insertAfter(3);
console.log(node);
