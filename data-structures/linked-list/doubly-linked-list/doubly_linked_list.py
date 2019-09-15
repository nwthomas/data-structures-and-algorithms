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

    def __str__(self):
        """
        Returns a string version of the node in a readable
        format.
        """
        return f"Value: {self.value}\nPrevious Node: {self.prev}\nNext Node: {self.next}"

    def __repr__(self):
        """
        Returns a representation of this Node in code to
        recreate it.
        """
        return f"Node({repr(self.value)}, {repr(self.prev)}, {repr(self.next)})"


class DoublyLinkedList:
    def __init__(self, node=None):
        self.head = node
        self.tail = node
        self.length = 1 if node is not None else 0

    def __len__(self):
        """
        Returns the length of self.length
        """
        return self.length

    def add_to_head(self, value):
        """
        Creates a new Node and inserts it as the new head
        of the list.
        """
        new_node = Node(value)
        self.length += 1
        if not self.head and not self.tail:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def remove_from_head(self):
        """
        Removes the current head Node and sets the next
        Node as the head. It returns the removed Node
        value.
        """
        node_value = self.head.value
        self.delete(self.head)
        return node_value
