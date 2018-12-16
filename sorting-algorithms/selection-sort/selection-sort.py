# Worst-case performance of O(n^2) for comparisons and O(n) for swaps
# Best-case performance of 0(n^2) for comparisons and O(n) for swaps


def find_smallest(arr):
    smallest = arr[0]  # Stores the smallest value
    smallest_index = 0  # Stores the index of the smallest value
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = 1
    return smallest_index


def selection_sort(arr):  # Sorts an array
    new_arr = []
    for i in range(len(arr)):
        # Finds the smallest element in array and adds it to new array
        smallest = find_smallest(arr)
        new_arr.append(arr.pop(smallest))
    return new_arr


print(selection_sort([5, 3, 6, 2, 10, 1]))
