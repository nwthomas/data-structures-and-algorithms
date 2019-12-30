"""
A Queue is a unique structure that operates on a first-in, first-out
priority schedule.

A typical Queue will have two basic operations in addition to storing
data, which are adding data to the back of the Queue and removing data
from the front of it.

Time Complexity of O(1) can be achieved by utilizing a singly-linked list
or doubly-linked list.
"""


class Node:
    def __init__(self, value=None, previous=None, next=None):
        self._value = value
        self._previous = previous
        self._next = next

    def get_value(self):
        """
        Returns the value of this Node
        """
        return self._value

    def add_value(self, value):
        """
        Adds a new value to the end of the linked list
        and returns the newly-created Node
        """
        current = self
        while current._next != None:
            current = current._next
        current._next = Node(value, current)
        return current._next

    def delete(self):
        """
        Deletes the current Node from the linked list and
        returns its value
        """
        current = self
        previous = self._previous
        next = self._next
        if previous != None:
            previous._next = next
        if next != None:
            next._previous = previous
        current._next = None
        current._previous = None
        return current.get_value()


class Queue:
    def __init__(self):
        self._head = None
        self._tail = None
        self._length = 0

    def length(self):
        """
        Returns the current lengthe of the Queue
        """
        return self._length

    def add_value(self, value):
        """
        Adds a new value to the tail of the Queue
        """
        if self._head == None and self._tail == None:
            new_node = Node(value)
            self._head = new_node
            self._tail = new_node
        else:
            self._tail.add_value(value)
            self._tail = self._tail._next
        self._length += 1

    def delete_node(self):
        """
        Deletes the value from the front of the Queue
        and returns the value from the deleted Node
        """
        old_head_node = self._head
        self._head = self._head._next
        deleted_value = old_head_node.get_value()
        if self.length() <= 1:
            self._head = None
            self._tail = None
        self._length -= 1
        return deleted_value
