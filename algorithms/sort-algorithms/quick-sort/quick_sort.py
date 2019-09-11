from random import randint


def quick_sort(l):
    if len(l) <= 1:
        return l  # Base case
    else:
        # Selection of pivot point
        pivot = l[randint(0, len(l) - 1)]
        # Sub-l of all the elements less than the pivot and returns it
        less = [i for i in l if i < pivot]
        # Sub-l of all the elements equal to the pivot and returns it
        equal = [i for i in l if i == pivot]
        # Sub-l of all the elements great than the pivot and returns it
        greater = [i for i in l if i > pivot]
        # Returns concatenated recursive lists
        return quick_sort(less) + equal + quick_sort(greater)
