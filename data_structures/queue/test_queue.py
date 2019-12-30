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
    for i in range(0, length + 1):
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


if __name__ == "__main__":
    unittest.main()
