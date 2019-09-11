def selection_sort(l):
    # Outer loop for iterating until second to last index in list
    for i in range(len(l)):
        # Track least index position
        least = i
        # Inner loop to handle checking every item for lower number
        for j in range(i + 1, len(l)):
            # Set least to lowest index if found
            if l[j] < l[least]:
                least = j
        # Swap least index with current index if found
        if least is not i:
            l[i], l[least] = l[least], l[i]
    # Return sorted list
    return l
