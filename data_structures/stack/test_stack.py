from stack import Stack
import unittest


class TestStack(unittest.TestCase):
    def test_instantiates(self):
        """
        Instantiates a new version of the 
        """
        stack = Stack()
        self.assertIsInstance(stack, Stack)

    def test_instantiates_empty_default(self):
        """
        Instantiates with an empty stack as the default
        """
        stack = Stack()
        result = stack._stack
        self.assertEqual(result, [])

    def test_instantiates_with_value(self):
        """
        Instantiates with an initial value if one is given
        """
        stack = Stack("test")
        result = stack._stack
        self.assertEqual(result, ["test"])

    def test_initial_length_0(self):
        """
        Returns 0 length if no values have been added to the
        Stack
        """
        stack = Stack()
        result = stack.length()
        self.assertEqual(result, 0)

    def test_returns_correct_length(self):
        """
        Returns the correct current length of the Stack
        """
        stack = Stack(1)
        result = stack.length()
        self.assertEqual(result, 1)

    def test_push_value(self):
        """
        Pushes a value to the top of the Stack
        """
        stack = Stack(1)
        stack.push(2)
        result = stack._stack[stack.length() - 1]
        self.assertEqual(result, 2)

    def test_pop_value(self):
        """
        Pops the top value off the top of the Stack
        """
        stack = Stack(1)
        stack.push(2)
        stack.push(3)
        popped_value = stack.pop()
        ending_length = stack.length()
        result = stack._stack[stack.length() - 1]
        self.assertEqual(popped_value, 3)
        self.assertEqual(ending_length, 2)
        self.assertEqual(result, 2)

    def test_get_values_empty_list(self):
        """
        Returns an empty list if no values have been added
        to the Stack
        """
        stack = Stack()
        result = stack.get_values()
        self.assertEqual(result, [])

    def test_get_all_values(self):
        """
        Returns a list of all values inside of the Stack
        """
        stack = Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        result = stack.get_values()
        self.assertEqual(result, [1, 2, 3, 4])


if __name__ == "__main__":
    unittest.main()
