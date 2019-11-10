# BINARY SEARCH TREE 🌲

While `arrays`/`lists` have issues with insertion and delete due to allocation of memory, `linked lists` suffer from `O(n)` lookup times. You can sort the data, but every tradeoff comes with some kind of drawback.

However, by using a `Binary Search Tree`, we can achieve superior performance while simultaneously sorting and storing our data. Many databases using data structures like the `Binary Search Tree` under the hood (although their versions are much more complex and balanced).

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Data Structure Description](#data-structure-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](binarySearchTree.js)
- [Python](binary_search_tree.py)

## TYPE

A `Binary Search Tree` is a `tree` data structure. It encorporates `nodes` that have branches extending out in multiple directions. A `node` that has no branches is called a `leaf`.

## DATA STRUCTURE DESCRIPTION

A `Binary Search Tree` is a specialized `tree` data structure. It uses a modified linked list under the hood; unlike a typical `linked list`, its links go `left` and `right`. This is because we are building out a descending, broadening `tree` (in the inverse, actually) that assigns values based on whether or not the current value is lesser or greater than the value of the current `node` we're looking at.

Because we can quickly descend a `Binary Search Tree` and also quickly lookup data, this data structure is quite fast for insertion and lookup times (see below). d

## SPACE AND TIME COMPLEXITY

The time complexity of a `Binary Search Tree` is a best-case of `O(log(n))` but a worst-case (and therefore what we refer to) of `O(n)`. This is because, in the worst possible scenario of inserting a sorted array/list into it, we merely insert a long chain of nodes extending down the righhand side of the tree (which is no better than using a typical `linked list`).

The space complexity of a `Binary Search Tree` is `O(n)`.
