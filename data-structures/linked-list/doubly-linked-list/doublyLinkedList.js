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

const node = new Node(1);
node.insertBefore(5);
console.log(node);
node.insertAfter(3);
console.log(node);
