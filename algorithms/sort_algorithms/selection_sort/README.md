# SELECTION SORT 🦁️

Selection Sort relies on the idea of comparing every single item in the array, finding the smallest selection for the current _index_ in the outer loops, and then swapping the two positions. You do not need to compare/look at the last _index_ of the array/list _n_ since that will be, by default, sorted.

Selection Sort is not an efficient algorithm, so its use is limited.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](selectionSort.js)
- [Python](selection_sort.py)

## TYPE

Selection Sort is a comparison algorithm.

## ALGORITHM DESCRIPTION

1. Start with current index = 0

2. For all indices EXCEPT the last index:

   - Loop through elements on right-hand-side
     of current index and find the smallest element

   - Swap the element at current index with the
     smallest element found in above loop

## SPACE AND TIME COMPLEXITY

Selection Sort has a performance in all cases of _O(n^2)_ and _O(n)_ for its swaps.

The space complexity in this implementation is _O(n)_ based on the length of the array or list passed in as an argument.
