# THIS IS A WORK IN PROGRESS AND HAS NOT BEEN FINISHED YET
# Performance O(|E| + |V|log|V|)


def find_smallest_item_node(items):
    smallest_item = float("inf")
    smallest_item_node = None
    processed = []
    for node in items:  # Go through each node
        item = items[node]
        # IF it's the lowest cost so far and hasn't been processed yet
        if item < smallest_item and node not in processed:
            smallest_item = item  # Sets it as the new smallest-item node
            smallest_item_node = node

    return smallest_item_node
