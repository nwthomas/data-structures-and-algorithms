import unittest
from breadth_first_search import breadth_first_search
from data_structures.tree.binary_search_tree.binary_search_tree import BinarySearchTree


def create_bst():
    BST = BinarySearchTree()
    BST.insert(5)
    BST.insert(10)
    BST.insert(1)
    BST.insert(9)
    BST.insert(3)
    BST.insert(6)
    BST.insert(2)
    BST.insert(4)
    BST.insert(8)
    BST.insert(7)
    return BST


class TestBreadthFirstSearch(unittest.TestCase):
    pass


if __name__ == "__main__":
    unittest.main()
