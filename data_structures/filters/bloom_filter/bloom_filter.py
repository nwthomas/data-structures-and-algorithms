"""
A Bloom Filter is a space-efficient probabilistic data structure used to test whether an element
is a member of a set.

It uses multiple hash functions to set bits in a bit array, allowing quick membership checks.

However, it may produce false positives (indicating an element is in the set when it's not) but
never false negatives (indicating an element is not in the set when it is). This makes Bloom
Filters useful for applications where space is limited and some uncertainty is acceptable.
"""


class BloomFilter:
    """
    This class implements a BloomFilter
    """

    def __init__(self, size=100):
        """
        Initializes the Bloom Filter with a specified size and sets up the bit array and hash
        functions.

        Parameters:
        size (int): The size of the bit array. Defaults to 100.
        """
        self.size = size
        self.bit_array = [0 for i in range(size)]
        self.hash_functions = [
            lambda a: self.hash(a, 17),
            lambda a: self.hash(a, 31),
            lambda a: self.hash(a, 37)
        ]

    def hash(self, string, seed):
        """
        Hashes a string using a specified seed and returns the hash value.

        Parameters:
        string (str): The input string to be hashed.
        seed (int): The seed value for the hash function.

        Returns:
        int: The hash value of the input string.
        """
        hash_value = 0
        for i, _ in enumerate(string):
            hash_value = (hash_value * seed) + ord(string[i])
            hash_value = hash_value % self.size

        return hash_value

    def add(self, item):
        """
        Adds an item to the Bloom Filter by setting the bits in the bit array using hash functions.

        Parameters:
        item (str): The item to be added to the Bloom Filter.
        """
        for fn in self.hash_functions:
            index = fn(item)
            self.bit_array[index] = 1

    def contains(self, item):
        """
        Checks if an item is possibly in the Bloom Filter.

        Parameters:
        item (str): The item to be checked.

        Returns:
        bool: True if the item is possibly in the Bloom Filter, False if it is definitely not.
        """
        for fn in self.hash_functions:
            index = fn(item)

            if self.bit_array[index] == 0:
                return False

        return True
