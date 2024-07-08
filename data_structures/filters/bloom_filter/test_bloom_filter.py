"""
Testing file for the BloomFilter class
"""


import unittest

from bloom_filter import BloomFilter


class TestBloomFilter(unittest.TestCase):
    """
    Tests the BloomFilter class
    """

    def test_stores_value_in_bloom_filter(self):
        """
        Tests that the BloomFilter can store a value
        """
        bloom_filter = BloomFilter(1000)
        bloom_filter.add("test value")

        found_result = bloom_filter.contains("test value")
        not_found_result = bloom_filter.contains("another test value")

        self.assertEqual(found_result, True)
        self.assertEqual(not_found_result, False)

    def test_stores_multiple_values_and_retrieves_them(self):
        """
        Tests that the BloomFilter can store multiple values
        """
        bloom_filter = BloomFilter(1000)
        bloom_filter.add("value one")
        bloom_filter.add("value two")
        bloom_filter.add("value three")

        first_value = bloom_filter.contains("value one")
        second_value = bloom_filter.contains("value two")
        third_value = bloom_filter.contains("value three")
        not_found_result = bloom_filter.contains("value four")

        self.assertEqual(first_value, True)
        self.assertEqual(second_value, True)
        self.assertEqual(third_value, True)
        self.assertEqual(not_found_result, False)


if __name__ == "__main__":
    unittest.main()
