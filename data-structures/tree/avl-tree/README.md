# GEORGY ADELSON-VELSKY AND EVGENII LANDIS TREE (AVL TREE) 🌴

An `AVL Tree` is a balanced `Binary Search Tree`. This means that an `AVL Tree` is always a valid `Binary Search Tree`, but a valid `Binary Search Tree` is _not_ always a valid `AVL Tree`.

An `AVL Tree` allows us to avoid the worst-case performance of a `Binary Search Tree` (where you insert a sorted `array`/`list` into it) of `O(n)`, and balances the `tree` out so that all branches are more equal.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Data Structure Description](#data-structure-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](avlTree.js)
- [Python](avl_tree.py)

## TYPE

An `AVL Tree` is a `tree` data structure type. It encorporates `nodes` that have `branches` extending out in multiple directions. A `node` that has no branches is called a `leaf`.

## DATA STRUCTURE DESCRIPTION

An `AVL Tree` is a balance `Binary Search Tree`. As such, it is a `tree` data structure. The difference between an `AVL Tree` and a `Binary Search Tree` is that an `AVL Tree` is highly balanced and has the ability to re-balance itself on inserts and deletes.

## SPACE AND TIME COMPLEXITY

In all orders of operation, an `AVL Tree` has the time complexity of `O(log(n))`. This is great, as consistent and guaranteed performance is a beautiful thing in computer science.

The space complexity for an `AVL Tree` is `O(n)`.
