import unittest
from bubble_sort import bubble_sort


class TestBubbleSort(unittest.TestCase):
    def test_short_sort(self):
        """
        Tests that a short list of integers has been sorted
        successfully
        """
        list = [4, 6, 9, 3, 5, 2, 6]
        final = [2, 3, 4, 5, 6, 6, 9]
        self.assertEqual(bubble_sort(list), final)
        self.assertNotEqual(bubble_sort(list), [7])

    def test_long_sort(self):
        """
        Tests that a long list of integers has been sorted
        successfully
        """
        list = [4, 8, 2, 9, 3, 7, 3454, 1, 9, 123, 456, 23, 4, 98, 345]
        final = [1, 2, 3, 4, 4, 7, 8, 9, 9, 23, 98, 123, 345, 456, 3454]
        self.assertEqual(bubble_sort(list), final)
        self.assertNotEqual(bubble_sort(list), [89])


if __name__ == "__main__":
    unittest.main()
