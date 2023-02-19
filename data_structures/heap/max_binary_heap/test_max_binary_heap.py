from max_binary_heap import MaxBinaryHeap
import unittest

class TestMaxBinaryHeap(unittest.TestCase):
    def get_new_mbh(self):
        return MaxBinaryHeap()
    
    def test_inserts_first_value_correctly(self):
        mbh = self.get_new_mbh()
        added_value_index = mbh.insert(5)
        self.assertEqual(mbh.values, [5])
        self.assertEqual(added_value_index, 0)

    def test_inserts_values_in_correct_order_and_bubbles(self):
        pass

if __name__ == "__main__":
    unittest.main()