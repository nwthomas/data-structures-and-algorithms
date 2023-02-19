from priority_queue import PriorityQueue
import unittest

class TestPriorityQueue(unittest.TestCase):
    def create_priority_queue(self):
        return PriorityQueue()
    
    def test_enqueues_first_task_with_default_priority(self):
        pq = self.create_priority_queue()
        added_task_index = pq.enqueue(55)
        self.assertEqual(pq.queue, [{ "value": 55, "priority": 0 }])
        self.assertEqual(added_task_index, 0)

    def test_enqueues_first_task_with_custom_priority(self):
        pq = self.create_priority_queue()
        added_task_index = pq.enqueue(55, pq.priority_high)
        self.assertEqual(pq.queue, [{ "value": 55, "priority": pq.priority_high }])
        self.assertEqual(added_task_index, 0)

    def test_enqueues_in_correct_order_and_bubbles_up(self):
        pq = self.create_priority_queue()
        values = [
            [41, pq.priority_low],
            [39, pq.priority_high],
            [33, pq.priority_medium],
            [18, pq.priority_high],
            [27, pq.priority_medium],
            [12, pq.priority_medium],
        ]

        for v in values:
            value, priority = v
            added_task_index = pq.enqueue(value, priority)
            self.assertEqual(pq.queue[added_task_index], { "value": value, "priority": priority })

        self.assertEqual(pq.queue, [
            { "value": 39, "priority": 2 },
            { "value": 18, "priority": 2 },
            { "value": 33, "priority": 1 },
            { "value": 41, "priority": 0 },
            { "value": 27, "priority": 1 },
            { "value": 12, "priority": 1 },
        ])

    def test_dequeues_and_bubbles_down(self):
        pq = self.create_priority_queue()
        values = [
            [41, pq.priority_low],
            [39, pq.priority_high],
            [33, pq.priority_medium],
            [18, pq.priority_high],
            [27, pq.priority_medium],
            [12, pq.priority_medium],
        ]

        for v in values:
            value, priority = v
            pq.enqueue(value, priority)

        dequeued_task = pq.dequeue()
        self.assertEqual(dequeued_task, { "value": 39, "priority": 2 })
        self.assertEqual(pq.queue, [
            { "value": 18, "priority": 2 },
            { "value": 12, "priority": 1 },
            { "value": 33, "priority": 1 },
            { "value": 41, "priority": 0 },
            { "value": 27, "priority": 1 },
        ])

if __name__ == "__main__":
    unittest.main()