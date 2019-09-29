"""
The BinarySearchTree class is used to instantiate a new Binary Search 
Tree (as well as associated nodes).

Each one has a value as well as a reference to the next left and right points (if they exist).
"""


class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

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

    def for_each(self, callback):
        """
        Traverses every node in the BST and performs the
        callback function on it.
        """
        callback(self.value)
        if self.left:
            self.left.for_each(callback)
        if self.right:
            self.right.for_each(callback)

    def in_order_dft(self, node):
        """
        Prints all the values in order from low to high
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
        for val in values:
            print(val)

    def bft_print(self, node):
        """
        Print the value of every node, starting with the given node,
        in an iterative breadth first traversal
        """
        queue = []
        print(self.value)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
        while len(queue) > 0:
            current = queue[0]
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)
            print(current.value)
            queue = queue[1:]

    def dft_print(self, node):
        """
        Prints the value of every node, starting with the given node,
        in an iterative depth first traversal
        """
        print(node.value)
        if node.right:
            self.dft_print(node.right)
        if node.left:
            self.dft_print(node.left)
