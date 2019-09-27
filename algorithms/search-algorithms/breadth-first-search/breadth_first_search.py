def breadthFirst(obj, item):
    queue = []
    key = ""
    for key in obj:
        queue.append(obj[key])  # Initial push of keys to queue array
    while len(queue) > 0:
        value = queue.pop(0)  # Removes each key value from array
        if value == item:
            return True  # Exit condition - If searchTerm is found, return true
        if type(value) == dict:  # If key is object, push key values in object to queue array
            for nestedKey in value:
                queue.append(value[nestedKey])
    return False  # If the searchTerm is not found, return false
