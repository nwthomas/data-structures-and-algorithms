<h1 align="center"><img src="assets/readme-header.png" /></h1>
<h4 align="center">A collection of data structures and algorithms implemented in Python and JavaScript.</h4>
<br>

## PURPOSE

This repository is my personal collection of data structures and assorted algorithms written in [Python](https://www.python.org/) and [JavaScript](https://www.ecma-international.org/). I will be updating this repository in the future to include interpretations of the algorithms in other languages.

## TABLE OF CONTENTS

- [Big O Complexity](#big-o-complexity)
- [What is an Algorithm?](#what-is-an-algorithm)
- [What is a Data Structure?](#what-is-a-data-structure)
- [Algorithms](algorithms/)
  - [Search Algorithms](algorithms/search-algorithms)
    - [Binary Search](algorithms/search-algorithms/binary-search)
    - [Breadth-First Search](algorithms/search-algorithms/breadth-first-search)
  - [Sort Algorithms](algorithms/sort-algorithms)
    - [Bubble Sort](algorithms/sort-algorithms/bubble-sort)
    - [Counting Sort](algorithms/sort-algorithms/counting-sort)
    - [Insertion Sort](algorithms/sort-algorithms/insertion-sort)
    - [Merge Sort](algorithms/sort-algorithms/merge-sort)
    - [Quick Sort](algorithms/sort-algorithms/quick-sort)
    - [Selection Sort](algorithms/sort-algorithms/selection-sort)
- Data Structures (COMING SOON)
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

<div align="center"><img alt="Big O Notation chart" src="./assets/big-o-complexity-chart.png"/></div>

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
- Huge thanks to [Byron Homes](https://github.com/byronholmes2018) for getting me excited about data structures and algorithms. You're awesome and a genius.
- Thanks to [Frank Faustino](https://github.com/frankfaustino) for inspiring me to create, build, and make my own data structures and algorithms repository. Your own journey has inspired my own.
- Thanks to Aditya Bhargava, the author of [Grokking Algorithms](https://smile.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230/ref=sr_1_2?ie=UTF8&qid=1544921791&sr=8-2&keywords=grokking+algorithm). You inspired me to learn this stuff and start documenting it for ease of later use.
