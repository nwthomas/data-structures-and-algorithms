import unittest
from binary_search_tree import BinarySearchTree


class TestBinarySearchTree(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that the BST is instantiated successfully.
        """
        bst = BinarySearchTree(1)
        self.assertIsInstance(bst, BinarySearchTree)

    def test_insert(self):
        """
        Tests that a new value has been inserted into the BST
        successfully.
        """
        bst = BinarySearchTree(65)
        bst.insert(67)
        bst.insert(4)
        bst.insert(55)
        bst.insert(80)
        fourty = bst.contains(40)
        four = bst.contains(4)
        self.assertFalse(fourty)
        self.assertTrue(four)

    def test_contains(self):
        """
        Tests that a value is currently contained in the BST.
        """
        bst = BinarySearchTree("Test1")
        bst.insert("Test2")
        bst.insert("Beginning")
        bst.insert("Test")
        bst.insert("Testing")
        bst.insert("AAA")
        bst.insert("ZZZ")
        word = bst.contains("ZZZ")
        not_word = bst.contains("this is a test")
        self.assertTrue(word)
        self.assertFalse(not_word)

    def test_get_max(self):
        """
        Tests that the maximum value in the BST is successfully
        returned.
        """
        bst = BinarySearchTree(65)
        bst.insert(67)
        bst.insert(4)
        bst.insert(55)
        bst.insert(80)
        bst.insert(5678)
        bst.insert(34)
        bst.insert(978)
        bst.insert(1)
        bst.insert(-49)
        bst.insert(-380)
        max = bst.get_max()
        self.assertEqual(max, 5678)

    def test_in_order_dft(self):
        """
        Tests that all the values are retrieved from low to high.
        """
        bst = BinarySearchTree(65)
        bst.insert(67)
        bst.insert(4)
        bst.insert(55)
        bst.insert(80)
        bst.insert(5678)
        bst.insert(34)
        bst.insert(978)
        bst.insert(1)
        bst.insert(-49)
        bst.insert(-380)
        values = bst.in_order_dft(bst)
        self.assertEqual(
            values, [-380, -49, 1, 4, 34, 55, 65, 67, 80, 978, 5678])


if __name__ == "__main__":
    unittest.main()
