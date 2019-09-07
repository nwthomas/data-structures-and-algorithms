# Worst case performance of O(n^2) for comparisons and O(n^2) for swaps
# Best case performance of O(n^2) for comparisons and O(1) for swaps


def bubble_sort(arr):
    # Boolean flag to check if current iteration has swapped anything
    swapped = False
    for i in range(0, len(arr)):
        # Loops over every time every time
        for j in range(0, len(arr) - 1):
            # Swap elements if j is lesser than j + 1
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                # Indicate via boolean flag that change has occured
                swapped = True
        # End all loops if not swaps have happend on current iteration
        if not swapped:
            break
        # Else reset boolean flag
        else:
            swapped = False
    return arr


# Expected return of [1, 2, 3, 4, 4, 4, 5, 6, 7, 9]
print(bubble_sort([2, 4, 5, 7, 1, 4, 3, 6, 9, 4]))
