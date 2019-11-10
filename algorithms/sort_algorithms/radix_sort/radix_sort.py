from math import floor, fabs, pow


def flatten(l):
    """
    Concatentates and flattens all numbers together in list of lists
    """
    final = []
    for i in range(0, len(l)):
        if isinstance(l[i], list):
            final = final + flatten(l[i])
        else:
            final.append(l[i])
    return final


def digit_count(num):
    """
    Returns the count of the digits (length) of the number
    """
    return len(f"{num}")


def get_digit(num, i):
    """
    Returns the digit at a specific index counting from the
    right --> left
    """
    return floor(fabs(num) / pow(10, i)) % 10


def most_digits(arr):
    """
    Returns the maximum length of any of the numbers in the list
    """
    length = 0
    for num in arr:
        num_length = len(f"{num}")
        if num_length > length:
            length = num_length
    return length


def setup_list():
    """
    Returns a list of 10 empty lists representing buckets for the
    Radix Sort
    """
    l = [[], [], [], [], [], [], [], [], [], []]
    return l


def radix_sort(l):
    """
    Radix Sort main function
    """
    max_digits = most_digits(l)
    final_list = l
    iterations = 0
    while iterations < max_digits:
        buckets = setup_list()
        for num in final_list:
            digit = get_digit(num, iterations)
            buckets[digit] = buckets[digit] + [num]
        final_list = flatten(buckets)
        iterations = iterations + 1
    return final_list
