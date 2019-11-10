# COUNT SORT 🧮

Counting Sort is an integer sorting algorithm. It makes use of an array of index placements to corresponding sorting a complete array/list into their final destinations.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](countingSort.js)
- [Python](counting_sort.py)

## TYPE

Counting Sort is an integer sorting algorithm.

## ALGORITHM DESCRIPTION

1. Generate a tracker array/list with 0s for the range of items
2. Create a final array/list with 0s for placeholders
3. For each number in the array/list, increment the corresponding _index_ positionthat's the same as that number in the tracker array/list
4. For each index position in the tracker, add the value of the previous index position to it
5. For each number in the original array:
   - If the tracker _index_ position is greater than zero, set the final array/list by its index position of the value of the tracker array/list corresponding to an _index_ of the number to that number as the value
   - Decrement the value of the tracker array of the _index_ position of the number

## SPACE AND TIME COMPLEXITY

Counting Sort has a space complexity of `O(n + k)` where `n` is the length of the array and `k` is the range of the input (difference between smallest and largest integers in the array/list).

Space complexity is also `O(n + k)`.
