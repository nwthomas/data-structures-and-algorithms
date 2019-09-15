# BINARY SEARCH 🍪

`Binary Search` works by dividing data on a pivot point and comparing the searched-for value against that pivot. It is known for being fairly efficient and a great way to check for values. It's downside is that the data must be sorted in order for it to work properly.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](binarySearch.js)
- [Python](binary_search.py)

## TYPE

`Binary Search` is a divide and conquer algorithm.

## ALGORITHM DESCRIPTION

1. Select a pivot point in the sorted data
2. If searched-for value is less than pivot point, use lower half of data; if greater, use upper half.
3. Continue iterating or using recursion to divide and check data until the searched-for value is found.

## SPACE AND TIME COMPLEXITY

`Binary Search` has a worst-case performance of `O(log n)`. This is actually very efficient, and it makes this algorithm really nice to use in production.

Its space complexity is `O(1)` for iterative code and `O(log(n))` for recursive code.
