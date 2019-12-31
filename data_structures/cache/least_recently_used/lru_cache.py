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


class LRUCache:
    def __init__(self, max_size=None, initial_value=None):
        if max_size == None:
            return None
        self._front = None
        self._back = None
        self._max_size = max_size
        self._length = 0
        if initial_value:
            node = Node(initial_value)
            self._front = node
            self._back = node
            self._length += 1

    def length(self):
        """
        Returns the current length of the cache
        """
        return self._length

    def max_size(self):
        """
        Returns the maximum possible size of the cache
        """
        return self._max_size

    def add_value(self, value):
        """
        Adds a new value to the cache, placing it in the front (or
        most recently used) position

        If the max length of the cache has been reached, the back
        (or least recently used) value will be removed from the
        cache
        """
        if self.length() < self._max_size:
            node = Node(value)
            if self.length() <= 0:
                self._front = node
                self._back = node
            else:
                node._next = self._front
                self._front._previous = node
                self._front = node
            self._length += 1
        else:
            old_back = self._back
            self._back = self._back._previous
            old_back.delete()
            self._length -= 1
            self.add_value(value)

    def access_value(self, value):
        """
        Accesses a value from the cache, also moving it into the
        front (or most recently used) position

        Returns Rrue if value in cache or False otherwise
        """
        if value == self._front.get_value():
            return True
        current = self._front
        if current == None:
            return False
        while current._next and current.get_value() != value:
            current = current._next
        if current.get_value() == value:
            if current == self._back:
                self._back = self._back._previous
            current.delete()
            self.add_value(value)
            return True
        else:
            return False

    def delete_value(self, value):
        """
        Deletes a value from the cache

        Returns True if value is deleted from the cache or
        False otherwise
        """
        current = self._front
        if current == None:
            return False
        while current._next and current.get_value() != value:
            current = current._next
        if current.get_value() == value:
            if self.length() <= 1:
                self._front = None
                self._back = None
            elif current == self._front:
                new_front = self._front._next
                current.delete()
                self._front = new_front
            elif current == self._back:
                new_back = self._back._previous
                current.delete()
                self._back = new_back
            self._length -= 1
            return True
        else:
            return False
