<h1 align="center"><img src="assets/readme_header.png" /></h1>
<h4 align="center">A collection of data structures and algorithms implemented in Python and JavaScript.</h4>
<br>

## PURPOSE

This repository is my personal collection of data structures and algorithms written in [Python](https://www.python.org/) and [JavaScript](https://www.ecma-international.org/). I will be updating this repository in the future to include interpretations of the algorithms in other languages.

## TABLE OF CONTENTS

<!-- prettier-ignore -->
- [Big O Complexity](#big-o-complexity)
- [What is an Algorithm?](#what-is-an-algorithm)
- [What is a Data Structure?](#what-is-a-data-structure)
- [Algorithms](algorithms/)
  - [Search Algorithms](algorithms/search_algorithms)
  - [Binary Search](algorithms/search_algorithms/binary_search)
  - [Breadth-First Search](algorithms/search_algorithms/breadth_first_search)
  - [Sort Algorithms](algorithms/sort_algorithms)
    - [Bubble Sort](algorithms/sort_algorithms/bubble_sort)
    - [Counting Sort](algorithms/sort_algorithms/counting_sort)
    - [Insertion Sort](algorithms/sort_algorithms/insertion_sort)
    - [Merge Sort](algorithms/sort_algorithms/merge_sort)
    - [Quick Sort](algorithms/sort_algorithms/quick_sort)
    - [Radix Sort](algorithms/sort_algorithms/radix_sort)
    - [Selection Sort](algorithms/sort_algorithms/selection_sort)
- [Data Structures](data_structures)
  - [Cache](data_structures/cache)
    - [Least Recently Used](data_structures/cache/least_recently_used)
    - [Ring Buffer](data_structures/cache/ring_buffer)
  - [Graph](data_structures/graph) 🚧 Under Construction 🚧
  - [Heap](data_structures/heap) 🚧 Under Construction 🚧
    - [Binary Heap](data_structures/heap/max_binary_heap)
  - [Linked List](data_structures/linked_list)
    - [Singly-Linked List](data_structures/linked_list/singly_linked_list)
    - [Doubly-Linked List](data_structures/linked_list/doubly_linked_list)
  - [Queue](data_structures/queue)
  - [Stack](data_structures/stack)
  - [Tree](data_structures/tree)
    - [Binary Search Tree](data_structures/tree/binary_search_tree)
      - [Breadth-First Search](tree/breadth_first_search)
      - [Depth-First Search Pre-Order](data_structures/tree/depth_first_search_pre_order)
      - [Depth-First Search Post-Order](data_structures/tree/depth_first_search_post_order)
      - [Depth-First Seach In-Order](data_structures/tree/depth_first_search_in_order)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## BIG O COMPLEXITY

Big O notation helps us evaluate decisions between multiple implementations of the same function. It helps us decide, _"Which way is best?"_

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. We don't care about the details, only the broad trends. When we talk about Big O, we're typically talking about the worst case scenario runtime for the algorithm.

For instance, here's a function called `addUpTo()` with a runtime of `O(1)`:

```py
def add_up_to(num):
  return ((num * (num + 1)) / 2)
```

This is because the num is a constant. No matter how big the number, it will always take the same amount of complexity to run the function.

There are two variations of `Big O`:

1. Time Complexity
2. Space Complexity

`Time Complexity` is used to measure the efficienty of operations in the code, while `Space Complexity` is used to indicate the amount of memory efficiency the code has.

Here's a graph that compares various common `Big O` curves:

<div align="center"><img alt="Big O Notation chart" src="./assets/big_o_complexity_chart.png"/></div>

## WHAT IS AN ALGORITHM?

An "[algorithm](https://en.wikipedia.org/wiki/Algorithm) is an unambiguous specification of how to solve a class of problems. Algorithms can perform calculation, data processing, and automated reasoning tasks." In this respect, algorithms govern much of what computer scientists, data scientists, and machine learning scientists do, as the algorithms built define and interpret the data needing to be parsed or calculated.

## WHAT IS A DATA STRUCTURE?

A [data structure](https://en.wikipedia.org/wiki/Data_structure) "allows data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationship among them, and the functions or operations that can be applied to the data."

## Author

- [**Nathan Thomas**](https://github.com/nwthomas)

## ACKNOWLEDGEMENTS

- Thanks [Beej Jorgenson](https://github.com/beejjorgensen) for being a _boss_ of a computer science instructor at [Lambda School](https://lambdaschool.com/). You make things simple, easy, and understandable. That's the highest praise I could ever give someone teaching a complicated topic like CS.
- Thank you to [Brad Fukumoto](https://github.com/br80). You're so knowledgeable, but you're also super approachable as a teacher; your passion for teaching shines through. Also, you have _boss_-level hobbies.
- To [Sean Chen](https://github.com/seanchen1991), your skills are honestly off-the-rails. I have learned so much from watching you work. Thank you!
- To [Brian Doyle](https://github.com/briandoyle81), thanks for being a friendly and knowledgeable CS instructor. You came in at the hardest point of CS and somehow made it great. Thank you!
- Huge thanks to [Byron Homes](https://github.com/byronholmes2018) for getting me excited about data structures and algorithms. You're awesome and a genius.
- Thanks to [Frank Faustino](https://github.com/frankfaustino) for inspiring me to create, build, and make my own data structures and algorithms repository. Your own journey has inspired my own.
- Thanks to Aditya Bhargava, the author of [Grokking Algorithms](https://smile.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230/ref=sr_1_2?ie=UTF8&qid=1544921791&sr=8-2&keywords=grokking+algorithm). You inspired me to learn this stuff and start documenting it for ease of later use.
- Thanks to [bigocheatsheet.com](https://www.bigocheatsheet.com/) for your useful descriptions of Big O Notation and graphs that I have used in this `README`.
