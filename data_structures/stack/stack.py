"""
A Stack is a unique structure that operates in a first-in, last-out priority
schedule.

A typical Stack will have two basic operations in addition to storing data, which
are adding data to the top of the stack and then popping data off the top.

Time complexity of O(1) can be achieved easily in this data structure.
"""


class Stack:
    def __init__(self, initial_value=None):
        self._stack = []
        if initial_value:
            self._stack.append(initial_value)

    def length(self):
        """
        Returns the current length of the Stack
        """
        return len(self._stack)

    def push(self, value=None):
        """
        Pushes a new value to top of the Stack
        """
        if value:
            self._stack.append(value)

    def pop(self):
        """
        Pops the top value off of the Stack and returns it
        """
        return self._stack.pop()

    def get_values(self):
        """
        Returns a list copy of all values in the Stack
        """
        l = []
        for value in self._stack:
            l.append(value)
        return l
