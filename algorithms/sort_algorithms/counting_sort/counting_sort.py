def counting_sort(l):
    largest = 0
    for num in l:
        if num < 0:
            return []
        elif num > largest:
            largest = num
    tracker = [0 for i in range(largest + 1)]
    final = [0 for i in range(len(l))]
    for num in l:
        tracker[num] += 1
    for i in range(len(tracker)):
        if i > 0:
            tracker[i] += tracker[i - 1]
    for num in l:
        if tracker[num] > 0:
            final[tracker[num] - 1] = num
            tracker[num] -= 1
    return final
