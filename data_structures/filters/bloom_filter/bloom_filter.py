"""
Placeholder
"""


class BloomFilter:
    """
    Placeholder
    """

    def __init__(self, size=100):
        self.size = size
        self.bit_array = [0 for i in range(size)]
        self.hash_functions = [
            lambda a: self.hash(a, 17),
            lambda a: self.hash(a, 31),
            lambda a: self.hash(a, 37)
        ]

    def hash(self, string, seed):
        """
        Placeholder
        """
        hash_value = 0
        for i in enumerate(string):
            hash_value = (hash * seed) + ord(string[i])
            hash_value = hash % self.size

        return hash_value

    def add(self, item):
        """
        Placeholder
        """
        for fn in self.hash_functions:
            index = fn(item)
            self.bit_array[index] = 1

    def contains(self, item):
        """
        Placeholder
        """
        for fn in self.hash_functions:
            index = fn(item)

            if self.bit_array[index] == 0:
                return False

        return True
