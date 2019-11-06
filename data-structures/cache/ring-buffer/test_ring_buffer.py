import unittest
from ring_buffer import Ring_Buffer


class RingBufferTests(unittest.TestCase):
    def setUp(self):
        self.rb = Ring_Buffer(5)

    def test_ring_buffer(self):
        self.assertEqual(len(self.rb.buffer), 5)

        self.rb.append('a')
        self.rb.append('b')
        self.rb.append('c')
        self.rb.append('d')
        self.assertEqual(len(self.rb.buffer), 5)
        self.assertEqual(self.rb.get_buffer(), ['a', 'b', 'c', 'd'])

        self.rb.append('e')
        self.assertEqual(len(self.rb.buffer), 5)
        self.assertEqual(self.rb.get_buffer(), ['a', 'b', 'c', 'd', 'e'])

        self.rb.append('f')
        self.assertEqual(len(self.rb.buffer), 5)
        self.assertEqual(self.rb.get_buffer(), ['f', 'b', 'c', 'd', 'e'])

        self.rb.append('g')
        self.rb.append('h')
        self.rb.append('i')
        self.assertEqual(len(self.rb.buffer), 5)
        self.assertEqual(self.rb.get_buffer(), ['f', 'g', 'h', 'i', 'e'])


if __name__ == '__main__':
    unittest.main()
