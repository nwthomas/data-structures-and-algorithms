# MERGE SORT

Merge sort is based on the principle that an array or list of a single item is sorted. Because of this, merge sort will recursively break down a problem into arrays/lists of single items and then progressively merge the items together in order as the call stack unwinds.

## TABLE OF CONTENTS

- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)
- [Implementations](#implementations)

## TYPE

Merge Sort is a divide and conquer algorithm.

## ALGORITHM DESCRIPTION

1. While your data set contains more than one item, split it in half
2. Once you have gotten down to a single element, you have also _sorted_ that element
   (a single element cannot be "out of order")
3. Start merging your single lists of one element together into larger, sorted sets
4. Repeat step 3 until the entire data set has been reassembled

It is recommended to use:

- A recursive function that handles dividing the array (or subarray) in half
- A helper function that handles merging sorted pieces back together

## SPACE AND TIME COMPLEXITY

In all cases, regardless of how sorted the original data set might be, we have a time complexity of `O(n log(n))`. This is one of the better running times out there for a sorting algorithm, making Merge Sort a great algorithm to know off-hand.

The space complexity will depend on implementation. It will either vary between `O(1)` (for an in-place implementation) to `O(n)` (for when you split the array/list down to single arrays/lists for each item).

## IMPLEMENTATIONS

- [JavaScript](mergeSort.js)
- [Python](merge_sort.py)
