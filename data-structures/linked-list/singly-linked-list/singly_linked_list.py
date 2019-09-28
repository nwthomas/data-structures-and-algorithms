"""
The SinglyLinkedList class is used to instantiate a new list.

The Node class is used to instantiate various Nodes along
the SinglyLinkedList.

Each Node has a reference to the Node after it (if it
exists).
"""


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def insert_after(self, value):
        """
        Instantiates a new Node with the given value and
        inserts it after this Node.
        """
        if not self.next:
            self.next = Node(value)
        else:
            oldNext = self.next
            self.next = Node(value)
            self.next.next = oldNext

    def delete(self):
        """
        Deletes the pointer to the next Node, alowing
        garbage collection to clean it up.

        NOTE: You still must remove the previous Node's
        pointer via traversal inside the list.
        """
        self.next = None

    def __str__(self):
        """
        Returns a string version of the Node in a readable
        format.
        """
        return f"value: {self.value}, next: {self.next}"

    def __repr__(self):
        """
        Returns a representation of this Node in code to
        recreate it.
        """
        return f"Node({repr(self.value)}, {repr(self.next)})"


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    def __len__(self):
        """
        Returns the length of the current list
        """
        return self.length

    def add_to_head(self, value):
        """
        Instantiates a new Node and inserts it as the new head
        of the list.
        """
        old_node = self.head
        self.head = Node(value)
        self.length += 1
        self.head.next = old_node

    def remove_from_head(self):
        """
        Removes the current head Node and sets the next Node
        as the head. It returns the removed Node value.
        """
        new_head = self.head.next
        old_head_val = self.head.value
        self.head.next = None
        self.head = new_head
        self.length -= 1
        return old_head_val

    def add_to_tail(self, value):
        """
        Instantiates a new Node and inserts it as the new tail
        of the list.
        """
        current_node = self.head
        while current_node.next:
            current_node = current_node.next
        current_node.next = Node(value)
        self.length += 1

    def remove_from_tail(self):
        """
        Removes the current tail Node and returns the removed Node
        value.
        """
        current_node = self.head
        previous_node = None
        while current_node.next:
            previous_node = current_node
            current_node = current_node.next
        previous_node.next = None
        self.length -= 1

    def move_to_front(self, node):
        """
        Removes the current placement of the Node and moves it
        to the head of the list.
        """
        node_val = node.value
        self.delete(node)
        self.add_to_head(node_val)
        self.length += 1

    def move_to_end(self, node):
        """
        Removes the current placement of the Node and moves it
        to the tail of the list.
        """
        node_val = node.value
        self.delete(node)
        self.add_to_tail(node_val)
        self.length += 1

    def delete(self, node):
        """
        Removes a Node from the list and handles cases where
        the Node was the head of the tail.
        """
        node_val = node.value
        current_node = self.head
        previous_node = None
        while current_node.next:
            next = current_node.next
            if current_node == Node:
                currentNode.next = None
                previous_node.next = next
                currentNode = next
            else:
                current_node = next
        self.length -= 1
        return node_val

    def get_max(self):
        """
        Returns the maximum value currently in the list
        """
        max_val = self.head.value
        currentNode = self.head
        while currentNode.next:
            currentNode = currentNode.next
            if currentNode.value > max_val:
                max_val = currentNode.value
        return max_val

    def __getattr__(self):
        """
        Returns None for any class inquiry on variables
        that don't exist.
        """
        return None

    def __str__(self):
        """
        Returns a string version of the SinglyLinkedList in
        a readable format.
        """
        return f"head: {self.head}, length: {self.length}"

    def __repr__(self):
        """
        Returns a representation of this SginlyinkedList in
        code to recreate it.
        """
        return f"SinglyLinkedList({repr(self.head)}, {repr(self.length)})"
