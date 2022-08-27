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
        """Initializes a new Trie with a root node of value None"""
        self.root = Node()

    def insert(self, word: str) -> None:
        """Inserts a new value into the Trie and constructs nodes along the way if needed"""
        current = self.root
        word_index = 0
        
        while word_index < len(word):
            if not word[word_index] in current.children:
                current.children[word[word_index]] = Node(0, word[word_index])
                
            current = current.children[word[word_index]]
            word_index += 1
        
        current.word_totals += 1

    def search(self, word: str) -> bool:
        """Searches for a given word in the Trie by traversing the Trie's nodes"""
        current = self.root
        word_index = 0
        
        while word_index < len(word):
            if not word[word_index] in current.children:
                return False
            
            current = current.children[word[word_index]]
            word_index += 1
            
        return current.word_totals > 0

    def searchWithWildcard(self, word: str) -> bool:
        """Traverses the Trie and finds if a word exists including if wildcard '.' characters are included"""

        def dfs(j, root):
            cur = root
            
            for i in range(j, len(word)):
                c = word[i]
                if c == ".":
                    for child in cur.children.values():
                        if dfs(i + 1, child):
                            return True
                    return False
                else:
                    if c not in cur.children:
                        return False
                    cur = cur.children[c]
            return cur.word_totals > 0
        
        return dfs(0, self.root)

    def startsWith(self, prefix: str) -> bool:
        """Detects if any word is contained in the Trie that starts with a given prefix"""
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

    def update(self, old_word: str, new_word: str) -> None:
        """Updates an old word to a new word in as efficient a process as possible"""
        if not self.search(old_word):
            return

        ending_similarity_index = -1

        for char in new_word:
            if ending_similarity_index + 1 < len(old_word) and char == old_word[ending_similarity_index + 1]:
                ending_similarity_index += 1

        if ending_similarity_index < 1:
            self.delete(old_word)
        else:
            current = self.root
            word_index = 0
            stack = [current]

            while word_index < len(old_word):
                current = current.children[old_word[word_index]]
                stack.append(current)
                word_index += 1

            current.word_totals -= 1

            if len(dict.keys(current.children)) < 1:
                stack.pop()

                while (
                    current.word_totals == 0 and
                    len(dict.keys(current.children)) < 2 and
                    current != self.root and
                    word_index > ending_similarity_index
                ):
                    current.children = {}
                    current = stack.pop()
                    word_index -= 1

                if word_index < len(old_word):
                    del current.children[old_word[word_index]]

        self.insert(new_word)

    def delete(self, word: str) -> None:
        """Deletes a word within the Trie while not removing any nodes used by other words"""
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

        if len(dict.keys(current.children)) < 1:
            stack.pop()

            while current.word_totals == 0 and len(dict.keys(current.children)) < 2 and current != self.root:
                current.children = {}
                current = stack.pop()
                word_index -= 1

            if word_index < len(word):
                del current.children[word[word_index]]