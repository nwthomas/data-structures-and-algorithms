import unittest
from singly_linked_list import Node, SinglyLinkedList


class TestNode(unittest.TestCase):
    def test_instantiation(self):
        node = Node(1)
        self.assertIsInstance(node, Node)


if __name__ == "__main__":
    unittest.main()
