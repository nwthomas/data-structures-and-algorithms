import unittest
from breadth_first_search import breadth_first_search as bfs
from binary_search_tree import BinarySearchTree


def create_bst():
    """
    Creates a Binary Search Tree instance for every
    test in the class below
    """
    BST = BinarySearchTree(5)
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
    def test_find_integer_value(self):
        """
        Tests if a True boolean value has been returned
        for finding a value in the BST successfully using
        a Breadth-First Search
        """
        BST = create_bst()
        result = bfs(BST, 3)
        self.assertTrue(result)

    def test_not_found_integer_value(self):
        """
        Tests if a False boolean vaslue has been returned
        for not finding a value in the BST using a
        Breadth-First Search
        """
        BST = create_bst()
        result = bfs(BST, 14)
        self.assertFalse(result)


if __name__ == "__main__":
    unittest.main()
