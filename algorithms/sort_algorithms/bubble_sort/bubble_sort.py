def bubble_sort(arr):
    for i in range(0, len(arr)):
        # Boolean flag to check if current iteration has swapped anything
        swapped = False
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
    return arr
