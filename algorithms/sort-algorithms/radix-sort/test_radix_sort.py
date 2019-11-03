import unittest
from radix_sort import radix_sort


class TestRadixSort(unittest.TestCase):
    def test_short_list(self):
        """
        Tests if a short list of integers has been sorted
        """
        l = [5, 2, 8, 2, 6, 1, 454, 8, 23]
        final = [1, 2, 2, 5, 6, 8, 8, 23, 454]
        self.assertEqual(radix_sort(l), final)

    def test_long_list(self):
        """
        Tests if a long list of integers has been sorted
        """
        l = [5, 8, 2, 6, 3, 7, 3, 7, 1, 5, 789, 2344,
             6, 1, 6, 7, 234, 8, 56, 4, 8, 234, 0, 12, 0]
        final = [0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7,
                 7, 7, 8, 8, 8, 12, 56, 234, 234, 789, 2344]
        self.assertEqual(radix_sort(l), final)

    def test_float_list(self):
        """
        Tests if a list of floating point numbers has been 
        sorted
        """
        l = [4.526378, 3.345, 1.111, 2.89, 0.3456]
        final = [0.3456, 1.111, 2.89, 3.345, 4.526378]
        self.assertEqual(radix_sort(l), final)


if __name__ == "__main__":
    unittest.main()
