// Worst-case performance of O(n^2)
// Best-case performance of 0(n log n)

function quickSort(array) {
  if (array.length <= 1) {
    return array; // Exit case
  } else {
    let pivot = [array[0]]; // Recursive case

    // Sub-array of all the elements less than the pivot
    const less = array.filter(num => num < pivot);

    // Takes into account possibility of duplicate number values
    const equal = array.filter(num => num === pivot[0]);

    // Sub-array of all the elements great than the pivot
    const greater = array.filter(num => num > pivot);
    return quickSort(less)
      .concat(equal)
      .concat(quickSort(greater));
  }
}

// Output of [1, 1, 1, 1, 1, 1, 2, 3, 5, 6, 7, 10, 11]
console.log(quickSort([10, 5, 2, 3, 6, 11, 1, 1, 1, 1, 1, 7, 1]));
