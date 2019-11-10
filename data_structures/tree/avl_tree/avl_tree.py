"""
An AVL Tree is a form of a Binary Search Tree; an AVL Tree is
always a valid BST, but the inverse is not always true.

An AVL Tree is self-balancing, which means that it updates
itself and ensures that an O(log(n)) time complexity is
upheld.
"""


class AVLTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def add(self, value):
        """
        Inserts a value into the AVL Tree and self-balances
        the tree to enforce proper tree structure.
        """
        pass

    def delete(self):
        """
        Deletes a node from the tree and self-balances
        the tree to enforce proper tree structure.
        """
        pass

    def _right_rotation(self, nodeA, nodeB):
        pass

    def _left_rotation(self, nodeA, nodeB):
        pass
