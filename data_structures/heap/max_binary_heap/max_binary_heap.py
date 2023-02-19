"""
A max binary heap is a data structure that uses an array (under the hood) to mimic a binary tree.

It has a variety of use cases including (notably) priority queues.
"""

from typing import Any, List

class MaxBinaryHeap:
    def __init__(self):
        self.values = []

    def insert(self, newValue: int) -> None:
        """Inserts a new value into the heap"""
        self.values.append(newValue)

        self._bubble_up_value()

    def remove(self) -> Any:
        """Removes a value from the heap, reorders the heap, and then returns the value"""
        if len(self.values) <= 1:
            value = self.values[0]
            self.values = []

            return value
        
        last_index = len(self.values) - 1
        self._swap_values(0, last_index)

        value = self.values.pop()

        self._bubble_down_value()

        return value

    def _swap_values(self, index_one: int, index_two: int) -> None:
        """Swaps two values from self.values in place"""
        self.values[index_one], self.values[index_two] = self.values[index_two], self.values[index_one]

    def _get_child_indices(self, current_index: int) -> List[int, int]:
        """Returns a parent node's two child indices"""
        base_multiplier = current_index * 2
        left_child = base_multiplier + 1
        right_child = base_multiplier + 2

        return [left_child, right_child]

    def _get_parent_index(self, child_index: int) -> int:
        """Returns a given child node's parent index"""
        parent_index = child_index - 1 // 2

        return parent_index if parent_index >= 0 else 0

    def _bubble_up_value(self) -> int:
        """Bubbles up new value in heap to its final resting place"""
        index = len(self.values) - 1
        value = self.values[index]

        while True:
            parent_index = self._get_parent_index(index)

            if self.values[parent_index] < value:
                self._swap_values(parent_index, index)
                index = parent_index
            else:
                break
        
        return index

    def _bubble_down_value(self) -> None:
        """Takes a root node value and bubbles it down to its final location"""
        index = 0
        last_index = len(self.values) - 1

        while True:
            current_value = self.values[index]
            right_child_index, left_child_index = self._get_child_indices(index)
            right_value = self.values[right_child_index] if right_child_index <= last_index else None
            left_value = self.values[left_child_index] if left_child_index <= last_index else None

            if left_value and right_value and left_value > current_value and right_value > current_value:
                largest_child_index = left_child_index if left_value > right_value else right_child_index
                self._swap_values(index, largest_child_index)
                index = largest_child_index
            elif left_value and left_value > current_value:
                self._swap_values(index, left_child_index)
                index = left_child_index
            elif right_value and right_value > current_value:
                self._swap_values(index, right_child_index)
                index = right_child_index
            else:
                break