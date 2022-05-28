# LEAST RECENTLY USED CACHE 🧞‍♂️

A `Least Recently Used Cache`, or `LRU Cache`, prioritizes the placement of data based on when it was last used. Most recently added or accessed data is placed in the front of the cache, and old data is deleted once the max size of the cache has been reached.

## TABLE OF CONTENTS

- [Implementations](#implementations)
- [Type](#type)
- [Data Structure Description](#data-structure-description)
- [Space and Time Complexity](#space-and-time-complexity)

## IMPLEMENTATIONS

- [JavaScript](lruCache.js)
- [Python](lru_cache.py)

## TYPE

A `LRU Cache`, is part of the cache data structure family. Caches allow us to preserve and memoize data so that we can access it quickly in the future.

## DATA STRUCTURE DESCRIPTION

While implementations may vary, the typical `LRU Cache` always stores data in a fashion that marks recently used or added data at the "front" or "higher priority" than the other values.

## SPACE AND TIME COMPLEXITY

My implementation utilizes a linked list under the hood with references stored by key, and so it has a time complexity of `O(1)` for searches and `O(1)` for additions and deletions.

The space complexity is `O(n)` based on the amount of information stored.
