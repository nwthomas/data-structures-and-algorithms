"""
The BinarySearchTree class is used to instantiate a new Binary Search 
Tree (as well as associated nodes).

Each one has a value as well as a reference to the next left and right points (if they exist).
"""


class BinarySearchTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

    def insert(self, value):
        """
        Inserts a new BST Node by traversing the BST
        and inserting it appropriately.
        """
        current = self
        traverse_nodes = True
        while traverse_nodes:
            if current.value > value and current.left:
                current = current.left
            elif current.value <= value and current.right:
                current = current.right
            elif current.value > value and not current.left:
                current.left = BinarySearchTree(value)
                traverse_nodes = False
            elif current.value < value and not current.right:
                current.right = BinarySearchTree(value)
                traverse_nodes = False

    def contains(self, target):
        """
        Traverses the BST to check if a given target value is
        included in it.
        """
        current = self
        traverse_nodes = True
        while traverse_nodes:
            if current.value is target:
                return True
            elif current.value > target and current.left:
                current = current.left
            elif current.value <= target and current.right:
                current = current.right
            elif current.value > target and not current.left:
                return False
            elif current.value < target and not current.right:
                return False

    def get_max(self):
        """
        Traverses the BST to find the highest value in it.
        """
        highest = self.value
        current = self
        traverse_nodes = True
        while traverse_nodes:
            if current.right:
                current = current.right
            elif not current.right:
                traverse_nodes = False
            if current.value >= highest:
                highest = current.value
        return highest

    def in_order_dft(self, node):
        """
        Returns all the values in order from low to high
        """
        values = []

        def dfs(n):
            values.append(n.value)
            if n.right:
                dfs(n.right)
            if n.left:
                dfs(n.left)
        dfs(node)
        values.sort()
        return values
