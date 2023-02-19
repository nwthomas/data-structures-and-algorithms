"""
A priority queue is an implementation of a data structure that allows the placement
of tasks with specific priorities. These tasks can then be popped off the data structure
for work to be done on them.

Note that an optimal solution would probably use an actual binary tree as using an array
is likely to result in (net) slower operations. However, this is a conceptual implementation
and therefore does not need to be perfectly optimized.
"""

from typing import Any, List

PRIORITY_HIGH = 2
PRIORITY_MEDIUM = 1
PRIORITY_LOW = 0

class PriorityQueue:
    def __init__(self):
        self.queue = []
        self.priority_high = PRIORITY_HIGH
        self.priority_medium = PRIORITY_MEDIUM
        self.priority_low = PRIORITY_LOW

    def enqueue(self, value: Any, priority = PRIORITY_LOW) -> int:
        """
        Bubbles down the first index position task to its final placement based
        around its priority queue level relative to its children
        """
        self.queue.append({ "value": value, "priority": priority })

        return self._bubble_up_task()

    def dequeue(self) -> Any:
        """
        Removes a task from the queue and returns it while bubbling down its
        replacement in the priority queue
        """
        if len(self.queue) <= 1:
            task = self.queue[0]
            self.queue = []

            return task
        
        last_index = len(self.queue) - 1
        self._swap_tasks(0, last_index)

        task = self.queue.pop()

        self._bubble_down_task()

        return task

    def _bubble_down_task(self) -> None:
        """
        Bubbles down the first index position task to its final placement based
        around its priority queue level relative to its children
        """
        pass

    def _bubble_up_task(self) -> int:
        """
        Bubbles up a task over lower priority messages in the priority queue
        """
        pass

    def _get_child_indices(self, current_index: int) -> List[int]:
        """
        Returns a pair of left/right child indices for a given index
        """
        multiplier = current_index * 2
        left_index = multiplier + 1
        right_index = multiplier + 2

        return [left_index, right_index]

    def _get_parent_index(self, child_index: int) -> int:
        """
        Takes in a child index and finds its parent index
        """
        return (child_index - 1) // 2

    def _swap_tasks(self, index_one: int, index_two: int) -> None:
        """
        Takes in two indices and swaps them in the priority queue. Not that this
        method does not return any tasks/indices since tasks are mutated directly
        in the priority queue.
        """
        self.queue[index_one], self.queue[index_two] = self.queue[index_two], self.queue[index_one]