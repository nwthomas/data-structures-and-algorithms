"""
The Node class is used to instantiate various Nodes along
the Doubly-Linked List.

Each Node has a reference to the Node before it (if it
exists) and the Node after it (if it exists).
"""


class Node:
    def __init__(self, value, prev=None, next=None):
        self.value = value
        self.prev = prev
        self.next = next

    def insert_after(self, value):
        """
        Instantiates a new Node with the given value and
        inserts it after this Node.
        """
        current_next = self.next
        self.next = Node(value, self, current_next)
        if current_next is not None:
            current_next.prev = self.next

    def insert_before(self, value):
        """
        Instantiates a new Node with the given value and
        inserts it gefore this Node.
        """
        current_prev = self.prev
        self.prev = Node(value, self, current_prev)
        if current_prev is not None:
            current_prev.next = self.prev

    def delete(self):
        """
        Rearranges this Node's previous and next pointers,
        effectively deleting this Node and allowing for
        garbage collection to clean it up.
        """
        if self.prev is not None:
            self.prev.next = self.next
        if self.next is not None:
            self.next.prev = self.prev
