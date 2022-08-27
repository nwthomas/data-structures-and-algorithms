/*
A Trie is a unique tree data structure that is usually used for the efficient storage and retrieval of keys in a dataset of strings.

There are multiple uses for Tries such as autocomplete and spellcheckers.

Tries usually run in O(W * L) where W is the number of words and L is the average length of the words.
*/

class Node {
    constructor(wordTotals = 0, value = null) {
        this.wordTotals = wordTotals;
        this.value = value;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    /**
     * Inserts a new value into the Trie and constructs nodes along the way if needed
     *
     * @param {string} newWord the new word to be added to the Trie
     * @returns {undefined}
     */
    insert(newWord) {
        let current = this.root;
        let wordIndex = 0;

        while (wordIndex < newWord.length) {
            if (!current.children[newWord[wordIndex]]) {
                const newNode = new Node(0, newWord[wordIndex]);
                current.children[newWord[wordIndex]] = newNode;
            }

            current = current.children[newWord[wordIndex]];
            wordIndex += 1;
        }

        current.wordTotals += 1;
    }

    /**
     * Searches for a given word in the Trie by traversing the Trie's nodes
     *
     * @param {string} word The word to search for in the Trie
     * @returns {boolean} true if the word has been found or false otherwise
     */
    search(word) {
        let current = this.root;
        let wordIndex = 0;

        while (wordIndex < word.length) {
            if (!current.children[word[wordIndex]]) {
                return false;
            }

            current = current.children[word[wordIndex]];
            wordIndex += 1;
        }

        return current.wordTotals > 0;
    }

    /**
     * Searches for a given word including wildcard "." characters.
     *
     * @param {string} word The word to search for in the Trie. May include wildcard
     * characters represented by "." which match any character.
     * @returns {boolean} True if the word is found or false otherwise
     */
    searchWithWildcard(word) {
        function depthFirstSearch(index, root) {
            let current = root;

            for (let i = index; i < word.length; i++) {
                const char = word[i];

                if (char === '.') {
                    for (const child in Object.values(current.children)) {
                        if (depthFirstSearch(i + 1, child)) {
                            return true;
                        }

                        return false;
                    }
                } else {
                    if (!current.children[char]) {
                        return false;
                    }

                    current = current.children[char];
                }
            }

            return current.wordTotals > 0;
        }

        return depthFirstSearch(0, word);
    }

    /**
     * Detects if any word is contained in the Trie that starts with a given prefix
     *
     * @param {string} prefix The prefix to search with in the Trie
     * @returns {boolean} true if words exist with the prefix or false otherwise
     */
    startsWith(prefix) {
        let current = this.root;
        let prefixIndex = 0;

        while (prefixIndex < prefix.length) {
            if (!current.children[prefix[prefixIndex]]) {
                return false;
            }

            current = current.children[prefix[prefixIndex]];
            prefixIndex += 1;
        }

        const stack = [current];

        while (stack.length > 0) {
            current = stack.pop();

            if (current.wordTotals > 0) {
                return true;
            }

            for (const key in current.children) {
                stack.push(current.children[key]);
            }
        }

        return false;
    }

    /**
     * Updates an old word to a new word in as efficient a process as possible
     *
     * @param {string} oldWord The word to be updated with the new word
     * @param {string} newWord The word that will be added during the update
     * @returns {undefined}
     */
    update(oldWord, newWord) {
        if (!this.search(oldWord)) {
            return;
        }

        let endingSimilarityIndex = -1;

        for (const char in newWord) {
            if (
                endingSimilarityIndex + 1 < oldWord.length &&
                char === oldWord[endingSimilarityIndex + 1]
            ) {
                endingSimilarityIndex += 1;
            }
        }

        if (endingSimilarityIndex < 1) {
            this.delete(oldWord);
        } else {
            let current = this.root;
            let wordIndex = 0;
            let stack = [current];

            while (wordIndex < oldWord.length) {
                current = current.children[oldWord[wordIndex]];
                stack.push(current);
                wordIndex += 1;
            }

            current.wordTotals -= 1;

            if (Object.keys(current.children).length < 1) {
                stack.pop();

                while (
                    current.wordTotals === 0 &&
                    Object.keys(current.children).length < 2 &&
                    current !== this.root &&
                    wordIndex > endingSimilarityIndex
                ) {
                    current.children = {};
                    current = stack.pop();
                    wordIndex -= 1;
                }

                if (wordIndex < oldWord.length) {
                    delete current.children[oldWord[wordIndex]];
                }
            }
        }

        this.insert(newWord);
    }

    /**
     * Deletes a word within the Trie while not removing any nodes used by other words
     *
     * @param {string} word The word to be removed from the Trie
     * @returns {boolean}
     */
    delete(word) {
        let current = this.root;
        let wordIndex = 0;
        let stack = [current];

        while (wordIndex < word.length) {
            if (!current.children[word[wordIndex]]) {
                return;
            }

            current = current.children[word[wordIndex]];
            stack.push(current);
            wordIndex += 1;
        }

        current.wordTotals -= 1;

        if (Object.keys(current.children).length < 1) {
            stack.pop();

            while (
                current.wordTotals === 0 &&
                Object.keys(current.children).length < 2 &&
                current !== this.root
            ) {
                current.children = {};
                current = stack.pop();
                wordIndex -= 1;
            }

            if (wordIndex < word.length) {
                delete current.children[word[wordIndex]];
            }
        }
    }
}

module.exports = Trie;
