def merge(listA, listB):
    # Defines length of both sub-lists
    elements = len(listA) + len(listB)
    merged_list = []
    # Control flow for different outcomes
    for i in range(elements):
        if len(listA) == 0:
            merged_list.append(listB[0])
            listB = listB[1:]
        elif len(listB) == 0:
            merged_list.append(listA[0])
            listA = listA[1:]
        elif listA[0] < listB[0]:
            merged_list.append(listA[0])
            listA = listA[1:]
        else:
            merged_list.append(listB[0])
            listB = listB[1:]
    # Returns merged list at end of function call
    return merged_list


def merge_sort(list):
    # Returns list if the list is length of 1
    if len(list) <= 1:
        return list
    else:
        # Defines a pivot and then recursively calls merge_sort while merging the two halves
        pivot_index = len(list) // 2
        left = list[:pivot_index]
        right = list[pivot_index:]
        return merge(merge_sort(left), merge_sort(right))
