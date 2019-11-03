# RADIX SORT 💯

Radix sort is a specialized sorting algorithm that revolves around a special property of numbers; the radix (or base) of a number is the number of unique digits (including the number 0) that are used to represent numbers in a positional numberic system.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Algorithm Description](#algorithm-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](radixSort.js)
- [Python](radix_sort.py)

## TYPE

Radix Sort is a non-comparison sorting algorithm. It sorts numbers (and only numbers) by distributing numbers into "buckets" according to their radix (base).

## ALGORITHM DESCRIPTION

1. Define helper methods, including (but not limited to):
   Get Digit (to retrieve the current digit we're using)
   Digit Count (returns the largest amount of digits in a number)
   Most Digits (returns the maximum length of any digit in the array)
2. Iterate over the array of numbers `n` times where `n` is the max number of digits in the biggest number.
3. For each iteration, return the current iteration `n` digit of that number (or 0 if it does not exist) and place it into the appropriate "bucket" sub-array in a temp array.
4. Concat all sub-arrays of the temp array together and repeat for the next `n` iteration.

## SPACE AND TIME COMPLEXITY

Radix Sort is one of the most efficient sorting algorithms you can use in common use, but it's limited to numbers as it makes use of the special radix (or base) property of numbers.

Radix Sort has a time complexity of `O(kn)` and a space complexity of `O(kn)`.
