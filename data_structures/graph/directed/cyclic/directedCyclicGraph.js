class Graph {
  constructor(undirected = false) {
    this.isUndirected = undirected;
    this.nodes = [];
    this.length = 0;
  }

  get length() {
    /**
     * Returns the current length (e.g. number of Nodes) of the Graph
     */
    return this.length;
  }

  addNodes = (value) => {
    /**
     * Adds a new value to the Graph inside a Node class
     */
    this.nodes.push(new Node(value));
    this.length++;
  };

  removeNode = (value) => {
    /**
     * Removes a value and its Node from the Graph and removes any corresponding edges that
     * connect it to another Node in the Graph
     */
    this.nodes.filter((node) => node.value !== value);
    this.nodes.forEach((node) => {
      node.edges.filter((node) => node.value !== value);
    });
    this.length--;
  };

  getNode = (value) => {
    /**
     * Returns an array with any and all Nodes found that satisfy the value parameter
     */
    return this.nodes.filter((node) => node.value === value);
  };

  addEdge = (value1, value2) => {
    /**
     * Adds an edge from the Node containing value1 to the Node containing value 2
     */
    const node1 = this.nodes.find(value1);
    const node2 = this.nodes.find(value2);

    node1.edges.push(node2);

    if (this.isUndirected) {
      node2.edges.push(node1);
    }
  };
}

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

module.exports = {
  Graph,
  Node,
};
