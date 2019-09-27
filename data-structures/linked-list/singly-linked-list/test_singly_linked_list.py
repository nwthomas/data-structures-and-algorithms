import unittest
from singly_linked_list import Node, SinglyLinkedList


class TestNode(unittest.TestCase):
    def test_instantiation(self):
        """
        Tests that a new Node has been instantiated
        """
        node = Node(1)
        self.assertIsInstance(node, Node)

    def test_insert_after(self, value):
        """
        Tests that a new Node with the inputted value
        has been inserted after this one.
        """
        pass

    def test_delete(self):
        """
        Tests that the Node reference pointer has been
        deleted.
        """
        pass


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
        pass

    def test_add_to_head(self):
        """
        Tests that a new Node has been added to the
        head of the list.
        """
        pass

    def test_remove_from_head(self):
        """
        Tests that Node has been removed from the
        head of the list.
        """
        pass

    def test_add_to_tail(self):
        """
        Tests that a new Node has been added to
        the tail of the list.
        """
        pass

    def test_remove_from_tail(self):
        """
        Tests that a Node has been removed from the
        tail of the list.
        """
        pass

    def test_move_to_front(self):
        """
        Tests that a Node has been moved to the front
        of the list.
        """
        pass

    def test_move_to_end(self):
        """
        Tests that a Node has been moved to the end of
        the list.
        """
        pass

    def test_delete(self):
        """
        Tests that a Node has been deleted from the
        list.
        """
        pass

    def test_get_max(self):
        """
        Tests that the maximum value in the list is
        returned.
        """
        pass


if __name__ == "__main__":
    unittest.main()
