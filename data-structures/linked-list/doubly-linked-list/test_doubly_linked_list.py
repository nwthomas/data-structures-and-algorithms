import unittest
from doubly_linked_list import Node, DoublyLinkedList


class TestNode(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that a new Node has been instantiated
        """
        node = Node(1)
        self.assertIsInstance(node, Node)

    def test_insert_before(self):
        """
        Tests that a Node can add another Node before it
        """
        node = Node(1)
        node.insert_before(2)
        self.assertEqual(2, node.prev.value)

    def test_insert_after(self):
        """
        Tests that a Node can add another Node after it
        """
        node = Node(1)
        node.insert_after(2)
        self.assertEqual(2, node.next.value)

    def test_delete_node(self):
        """
        Tests that a Node can delete itself
        """
        node = Node(1)
        node.insert_after(2)
        next = node.next
        node.insert_before(5)
        prev = node.prev
        node.delete()
        self.assertEqual(next.prev.value, 5)
        self.assertEqual(prev.next.value, 2)


class TestDoublyLinkedList(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that a new DoublyLinkedList has been instantiated
        """
        dll = DoublyLinkedList()
        self.assertIsInstance(dll, DoublyLinkedList)

    def test_length(self):
        """
        Tests that the correct length of the DoublyLinkedList is returned
        """
        dll = DoublyLinkedList()
        dll.add_to_head(1)
        dll.add_to_head(2)
        dll.add_to_head(3)
        self.assertEqual(3, len(dll))

    def test_add_to_head(self):
        """
        Tests that a new Node has been added to the head of the list
        """
        dll = DoublyLinkedList()
        dll.add_to_head(1)
        self.assertEqual(dll.head.value, 1)
        self.assertEqual(dll.tail.value, 1)
        dll.add_to_head(2)
        self.assertEqual(dll.head.value, 2)
        self.assertEqual(dll.tail.value, 1)

    def test_add_to_tail(self):
        """
        Tests that a new Node has been added to the tail of the list
        """
        dll = DoublyLinkedList()
        dll.add_to_tail(1)
        self.assertEqual(dll.head.value, 1)
        self.assertEqual(dll.tail.value, 1)
        dll.add_to_tail(10)
        dll.add_to_tail(7)
        self.assertEqual(dll.head.value, 1)
        self.assertEqual(dll.tail.value, 7)

    def test_move_to_front(self):
        """
        Tests that a Node has been moved to the front of the list
        """
        dll = DoublyLinkedList()
        dll.add_to_head(1)
        node = dll.head
        dll.add_to_head(45)
        dll.add_to_head(9)
        dll.move_to_front(node)
        self.assertEqual(dll.head.value, 1)

    def test_remove_from_head(self):
        """
        Tests that a Node has been removed from the head of the list
        """
        dll = DoublyLinkedList()
        dll.add_to_head(1)
        node = dll.tail
        dll.add_to_tail(45)
        dll.add_to_tail(9)
        dll.move_to_end(node)
        self.assertEqual(dll.tail.value, 1)

    def test_move_to_tail(self):
        """
        Tests that a Node has been moved to the tail of the list
        """
        dll = DoublyLinkedList()
        dll.add_to_head("test1")
        dll.add_to_head("test2")
        dll.add_to_head("test3")
        dll.add_to_head("test4")
        dll.add_to_head("test5")
        dll.remove_from_head()
        self.assertEqual(dll.head.value, "test4")

    def test_remove_from_tail(self):
        """
        Tests that a Node has been removed from the tail of the list
        """
        dll = DoublyLinkedList()
        dll.add_to_tail("test1")
        dll.add_to_tail("test2")
        dll.add_to_tail("test3")
        dll.add_to_tail("test4")
        dll.add_to_tail("test5")
        dll.remove_from_tail()
        self.assertEqual(dll.tail.value, "test4")

    def test_delete(self):
        """
        Tests that a Node has been deleted from the list
        """
        dll = DoublyLinkedList()
        dll.add_to_head(1)
        dll.add_to_head(344)
        dll.add_to_head(7)
        node = dll.head
        dll.add_to_head(3)
        dll.delete(node)
        found_val = False
        current_node = dll.head
        while current_node:
            if current_node.value == 7:
                found_val = True
            current_node = current_node.next
        self.assertEqual(found_val, False)

    def test_get_max(self):
        """
        Tests that the maximum value in the list is returned
        """
        dll = DoublyLinkedList()
        dll.add_to_head(1)
        dll.add_to_head(2)
        dll.add_to_head(3)
        dll.add_to_head(4)
        dll.add_to_head(517625)
        dll.add_to_head(5)
        max_val = dll.get_max()
        self.assertEqual(max_val, 517625)


if __name__ == '__main__':
    unittest.main()
