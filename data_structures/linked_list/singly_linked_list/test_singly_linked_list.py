import unittest
from singly_linked_list import Node, SinglyLinkedList


class TestNode(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that a new Node has been instantiated
        """
        node = Node(1)
        self.assertIsInstance(node, Node)

    def test_insert_after(self):
        """
        Tests that a new Node with the inputted value
        has been inserted after this one.
        """
        node = Node("testing1")
        node.insert_after("testing2")
        self.assertEqual(node.next.value, "testing2")
        node.insert_after("testing3")
        self.assertEqual(node.next.value, "testing3")
        self.assertEqual(node.next.next.value, "testing2")

    def test_delete(self):
        """
        Tests that the Node reference pointer has been
        deleted.
        """
        node = Node(1)
        node.insert_after(2)
        self.assertEqual(node.next.value, 2)
        node.delete()
        self.assertEqual(node.next, None)


class TestSinglyLinkedList(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that a new SinglyLinkedList has been
        instantiated.
        """
        sll = SinglyLinkedList()
        self.assertIsInstance(sll, SinglyLinkedList)

    def test_length(self):
        """
        Tests that the correct length of the list is
        returned.
        """
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head(2)
        sll.add_to_head(3)
        length = len(sll)
        self.assertEqual(length, 3)

    def test_add_to_head(self):
        """
        Tests that a new Node has been added to the
        head of the list.
        """
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head(2)
        self.assertEqual(sll.head.value, 2)
        sll.add_to_head(3)
        self.assertEqual(sll.head.value, 3)
        self.assertEqual(len(sll), 3)

    def test_remove_from_head(self):
        """
        Tests that Node has been removed from the
        head of the list.
        """
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head(2)
        self.assertEqual(sll.head.value, 2)
        sll.remove_from_head()
        self.assertEqual(sll.head.value, 1)
        self.assertEqual(len(sll), 1)

    def test_add_to_tail(self):
        """
        Tests that a new Node has been added to
        the tail of the list.
        """
        def get_tail_val(list):
            currentNode = list.head
            while currentNode.next:
                currentNode = currentNode.next
            return currentNode.value
        sll = SinglyLinkedList()
        sll.add_to_tail(1)
        sll.add_to_tail(2)
        self.assertEqual(get_tail_val(sll), 2)
        sll.add_to_tail(90)
        self.assertEqual(get_tail_val(sll), 90)
        self.assertEqual(len(sll), 3)

    def test_remove_from_tail(self):
        """
        Tests that a Node has been removed from the
        tail of the list.
        """
        def get_tail_val(list):
            currentNode = list.head
            while currentNode.next:
                currentNode = currentNode.next
            return currentNode.value
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head(2)
        sll.add_to_head(3)
        sll.add_to_head(4)
        sll.add_to_head(5)
        sll.add_to_head(6)
        sll.add_to_head(7)
        sll.add_to_head(8)
        sll.add_to_head(9)
        sll.add_to_head(10)
        sll.remove_from_tail()
        self.assertEqual(get_tail_val(sll), 2)
        self.assertEqual(len(sll), 9)

    def test_move_to_front(self):
        """
        Tests that a Node has been moved to the front
        of the list.
        """
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head("testing")
        node = sll.head
        sll.add_to_head(5)
        sll.move_to_front(node)
        self.assertEqual(sll.head.value, "testing")
        self.assertEqual(len(sll), 3)

    def test_move_to_end(self):
        """
        Tests that a Node has been moved to the end of
        the list.
        """
        def get_tail_val(list):
            currentNode = list.head
            while currentNode.next:
                currentNode = currentNode.next
            return currentNode.value
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head(2)
        sll.add_to_head("testing")
        node = sll.head
        sll.add_to_head(3)
        sll.move_to_end(node)
        self.assertEqual(get_tail_val(sll), "testing")
        self.assertEqual(len(sll), 4)

    def test_delete(self):
        """
        Tests that a Node has been deleted from the
        list.
        """
        def search_for_val(list, val):
            currentNode = list.head
            found_val = None
            while currentNode.next:
                if currentNode.value == val:
                    found_val = currentNode.value
                currentNode = currentNode.next
            return found_val
        sll = SinglyLinkedList()
        sll.add_to_head(1)
        sll.add_to_head(2)
        sll.add_to_head(3)
        sll.add_to_head(4)
        sll.add_to_head(5)
        node = sll.head
        sll.add_to_head(6)
        sll.add_to_head(7)
        sll.add_to_head(8)
        sll.add_to_head(9)
        sll.add_to_head(10)
        sll.delete(node)
        self.assertEqual(search_for_val(sll, node.value), None)

    def test_get_max(self):
        """
        Tests that the maximum value in the list is
        returned.
        """
        sll = SinglyLinkedList()
        sll.add_to_head(3)
        sll.add_to_tail(9)
        sll.add_to_head(10)
        sll.add_to_head(4)
        max_val = sll.get_max()
        self.assertEqual(max_val, 10)


if __name__ == "__main__":
    unittest.main()
