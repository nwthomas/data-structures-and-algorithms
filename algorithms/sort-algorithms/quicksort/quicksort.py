# Worst-case performance of O(n^2)
# Best-case performance of 0(n log n)


def quicksort(array):
    if len(array) < 2:
        return array  # Base case
    else:
        pivot = array[0]  # Recursive case

        # Sub-array of all the elements less than the pivot
        less = [i for i in array[1:] if i <= pivot]

        # Sub-array of all the elements great than the pivot
        greater = [i for i in array[1:] if i > pivot]

        return quicksort(less) + [pivot] + quicksort(greater)


# Output of [1, 2, 3, 5, 6, 7, 10, 11]
print(quicksort([10, 5, 2, 3, 6, 11, 1, 7]))
