"""
A Least Recently Used (LRU) Cache allows the storage of data where a record is kept of when
the data was last touched.

Older data is overwritten when the maximum capacity of the cache is reached.
"""

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.length = 0
        self.head = None
        self.tail = None
        self.cache = {}

    def get(self, key: int) -> int:
        if not key in self.cache:
            return -1
        if self.length == 1:
            return self.cache[key].value
        
        moving_node = self.cache[key]
        prev_node = moving_node.prev
        next_node = moving_node.next
        
        if prev_node:
            prev_node.next = next_node
        else:
            return moving_node.value
            
        if next_node:
            next_node.prev = prev_node
        else:
            self.tail = prev_node
            
        self.head.prev = moving_node
        moving_node.next = self.head
        moving_node.prev = None
        self.head = moving_node
        
        return self.head.value
        

    def put(self, key: int, value: int) -> None:
        if not self.head:
            self.length += 1
            self.head = Node(value, key)
            self.tail = self.head
            self.cache[key] = self.head
        elif key in self.cache:
            self.get(key)
            self.head.value = value
        else:     
            self.length += 1
            new_node = Node(value, key, self.head)
            self.head.prev = new_node
            self.head = new_node
            self.cache[key] = new_node
            
            if self.length > self.capacity:
                deleted_node = self.tail
                self.tail = self.tail.prev
                self.tail.next = None
                del self.cache[deleted_node.key]
                self.length -= 1

    def delete(self, key: int) -> int:
        if not key in self.cache:
            return -1

        deleted_node = self.cache[key]
        prev_node = deleted_node.prev
        next_node = deleted_node.next

        if prev_node:
            prev_node.next = next_node
        if next_node:
            next_node.prev = prev_node

        if self.length == 1:
            self.head = None
            self.tail = None
        elif self.head == deleted_node:
            self.head = next_node
        elif self.tail == deleted_node:
            self.tail = prev_node

        self.length -= 1

        return deleted_node.value
        
class Node:
    def __init__(self, value = None, key = None, next_node = None, prev_node = None):
        self.value = value
        self.key = key
        self.next = next_node
        self.prev = prev_node
