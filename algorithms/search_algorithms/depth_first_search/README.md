# DEPTH-FIRST SEARCH ⏬

`Depth-First Search` is a searching algorithm that allows us to search a tree of data. It utilizes looking at nodes across a tree by descending deep down the tree and then moving sideways to check all other limbs of the tree (depth first).

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](depthFirstSearch.js)
- [Python](depth_first_search.py)

## TYPE

`Depth-First Search` is a traversal algorithm where you should start traversing nodes by depth down a tree before you move across the levels. This results in descending down an entire tree path before checking all other tree paths.

## ALGORITHM DESCRIPTION

1. Start with the root node
2. Descend down an entire limb of the tree, searching nodes along the way
3. If the searched-for value is not found, move to the next limb of the tree and search
4. Repeat this process until the value is found or all nodes are exhausted in the tree

## SPACE AND TIME COMPLEXITY

The `Depth-First Search` algorithm has atime complexity of `O(|V| + |K|)`. Its space complexity is `O(n)` where `n` is the space taken up by the number of nodes being searched.
