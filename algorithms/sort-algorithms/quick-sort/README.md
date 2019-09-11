# QUICK SORT 🧠

Quick sort, in addition to having an exceptionally clean implementation using recursion, is an example of a `Divide and Conquer` sorting algorithm.

While nice to use, it's not particularly efficient; it has a worst-case running time of `O(n^2)`. It's advisable to use a random number for the pivot guess as this provides maximum random efficiency for the algorithm.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](quickSort.js)
- [Python](quick_sort.py)

## TYPE

Quick Sort is a divide and conquer algorithm.

## ALGORITHM DESCRIPTION

1. Select a pivot. Often times this is the first or last element in a set. It can also be the middle.
2. Move all elements smaller than the pivot to the left.
3. Move all elements greater than the pivot to the right.
4. While LHS and RHS are greater than 1, repeat steps 1-3 on each side.

It is recommended to use:

- Recursion

## SPACE AND TIME COMPLEXITY

While it has the work "quick" in its name, Quick Sort is not used as frequently as Merge Sort. Although it's quite quick in it's best case of `O(n log(n))`, the worst case of `O(n^2)` means that it's typically a bad choice to reach for in production applications.

The recursive solution for Quick Sort has a worst-case space complexity of `O(log(n))`.
