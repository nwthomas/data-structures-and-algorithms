/*
A Least Recently Used (LRU) Cache allows the storage of data where a record is kept of when
the data was last touched.

Older data is overwritten when the maximum capacity of the cache is reached.
*/

function LRUCache(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.cache = {};
}

LRUCache.prototype.get = function add(key) {
    if (!this.cache[key]) {
        return -1;
    } else if (this.length === 1) {
        return this.cache[key].value;
    }

    const movingNode = this.cache[key];
    const prevNode = movingNode.prev;
    const nextNode = movingNode.next;

    if (prevNode) {
        prevNode.next = nextNode;
    } else {
        return movingNode.value;
    }

    if (nextNode) {
        nextNode.prev = prevNode;
    } else {
        this.tail = prevNode;
    }

    this.head.prev = movingNode;
    movingNode.next = this.head;
    movingNode.prev = null;
    this.head = movingNode;

    return this.head.value;
};

LRUCache.prototype.put = function put(key, value) {
    if (!this.head) {
        this.length += 1;
        this.head = new Node(key, value);
        this.tail = this.head;
        this.cache[key] = this.head;
    } else if (this.cache[key]) {
        this.get(key);
        this.head.value = value;
    } else {
        this.length += 1;

        const newNode = new Node(key, value, this.head);

        this.head.prev = newNode;
        this.head = newNode;
        this.cache[key] = newNode;

        if (this.length > this.capacity) {
            const deletedNode = this.tail;

            this.tail = this.tail.prev;
            this.tail.next = null;
            delete this.cache[deletedNode.key];
            this.length -= 1;
        }
    }
};

LRUCache.prototype.delete = function del(key) {
    if (!this.cache[key]) {
        return -1;
    }

    const deletedNode = this.cache[key];
    const prevNode = deletedNode.prev;
    const nextNode = deletedNode.next;

    if (prevNode) {
        prevNode.next = nextNode;
    }

    if (nextNode) {
        nextNode.prev = prevNode;
    }

    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else if (this.head === deletedNode) {
        this.head = nextNode;
    } else if (this.tail === deletedNode) {
        this.tail = prevNode;
    }

    this.length -= 1;

    return deletedNode.value;
};

function Node(key = '', value = null, next = null, prev = null) {
    this.value = value;
    this.key = key;
    this.next = next;
    this.prev = prev;
}

module.exports = {
    LRUCache,
    Node,
};
