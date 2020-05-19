# DIRECTED CYCLIC GRAPH 📈

A `Directed Cyclic Graph` is a data structure that holds data in a networked fashion through the use of `nodes` (or `vertices`) connected by `edges`.

It is `Directed` in that the directions on the graph have meaning, and it is `Cyclic` which means that you can form a cycle to start on a node on the graph and return to it.

#### EXAMPLE

<div align="center"><img alt="Directed Cyclic Graph Example" src="../../../../assets/directed_cyclic_graph.jpg" /></div>

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Data Structure Description](#data-structure-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](directedCyclicGraph.js)
- [Python](directed_cyclic_graph.py)

## TYPE

A `Directed Cyclic Graph` is a version of a graph.

## DATA STRUCTURE DESCRIPTION

`Directed Cyclic Graph`

This type of data structure is formed by linking together nodes (or vertices) with edges. Graphs are like trees, except that any single node on the tree can connect to any other single node.

All [trees](../../../tree) are graphs, but not all graphs are trees.

## SPACE AND TIME COMPLEXITY

Time complexity for graphs is generally `O(|V| + |E|)`, where `|V|` represents the complete list of nodes and `|E|` represents some given set of edges.

Space complexity is also `O(|V| + |E|)`.
