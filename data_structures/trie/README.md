# Trie 🌲

A `Trie` is a unique data structure that operates a bit like a `Tree` but has a multitude of children for every single node. It is often used for the efficient storage and retrieval of keys in a dataset of strings.

A typeical `Trie` will have `insert`, `search`, `remove`, and `update` operations. The one in this repo has also been extended with a `startsWith` method.

## TABLE OF CONTENTS

-   [Implementations](#implementations)
-   [Type](#type)
-   [Data Structure Description](#data-structure-description)
-   [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

-   JavaScript
-   [Python](trie.py)

## TYPE

A `Trie` is a tree-like data structure with a root node and a multitude of children descending from it.

## DATA STRUCTURE DESCRIPTION

A `Trie` data structure is primarily used to store strings and keys within those strings. It is sometimes referred to as a "prefix tree" because of the way that it allows devs to search and sort through string characters in order to find string prefixes.

It consists of a root node which then allows jumping off into any character. Each of these subsequent nodes also have children that could potentially contain the entire possible set of string characters allowed. These will only exist if they've previously been added for a word/prefix.

By descending the `Trie`, you can ascertain whether or not a complete string/prefix has previously been added. If you cannot descend to the final character in the string that you're looking for, the string/prefix does not exist in the `Trie`.

## SPACE AND TIME COMPLEXITY

The time complexity for a `Trie` is `Big O(W * L)` where `W` is the number of words in the `Trie`and`L` is the average length of those words.

The potential space complexity is also `Big O(W * L)`.
