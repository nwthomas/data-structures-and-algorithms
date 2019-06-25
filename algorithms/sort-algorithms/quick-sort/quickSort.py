# Worst-case performance of O(n^2)
# Best-case performance of 0(n log n)


def quickSort(array):
    if len(array) < 2:
        return array  # Base case
    else:
        pivot = array[0]  # Recursive case

        # Sub-array of all the elements less than the pivot
        less = [i for i in array[1:] if i <= pivot]

        # Sub-array of all the elements great than the pivot
        greater = [i for i in array[1:] if i > pivot]

        return quickSort(less) + [pivot] + quickSort(greater)


# Output of [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 19, 20, 35, 47]
print(quickSort([10, 5, 2, 3, 6, 11, 1, 7,
                 16, 17, 19, 20, 15, 12, 8, 9, 47, 35]))

print(quickSort([1, 2, 4, 3, 10, 6, 8, 5]))
