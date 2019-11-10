def binary_search(list, target):
    # Short-circuit evaluation if the list length is 0
    if len(list) == 0:
        return -1
    # Define starting placements for low and high selections
    low = 0
    high = len(list) - 1
    # While loop runs until low is lower than (or equal to) high
    while low <= high:
        # Defines mid-point guess using floor division
        guess = (low + high) // 2
        # Control flow of guesses
        if list[guess] == target:
            # If the item is found, return index of item
            return guess
        elif list[guess] > target:
            # Move high point if target is lower than current guess
            high = guess - 1
        else:
            # Move low point if target is higher than current guess
            low = guess + 1
    # Returns -1 if the item is not found
    return -1
