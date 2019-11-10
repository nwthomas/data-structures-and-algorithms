def breadth_first_search(root_node, search_value):
    queue = [root_node]
    while len(queue) > 0:
        node = queue[0]
        if node.value and node.value == search_value:
            return True
        elif node.left is not None or node.right is not None:
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)
            queue = queue[1:]
    return False
