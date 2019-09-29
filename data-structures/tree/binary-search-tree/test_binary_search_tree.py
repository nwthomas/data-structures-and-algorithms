import unittest
from binary_search_tree import BinarySearchTree


class TestBinarySearchTree(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that the BST is instantiated successfully.
        """
        bst = BinarySearchTree(1)
        self.assertIsInstance(bst, BinarySearchTree)

    def test_insert(self, value):
        """
        Tests that a new value has been inserted into the BST
        successfully.
        """
        pass

    def test_contains(self, value):
        """
        Tests that a value is currently contained in the BST.
        """
        pass

    def test_get_max(self):
        """
        Tests that the maximum value in the BST is successfully
        returned.
        """
        pass

    def test_for_each(self):
        """
        Tests that the for_each() method operates on the BST
        using the callback function that is passed in.
        """
        pass

    def test_in_order_dft(self):
        """
        Tests that all the values are retrieved from low to high.
        """
        pass

    def test_bft_print(self):
        """
        Retrieves the value of every node in a breadth-first
        traversal.
        """
        pass

    def test_dft_print(self):
        """
        Retrieves the value of every node in a depth-first
        traversal.
        """
        pass


if __name__ == "__main__":
    unittest.main()
