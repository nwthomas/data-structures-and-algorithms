from queue import Queue, Node
import unittest


def create_list(length):
    """
    Creates a new linked list of specified length
    """
    l = None
    for i in range(1, length + 1):
        if l == None:
            l = Node(i)
        else:
            l.add_value(i)
    return l


def create_queue(length):
    """
    Creates a new queue of specified length
    """
    queue = Queue()
    for i in range(1, length + 1):
        queue.add_value(i)
    return queue


class TestNode(unittest.TestCase):
    def test_instantiates(self):
        """
        Instantiates a new version of the Node class
        """
        node = Node("test")
        self.assertIsInstance(node, Node)

    def test_instantiates_with_none_default(self):
        """
        Instantiates with None as default if no value is given
        """
        node = Node()
        result = node.get_value()
        self.assertEqual(result, None)

    def test_instantiates_with_none_next_and_previous(self):
        """
        Instantiates with None as default for next and previous nodes
        if value is given
        """
        node = Node("test")
        next_node = node._next
        previous_node = node._previous
        self.assertEqual(next_node, None)
        self.assertEqual(previous_node, None)

    def test_get_value(self):
        """
        Returns the value of the current node
        """
        node = Node("test value")
        result = node.get_value()
        self.assertEqual(result, "test value")

    def test_get_value_none(self):
        """
        Returns None when get_value is invoked if no value
        was passed to the node when instantiated
        """
        node = Node()
        result = node.get_value()
        self.assertEqual(result, None)

    def test_add_value_to_end(self):
        """
        Adds a new value to the end of the linked list
        """
        node = Node(1)
        node.add_value(2)
        result = node._next.get_value()
        self.assertEqual(result, 2)

    def test_add_to_end_of_long_list(self):
        """
        Adds a value to the end of a longer linked list
        """
        l = create_list(10)
        result = l._next._next._next._next._next._next._next._next._next.get_value()
        self.assertEqual(result, 10)

    def test_delete_and_return_value(self):
        """
        Deletes a node and returns the deleted node's value 
        """
        node = Node(1)
        result = node.delete()
        self.assertEqual(result, 1)

    def test_directs_previous_and_next_to_each_other(self):
        """
        Deletes a node and directs the previous and next nodes
        to each other
        """
        l = create_list(1000)
        deleted_value = l._next._next.delete()
        result = l._next._next.get_value()
        self.assertEqual(deleted_value, 3)
        self.assertEqual(result, 4)


class TestQueue(unittest.TestCase):
    def test_instantiates(self):
        """
        Instantiates a new version of Queue
        """
        queue = Queue()
        self.assertIsInstance(queue, Queue)

    def test_returns_0_length(self):
        """
        Returns 0 when no values have been added to the Queue
        """
        queue = Queue()
        result = queue.length()
        self.assertEqual(result, 0)

    def test_returns_correct_list_length(self):
        """
        Returns the correct length of a long list
        """
        queue = create_queue(100)
        result = queue.length()
        self.assertEqual(result, 100)

    def test_add_value_to_tail_of_list(self):
        """
        Adds a value to the tail of the queue
        """
        queue = Queue()
        queue.add_value(1)
        queue.add_value(2)
        tail_value = queue._tail.get_value()
        head_value = queue._head.get_value()
        self.assertEqual(tail_value, 2)
        self.assertEqual(head_value, 1)

    def test_add_value_preserves_head_and_tail(self):
        """
        Preserves the proper head and tail of the queue
        """
        queue = create_queue(100)
        head_value = queue._head.get_value()
        tail_value = queue._tail.get_value()
        self.assertEqual(head_value, 1)
        self.assertEqual(tail_value, 100)

    def test_adds_to_head_and_tail_if_empty(self):
        """
        Adds the same value to the head and tail if the Queue is
        empty
        """
        queue = Queue()
        queue.add_value("test")
        head_value = queue._head.get_value()
        tail_value = queue._tail.get_value()
        self.assertEqual(head_value, "test")
        self.assertEqual(tail_value, "test")

    def test_delete_removes_value_from_head(self):
        """
        Removes a value from the head of the Queue
        """
        queue = create_queue(1000)
        queue.delete_node()
        head_value = queue._head.get_value()
        self.assertEqual(head_value, 2)

    def test_returns_value_of_deleted_node(self):
        """
        Deletes a node and returns the deleted value
        """
        queue = create_queue(100)
        deleted_value = queue.delete_node()
        self.assertEqual(deleted_value, 1)

    def test_returns_correct_length_after_deleting_node(self):
        """
        Returns the correct length after the delete_node method
        has been invoked
        """
        queue = create_queue(1000)
        for _ in range(10):
            queue.delete_node()
        result = queue.length()
        self.assertEqual(result, 990)


if __name__ == "__main__":
    unittest.main()
