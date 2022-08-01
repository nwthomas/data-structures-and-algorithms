"""
A Trie is a unique tree data structure that is usually used for the efficient storage and retrieval of keys in a dataset of strings.

There are multiple uses for Tries such as autocomplete and spellcheckers.

Tries usually run in O(W * L) where W is the number of words and L is the average length of the words.
"""

class Node:
    def __init__(self, word_totals = 0, value = None):
        self.value = value
        self.children = {}
        self.word_totals = word_totals

class Trie:
    def __init__(self):
       self.root = Node()

    def insert(self, word: str) -> None:
        current = self.root
        word_index = 0
        
        while word_index < len(word):
            if not word[word_index] in current.children:
                current.children[word[word_index]] = Node(0, word[word_index])
                
            current = current.children[word[word_index]]
            word_index += 1
        
        current.word_totals += 1

    def search(self, word: str) -> bool:
        current = self.root
        word_index = 0
        
        while word_index < len(word):
            if not word[word_index] in current.children:
                return False
            
            current = current.children[word[word_index]]
            word_index += 1
            
        return current.word_totals > 0

    def startsWith(self, prefix: str) -> bool:
        current = self.root
        prefix_index = 0
        
        while prefix_index < len(prefix):
            if not prefix[prefix_index] in current.children:
                return False
            
            current = current.children[prefix[prefix_index]]
            prefix_index += 1
            
        stack = [current]
        
        while len(stack) > 0:
            current = stack.pop()
            
            if current.word_totals > 0:
                return True
            
            for child in current.children:
                stack.append(current.children[child])
        
        return False

    def update(self, word: str) -> None:
        pass

    def delete(self, word: str) -> None:
        current = self.root
        word_index = 0
        stack = [current]

        while word_index < len(word):
            if word[word_index] not in current.children:
                return

            current = current.children[word[word_index]]
            stack.append(current)
            word_index += 1

        current.word_totals -= 1
        stack.pop()

        while current.word_totals == 0 and len(dict.keys(current.children)) <= 1:
            current = stack.pop()

        