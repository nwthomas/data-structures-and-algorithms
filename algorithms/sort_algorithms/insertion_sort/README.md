# INSERTION SORT 🦑

Insertion Sort uses the process of comparisons and looking back over the previously-sorted array/list items in order to progressively sort the lefhand side of the array/list. It is not commonly used in production due to its average and worst-case time complexity of `O(n^2)`.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](insertionSort.js)
- [Python](insertion_sort.py)

## TYPE

Insertion Sort is a comparison algorithm.

## ALGORITHM DESCRIPTION

1. Separate the first element from the rest of the array. Think about it as a sorted list of one element.
2. For all other indices, beginning with [1]:
   - Copy the item at that index into a temp variable
   - Iterate to the left until you find the correct index in the "sorted" part of the array at which this element should be inserted. Shift items over to the right as you iterate.
   - When the correct index is found, copy temp into this position

## SPACE AND TIME COMPLEXITY

Insertion Sort has an average and worst-case time complexity of `O(n^2)`, which makes it extremely inefficient. Under exceptional conditions when an array/list is almost completely sorted, it has a time complexity of `O(n)`.

Its space complexity is `O(1)`.
