class Graph:
    def __init__(self, undirected=False):
        self.isUndirected = undirected
        self.nodes = []
        self.length = 0

    def get_length(self):
        """
        Returns the current length (e.g. number of Nodes) of the Graph
        """
        return self.length

    def set_length(self, value):
        """
        Sets a new length (eg.g number of Nodes) of the Graph
        """
        self.length = value

    length = property(get_length, set_length)

    def add_node(self, value):
        """
        Adds a new value to the Graph inside a Node class
        """
        self.nodes.append(Node(value))
        self.length = self.length + 1

    def remove_node(self, value):
        """
        Removes a value and its Node from the Graph and removes any corresponding edges that
        connect it to another Node in the Graph
        """
        self.nodes = [node for node in self.nodes if node.value != value]

        for node in self.nodes:
            node.edges = [node for node in node.edges if node.value != value]

        self.length = self.length - 1

    def get_nodes(self, value):
        """
        Returns an array with any and all Nodes found that satisfy the value parameter
        """
        nodes_list = []

        for node in self.nodes:
            if node.value == value:
                nodes_list.append(node)

        return nodes_list

    def add_edge(self, value1, value2):
        """
        Adds an edge from the Node containing value1 to the Node containing value 2
        """
        node1 = None
        node2 = None

        for node in self.nodes:
            if node.value == value1:
                node1 = node
            elif node.value == value2:
                node2 = value1

        node1.edges.append(node2)

        if self.isUndirected:
            node2.edges.append(node1)


class Node:
    def __init__(self, value):
        self.value = value
        self.edges = []
