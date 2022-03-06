# MAX BINARY HEAP 📚

Heaps are either a type of `tree` or an `array`/`list` data structure.

## TABLE OF CONTENTS

- [Table of Contents](#table-of-contents)
  - [Implementations](#implementations)
  - [Type](#type)
  - [Data Structure Description](#data-structure-description)
  - [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATION

- [JavaScript](maxBinaryHeap.js)

## TYPE

A heap can be implemented with several data structures; usually, you would use either an array/list or a tree structure.

## DATA STRUCTURE DESCRIPTION

A heap is useful for storing information in an order where you're assured the highest value (or, when used for things like a priority queue, the highest priority) is always the root/top node.

## SPACE AND TIME COMPLEXITY

Heaps really excel at insert and removal. They are `O(log n)` for time complexity. Searching them is `O(n)` because you are not guaranteed to have your nodes in order like in a true binary search tree.

The space complexity is `O(n)` where `n` is the number of nodes.
