def insertion_sort(list):
    elements = [*list]  # Makes a new copy of the list
    # Loop through all the elements
    for i in range(1, len(elements)):
        j = i
        # Moves back down the list and swaps anything necessary
        # Comparison can easily be modified to compare anything
        while j > 0 and elements[j] < elements[j - 1]:
            # Idiomatic swap of a, b = b, a
            elements[j], elements[j - 1] = elements[j - 1], elements[j]
            j -= 1
    # Returns the new sorted elements list
    return elements
