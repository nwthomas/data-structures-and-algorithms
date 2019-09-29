import unittest
from binary_search_tree import BinarySearchTree


class TestBinarySearchTree(unittest.TestCase):
    def test_instantiation(self):
        bst = BinarySearchTree(1)
        self.assertIsInstance(bst, BinarySearchTree)


if __name__ == "__main__":
    unittest.main()
