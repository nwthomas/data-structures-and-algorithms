## Priority Queue ➰➰➰➰

Priority queues are either a type of `tree` or an `array`/`list` data structure.

## TABLE OF CONTENTS

- [Table of Contents](#table-of-contents)
  - [Implementations](#implementations)
  - [Type](#type)
  - [Data Structure Description](#data-structure-description)
  - [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATION

- [JavaScript](priorityQueue.js)

## TYPE

A priority queue can be implemented with several data structures; usually, you would use either an array/list or a tree structure.

A tree (with true nodes) might be more efficient, but I've implemented mine using an `array`/`list`.

## DATA STRUCTURE DESCRIPTION

Priority queues are used to house information (like messages/tasks in RabbitMQ) that need to be dequeued and operated on by a server/service worker. They are useful for prioritizing information and addressing that information in a certain order.

## SPACE AND TIME COMPLEXITY

Much like heaps, priority queues really excel at insert and removal. They are `O(log n)` for time complexity. Searching them is `O(n)` because you are not guaranteed to have your nodes in order like in a true binary search tree.

The space complexity is `O(n)` where `n` is the number of nodes.
