# DEPTH-FIRST SEARCH POST-ORDER 🕵🏻‍♂️

This searching process searching in a depth-first search post-order pattern across a `tree` data structure.

This means that the search will go deep on the set of nodes traversing down the lefthand side on each tree branch before searching the righthand side with the caveat that values are not "checked" for each node until its sub-nodes (left and right) are searched.

## TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
  - [IMPLEMENTATIONS](#implementations)
  - [TYPE](#type)
  - [DATA STRUCTURE DESCRIPTION](#data-structure-description)
  - [SPACE AND TIME COMPLEXITY](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](depthFirstSearchPostOrder.js)

## TYPE

While not technically a data strucure all on its own, this is merely a manner of searching through any sort of `tree` for a certain value.

## DATA STRUCTURE DESCRIPTION

See above [Type](#type) section.

## SPACE AND TIME COMPLEXITY

The runtime complexity for a depth-first search algorithm is `O(n)` where `n = number of nodes`. The space complexity can vary depending on implementation, but could potentially be `O(n)` where `n = number of nodes`.
