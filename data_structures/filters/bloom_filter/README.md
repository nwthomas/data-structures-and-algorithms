# Bloom Filters

Bloom filters are a probabilistic data structure that allows checking if a previous value has been seen. It returns either a firm "no" or a soft "yes," meaning that it might have been seen but the filter is unsure. This is due to the fact that bloom filters work off a bit array that values are hashed to; if there is overlap between several (2+) values with the one you're searching for, bits could be flipped in the bit array and that cause a false positive "yes" to be returned.

If "no" is returned, you can be certain that the value has not been seen yet.

## TABLE OF CONTENTS

-   [Implementations](#implementations)
-   [Type](#type)
-   [Data Structure Description](#data-structure-description)
-   [Space and Time Complexity](#space-and-time-complexity)

## Implementations

-   [JavaScript](bloomFilter.js)
-   [Python](bloom_filter.py)

## Type

A bloom filter is usually composed of a class + a bit array with associated methods to add values and check if a value exists.

## Data Structure Description

Bloom filters are composed of a class and an array of bits (`1`s nd `0`s).

## Space and Time Complexity

Adding to a bloom filter and checking if a value exists are both `O(s)` operations where `s` = the length of the string or value being checked.

This is due to the need to hash the value character by character before checking the bloom filter.

Space complexity will be `O(n)` where `n` is the length of the bit array.
