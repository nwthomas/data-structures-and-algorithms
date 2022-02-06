# DEPTH-FIRST SEARCH PRE-ORDER 🔍

This searching process searching in a depth-first search pre-order pattern across a `tree` data structure.

This means that the search will go deep on the set of nodes traversing down the lefthand side on each tree branch until hitting a dead end. It will then backtrack to the last right node point on the branch and search down, repeating this pattern until the entire tree has been searched.

## TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
  - [IMPLEMENTATIONS](#implementations)
  - [TYPE](#type)
  - [DATA STRUCTURE DESCRIPTION](#data-structure-description)
  - [SPACE AND TIME COMPLEXITY](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](depthFirstSearchPreOrder.js)

## TYPE

While not technically a data strucure all on its own, this is merely a manner of searching through any sort of `tree` for a certain value.

## DATA STRUCTURE DESCRIPTION

See above [Type](#type) section.

## SPACE AND TIME COMPLEXITY

The runtime complexity for a depth-first search algorithm is `O(n)` where `n = number of nodes`. The space complexity can vary depending on needs, but could potentially be `O(n)` where `n = number of nodes`.
