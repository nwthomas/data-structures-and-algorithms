from lru_cache import Node, LRUCache
import unittest

class TestNode(unittest.TestCase):
    def test_instantiates(self):
        """Instantiates a new version of Node"""
        node = Node()
        self.assertIsInstance(node, Node)

    def test_instantiates_with_default_none(self):
        """Instantiates with None as default value"""
        node = Node()
        self.assertIsNone(node.value)

    def test_stores_value_in_node(self):
        """Instantiates with a value stored in the node"""
        node = Node("test")
        self.assertEqual(node.value, "test")

    def test_stores_key_alongside_value(self):
        """Takes in a value and a key and stores the key"""
        node = Node("test", "key")
        self.assertEqual(node.value, "test")
        self.assertEqual(node.key, "key")

    def test_instantiates_with_none_for_next_and_prev_nodes(self):
        """Instantiates with None as the default value for next and prev nodes"""
        node = Node("test", "key")
        self.assertIsNone(node.prev)
        self.assertIsNone(node.next)

    def test_instantiates_with_next_node(self):
        """Instantiates with next node value"""
        next_node = Node()
        node = Node("test", "key", next_node)
        self.assertEqual(node.next, next_node)

    def test_instantiates_with_prev_node(self):
        """Instantiates with prev node value"""
        prev_node = Node()
        node = Node("test", "key", Node(), prev_node)
        self.assertEqual(node.prev, prev_node)

class TestLRUCache(unittest.TestCase):
    def test_instantiates(self):
        """Instantiates a new version of LRUCache"""
        cache = LRUCache(10)
        self.assertIsInstance(cache, LRUCache)

    def test_instantiates_with_max_size(self):
        """Instantiates with the correct max size of the cache"""
        cache = LRUCache(10)
        self.assertEqual(cache.capacity, 10)

    def test_instantiates_with_none_as_head_default(self):
        """Instantiates with None as head default"""
        cache = LRUCache(1000)
        self.assertIsNone(cache.head)

    def test_instantiates_with_none_as_tail_default(self):
        """Instantiates with None as tail default"""
        cache = LRUCache(1000)
        self.assertIsNone(cache.tail)

    def test_initial_length_returns_zero(self):
        """Returns 0 if no values have been added"""
        cache = LRUCache(1000)
        self.assertEqual(cache.length, 0)

    def test_returns_correct_length(self):
        """Returns correct length of the cahce if values have been added"""
        cache = LRUCache(100)
        cache.put("10", 10)
        cache.put("9", 9)
        cache.put("7", 7)
        cache.put("50", 50)
        self.assertEqual(cache.length, 4)

    def test_adds_value_to_head_of_cache(self):
        """Adds a new value to the head of the cache"""
        cache = LRUCache(1000)
        cache.put("100", 100)
        cache.put("400", 400)
        head_value = cache.head.value
        tail_value = cache.tail.value
        self.assertEqual(head_value, 400)
        self.assertEqual(tail_value, 100)

    def test_removes_value_at_tail_of_cache(self):
        """Removes a value at tail of cache if over capacity"""
        cache = LRUCache(2)
        cache.put("1", 1)
        cache.put("2", 2)
        cache.put("3", 3)
        tail_value = cache.tail.value
        self.assertEqual(tail_value, 2)

    def test_gets_value_and_moves_to_head(self):
        """Gets a value and moves to head of the cache"""
        cache = LRUCache(10)
        cache.put("3", 3)
        cache.put("400", 400)
        cache.put("90", 90)

        accessed_value = cache.get("3")
        self.assertEqual(accessed_value, 3)
        
        head_value = cache.head.value
        self.assertEqual(head_value, 3)

    def test_returns_negative_one_if_not_found(self):
        """Returns -1 if a value is not found in the cache"""
        cache = LRUCache(100000000)
        
        accessed_value = cache.get("100")
        self.assertEqual(accessed_value, -1)

    def test_returns_value_if_deleted(self):
        """Returns the value if the node is deleted successfully"""
        cache = LRUCache(1000)
        cache.put("100", 100)
        cache.put("4", 4)
        cache.put("7", 7)

        deleted_value = cache.delete("100")
        self.assertEqual(deleted_value, 100)

        tail_value = cache.tail.value
        self.assertEqual(tail_value, 4)

    def test_returns_negative_one_if_not_deleted(self):
        """Returns -1 if the value does not exist and cannot be deleted"""
        cache = LRUCache(1000)
        
        deleted_value = cache.delete("5")
        self.assertEqual(deleted_value, -1)

    def test_delete_updates_length(self):
        """Updates the correct length of the cache on delete of value"""
        cache = LRUCache(10)
        cache.put("1", 1)

        before_delete_length = cache.length
        self.assertEqual(before_delete_length, 1)

        cache.delete("1")

        after_delete_length = cache.length
        self.assertEqual(after_delete_length, 0)

    def test_sets_new_tail_and_head_correctly_if_length_one(self):
        """Sets new tail correctly when deleting tail"""
        cache = LRUCache(10)
        cache.put("1", 1)
        cache.put("4", 4)

        deleted_value = cache.delete("1")
        self.assertEqual(deleted_value, 1)

        head_value = cache.head.value
        self.assertEqual(head_value, 4)

        tail_value = cache.tail.value
        self.assertEqual(tail_value, 4)

if __name__ == "__main__":
    unittest.main()
