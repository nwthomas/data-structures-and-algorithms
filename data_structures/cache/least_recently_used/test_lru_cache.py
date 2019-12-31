from lru_cache import Node, LRUCache
import unittest


class TestNode(unittest.TestCase):
    def test_instantiates(self):
        """
        Instantiates a new version of Node
        """
        node = Node()
        self.assertIsInstance(node, Node)

    def test_instantiates_with_default_none(self):
        """
        Instantiates with None as default value
        """
        node = Node()
        result = node._value
        self.assertEqual(result, None)

    def test_get_value_returns_default_none(self):
        """
        Returns None if no value has been assigned yet
        """
        node = Node()
        result = node.get_value()
        self.assertEqual(result, None)

    def test_returns_value_of_node(self):
        """
        Returns the value of the node that has been assigned
        """
        node = Node("test")
        result = node.get_value()
        self.assertEqual(result, "test")

    def test_delete_returns_value(self):
        """
        Returns the value of the deleted node
        """
        node = Node("test")
        result = node.delete()
        self.assertEqual(result, "test")

    def test_delete_removes_previous_next_ref(self):
        """
        Removes the reference to the previous and next nodes
        when deleted
        """
        node = Node("test")
        node._next = Node("next")
        node._previous = Node("previous")
        node.delete()
        self.assertEqual(node._next, None)
        self.assertEqual(node._previous, None)

    def test_sets_previous_and_next_node_to_each_other(self):
        """
        Sets the previous and next node's references to each other
        """
        node = Node("middle")
        next = Node("next")
        previous = Node("previous")
        node._next = next
        node._previous = previous
        node.delete()
        self.assertEqual(next._previous, previous)
        self.assertEqual(previous._next, next)


class TestLRUCache(unittest.TestCase):
    def test_instantiates(self):
        """
        Instantiates a new version of LRUCache
        """
        cache = LRUCache()
        self.assertIsInstance(cache, LRUCache)

    def test_records_max_size(self):
        """
        Records the correct max size of the cache
        """
        cache = LRUCache(10)
        result = cache._max_size
        self.assertEqual(result, 10)

    def test_instantiates_with_none_as_default(self):
        """
        Instantiates with null as default initial values
        for front and back
        """
        cache = LRUCache(100)
        front_value = cache._front
        back_value = cache._back
        self.assertEqual(front_value, None)
        self.assertEqual(back_value, None)

    def test_instantiates_with_initial_value(self):
        """
        Instantiates with an initial value if a second
        argument is given
        """
        cache = LRUCache(10, "test")
        front_value = cache._front.get_value()
        back_value = cache._back.get_value()
        self.assertEqual(front_value, "test")
        self.assertEqual(back_value, "test")

    def test_length_returns_0(self):
        """
        Returns 0 if no values have been added
        """
        cache = LRUCache(10)
        result = cache.length()
        self.assertEqual(result, 0)

    def test_returns_correct_length(self):
        """
        Returns the correct length of the cache if
        values have been added
        """
        cache = LRUCache(1234)
        cache.add_value("1")
        cache.add_value("2")
        cache.add_value("3")
        result = cache.length()
        self.assertEqual(result, 3)

    def test_adds_value_to_front_of_cache(self):
        """
        Adds a new value to the front of the cache
        """
        cache = LRUCache(100)
        cache.add_value(1)
        cache.add_value(2)
        front_value = cache._front.get_value()
        back_value = cache._back.get_value()
        self.assertEqual(front_value, 2)
        self.assertEqual(back_value, 1)

    def test_removes_value_at_back_of_cache(self):
        """
        Removes a value at the back of the cache if the max
        size has been reached
        """
        cache = LRUCache(5)
        for i in range(0, 6):
            cache.add_value(i)
        result = cache._back.get_value()
        self.assertEqual(result, 1)

    def test_accesses_value_and_moves_to_front(self):
        """
        Moves a value to the front of the cache if it's
        accessed
        """
        cache = LRUCache(10, "first")
        cache.add_value("second")
        cache.add_value("third")
        cache.access_value("first")
        front_value = cache._front.get_value()
        back_value = cache._back.get_value()
        self.assertEqual(front_value, "first")
        self.assertEqual(back_value, "second")

    def test_returns_true_if_value_found(self):
        """
        Returns True if the value is found in the cache
        """
        cache = LRUCache(100)
        cache.add_value("test")
        result = cache.access_value("test")
        self.assertEqual(result, True)

    def test_returns_false_if_value_not_found(self):
        """
        Returns False if the value is not found in the
        cache
        """
        cache = LRUCache(100)
        cache.add_value("test")
        result = cache.access_value("this value cannot be found")
        self.assertEqual(result, False)

    def test_delete_sets_front_and_back_to_none(self):
        """
        Sets front and back references to None
        """
        cache = LRUCache(100)
        cache.add_value(1)
        cache.delete_value(1)
        front_value = cache._front
        back_value = cache._back
        self.assertEqual(front_value, None)
        self.assertEqual(back_value, None)

    def test_returns_true_if_deleted(self):
        """
        Returns True if the value has been deleted
        from the cache
        """
        cache = LRUCache(100)
        cache.add_value(1)
        result = cache.delete_value(1)
        self.assertEqual(result, True)

    def test_returns_false_if_not_deleted(self):
        """
        Returns False if the value is not deleted
        or cannot be found in the cache
        """
        cache = LRUCache(10)
        result = cache.delete_value(1)
        self.assertEqual(result, False)

    def test_delete_updates_length(self):
        """
        Updates the correct length of the cache
        """
        cache = LRUCache(10)
        cache.add_value(1)
        before_delete = cache.length()
        cache.delete_value(1)
        after_delete = cache.length()
        self.assertEqual(before_delete, 1)
        self.assertEqual(after_delete, 0)

    def test_sets_new_back_correctly(self):
        """
        Sets the new back of the cache correctly
        when deleting the back value
        """
        cache = LRUCache(10)
        cache.add_value(1)
        cache.add_value(2)
        cache.add_value(3)
        cache.delete_value(1)
        result = cache._back.get_value()
        self.assertEqual(result, 2)

    def test_sets_new_front_correctly(self):
        """
        Sets the new front of the cache correctly
        when deleting the front value
        """
        cache = LRUCache(10)
        cache.add_value(1)
        cache.add_value(2)
        cache.add_value(3)
        cache.delete_value(3)
        result = cache._front.get_value()
        self.assertEqual(result, 2)


if __name__ == "__main__":
    unittest.main()
