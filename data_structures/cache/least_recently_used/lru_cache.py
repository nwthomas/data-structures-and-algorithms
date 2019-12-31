"""
A Least Recently Used (LRU) Cache allows the storage of data where a record is kept of when
the data was last touched.

Older data is overwritten when the maximum capacity of the cache is reached.
"""


class Node:
    def __init__(self, value=None, previous=None, next=None):
        self._value = value
        self._next = next
        self._previous = previous

    def get_value(self):
        """
        Returns the value of this Node
        """
        return self._value

    def delete(self):
        """
        Deletes the current Node from the linked list and
        returns its value
        """
        current = self
        previous = self._previous
        next = self._next
        if previous:
            previous._next = next
        if next:
            next._previous = previous
        current._next = None
        current._previous = None
        return current.get_value()
