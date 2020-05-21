const { Graph, Node } = require('./graph.js');

describe('Graph Data Structure', () => {
  describe('Node Class', () => {
    test('instantiates', () => {
      const node = new Node(1);
      expect(node instanceof Node).toBeTruthy();
    });
  });

  describe('Graph Class', () => {
    test('instantiates', () => {
      const graph = new Graph();
      expect(graph instanceof Graph).toBeTruthy();
    });

    test('adds a single value to the Graph', () => {
      const graph = new Graph();
      graph.addNode(1);
      expect(graph.length).toBe(1);
    });

    test('adds an array of values to the Graph', () => {
      const graph = new Graph();
      graph.addNode([7, 234, 6, 123, 90]);
      expect(graph.length).toBe(5);
    });
  });
});
