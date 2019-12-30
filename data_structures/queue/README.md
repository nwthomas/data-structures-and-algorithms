# Queue 🎃

A `Queue` is a unique structure that operates on a "first-in, first-out"
priority schedule.

A typical `Queue` will have two basic operations in addition to storing
data, which are adding data to the back of the `Queue` and removing data
from the front of it.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Data Structure Description](#data-structure-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](queue.js)
- [Python](queue.py)

## TYPE

A `Queue` is an abstract data structure and is open at both ends; this allows the free-flow of values through it from one end to the other.

## DATA STRUCTURE DESCRIPTION

A `Queue` is a data structure that stores data in a "first-in, first-out" fashion. In other words, any value stored first in a `Queue` will then be the first value to be removed, followed by the second, etc.

## SPACE AND TIME COMPLEXITY

My implementation of the `Queue` data structure utilizes a `Doubly-Linked List` under the hood, and so its time complexity is `O(1)`.

The space complexity will be dependant on the amount of information held in it, and so it is `O(n)`.
