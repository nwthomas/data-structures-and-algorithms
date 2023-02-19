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

    def test_inserts_values_in_correct_order_and_bubbles_right_side(self):
        mbh = MaxBinaryHeap()
        values = [41, 39, 33, 18, 27, 12]

        for index, value in enumerate(values):
            added_value_index = mbh.insert(value)
            self.assertEqual(mbh.values, values[:index + 1])
            self.assertEqual(mbh.values[added_value_index], value)

        bubbled_up_value_index = mbh.insert(55)
        self.assertEqual(mbh.values, [55, 39, 41, 18, 27, 12, 33])
        self.assertEqual(mbh.values[bubbled_up_value_index], 55)

    def test_inserts_values_in_correct_order_and_bubbles_left_side(self):
        mbh = MaxBinaryHeap()
        values = [55, 39, 41, 18, 27, 12, 33]

        for index, value in enumerate(values):
            added_value_index = mbh.insert(value)
            self.assertEqual(mbh.values, values[:index + 1])
            self.assertEqual(mbh.values[added_value_index], value)

        bubbled_up_value_index = mbh.insert(24)
        self.assertEqual(mbh.values, [55, 39, 41, 24, 27, 12, 33, 18])
        self.assertEqual(mbh.values[bubbled_up_value_index], 24)

    def test_removes_and_returns_first_value(self):
        mbh = MaxBinaryHeap()

        mbh.insert(50)
        mbh.insert(40)
        mbh.insert(60)

        removed_value = mbh.remove()
        self.assertEqual(removed_value, 60)

    def test_removes_and_bubbles_down_values_on_right_side(self):
        mbh = MaxBinaryHeap()
        values = [41, 33, 39, 18, 27, 12, 8]

        for index, value in enumerate(values):
            added_value_index = mbh.insert(value)
            self.assertEqual(mbh.values, values[:index + 1])
            self.assertEqual(mbh.values[added_value_index], value)

        removed_value = mbh.remove()
        self.assertEqual(removed_value, 41)
        self.assertEqual(mbh.values, [39, 33, 12, 18, 27, 8])

    def test_removes_and_bubbles_down_values_on_left_side(self):
        mbh = MaxBinaryHeap()
        values = [41, 33, 39, 18, 27, 12]

        for index, value in enumerate(values):
            added_value_index = mbh.insert(value)
            self.assertEqual(mbh.values, values[:index + 1])
            self.assertEqual(mbh.values[added_value_index], value)

        removed_value = mbh.remove()
        self.assertEqual(removed_value, 41)
        self.assertEqual(mbh.values, [39, 33, 27, 18, 12])


if __name__ == "__main__":
    unittest.main()