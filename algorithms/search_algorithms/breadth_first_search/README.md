# BREADTH-FIRST SEARCH ⏩

`Breadth-First Search` is a searching algorithm that allows us to search a tree of data. It utilizes looking at nodes across a tree one layer at a time (as opposed to following branches all the way to the bottom first).

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](breadthFirstSearch.js)
- [Python](breadth_first_search.py)

## TYPE

`Breadth-First Search` is a traversing algorithm where you should start traversing from a selected node and look at layers of the node tree one layer at a time.

## ALGORITHM DESCRIPTION

1. Start with the root node
2. Descending down one level of nodes at a time:
   View every node in that level
   Push lower nodes to a queue
3. If the item being searched for is not found in the current level, go down one level
4. Repeat until the item is found or all nodes are exhausted

## SPACE AND TIME COMPLEXITY

The `Breadth-First Search` algorithm as a time complexity of `O(|V| + |E|)`. Its space complexity is `O(n)` where `n` is the space taken up by the number of nodes being searched.
