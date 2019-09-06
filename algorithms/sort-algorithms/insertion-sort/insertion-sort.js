// Worst case performance of O(n^2)

function insertionSort(arr) {
  // Copies array to avoid side effects
  const elements = [...arr];
  // Loops through all the elements in the array
  for (let i = 1; i < elements.length; i++) {
    // Defines tracking variable
    let j = i;
    // Moves back down the list and swaps anything necessary
    // Comparison can easily be modified to compare anything
    while (j > 0 && elements[j] < elements[j - 1]) {
      // Idiomatic swap of a, b = b, a
      [elements[j], elements[j - 1]] = [elements[j - 1], elements[j]];
      j -= 1;
    }
  }
  // Returns new sorted elements list
  return elements;
}
