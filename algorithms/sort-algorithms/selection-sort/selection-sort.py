# Worst-case performance of O(n^2) for comparisons and O(n) for swaps
# Best-case performance of 0(n^2) for comparisons and O(n) for swaps


def selection_sort(arr):
    for i in range(0, len(arr) - 1):
        for j in range(i + 1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
    return arr


# Expected return of [1, 2, 3, 4, 5, 6, 9, 10]
print(selection_sort([5, 3, 6, 2, 10, 1, 9, 4]))
