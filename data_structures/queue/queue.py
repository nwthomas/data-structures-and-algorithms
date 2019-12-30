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
