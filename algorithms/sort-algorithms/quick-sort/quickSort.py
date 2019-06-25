# Worst-case performance of O(n^2)
# Best-case performance of 0(n log n)


def quickSort(array):
    if len(array) <= 1:
        return array  # Base case
    else:
        pivot = array[0]  # Recursive case

        # Sub-array of all the elements less than the pivot and returns it
        less = [i for i in array[1:] if i < pivot]

        # Sub-array of all the elements equal to the pivot and returns it
        equal = [i for i in array if i == pivot]

        # Sub-array of all the elements great than the pivot and returns it
        greater = [i for i in array[1:] if i > pivot]

        return quickSort(less) + equal + quickSort(greater)


# Output of [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 19, 20, 35, 47]
print(quickSort([10, 5, 2, 3, 6, 11, 1, 7,
                 16, 17, 19, 20, 15, 12, 8, 9, 47, 35]))

# Output of [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 8, 10]
print(quickSort([1, 1, 1, 1, 1, 2, 4, 3, 10, 6, 8, 5]))

# Output of [1]
print(quickSort([1]))
