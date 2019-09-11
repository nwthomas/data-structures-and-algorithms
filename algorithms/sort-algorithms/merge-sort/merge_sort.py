def merge(listA, listB):
    elements = len(listA) + len(listB)
    merged_arr = []
    for i in range(elements):
        if len(listA) == 0:
            merged_arr.append(listB[0])
            listB = listB[1:]
        elif len(listB) == 0:
            merged_arr.append(listA[0])
            listA = listA[1:]
        elif listA[0] < listB[0]:
            merged_arr.append(listA[0])
            listA = listA[1:]
        else:
            merged_arr.append(listB[0])
            listB = listB[1:]
    return merged_arr


def merge_sort(list):
    if len(list) <= 1:
        return list
    else:
        pivot_index = len(list) // 2
        left = list[:pivot_index]
        right = list[pivot_index:]
    return merge(merge_sort(left), merge_sort(right))


if __name__ == "__main__":
    pass
