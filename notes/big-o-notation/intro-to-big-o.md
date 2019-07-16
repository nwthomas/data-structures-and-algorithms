# INTRODUCTION TO BIG O NOTATION

Fundamental topic in algorithm theory.

## TABLE OF CONTENTS

- [The Need Behind Big O Notation](#the-need-behind-big-o-notation)
- [Simplify Big O Expressions](#simplify-big-o-expressions)
- [Define "Time Complexity" and "Space Complexity"](#define-time-complexity-and-space-complexity)
- [Evaluate the Time Complexity and Space Complexity of Different Algorithms Using Big O Notation](#evaluate-the-time-complexity-and-space-complexity-of-different-algorithms-using-big-o-notation)

## THE NEED BEHIND BIG O NOTATION

Big O notation helps us evaluate decisions between multiple implementations of the same function. It helps us decide, which way is best?

For instance, _"Write a function that accepts a string and reverses it"_ has lots of different solutions. However, they have very different efficiency rates.

Big O is the way to catagorize and compare how good different solutions are. This doesn't matter on a small scale, but it matters a _lot_ on a large scale. If an implementation for a dataset saves us an hour, it's 110% worth the extra effort for implementation.

Some variations and implementations might be more efficient up front, and others might be better over an extended time period. There are various uses for different implementations, and understanding them will help you identify inefficient points and how to use them.

Here's an example that's quite basic:

```js
function addUpTo(num) {
  let total = 0;
  for (let i = 1) i <= num; i++) {
    total += i;
  }
  return total
}

console.log(addUpTo(6)) // Should add up to 21
```

However, a more efficient implementation is:

```js
function addUpTo(num) {
  return (num * (num + 1)) / 2;
}

console.log(addUpTo(10)); // Should add up to 55
```

This removes the need for looping and changes it into a mathematical formula.

## SIMPLIFY BIG O EXPRESSIONS

## DEFINE "TIME COMPLEXITY" AND "SPACE COMPLEXITY"

## EVALUATE THE TIME COMPLEXITY AND SPACE COMPLEXITY OF DIFFERENT ALGORITHMS USING BIG O NOTATION
