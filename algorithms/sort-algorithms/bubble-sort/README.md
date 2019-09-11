# BUBBLE SORT 🧼

Bubble Sort is an algorithm where the biggest values progressively bubble to the top of the array/list. Because of the amount of loops (nested) that need to be done in order for this to be accomplished, Bubble Sort is quite inefficient and not commonly used.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](bubbleSort.js)
- [Python](bubble_sort.py)

## TYPE

Bubble Sort is a comparison algorithm.

## ALGORITHM DESCRIPTION

1. Loop through your array
   - Compare each element to its neighbor
   - If elements in wrong position (relative to each other, swap them)
2. If no swaps performed, stop. Else, go back to the element at index 0 and repeat step 1.

## SPACE AND TIME COMPLEXITY

Bubble Sort is an _extremely_ inefficient algorithm and has a running time of `O(n^2)`.

Its space complexity is `O(1)`.
