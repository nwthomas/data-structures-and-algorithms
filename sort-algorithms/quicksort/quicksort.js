// Worst-case performance of O(n^2)
// Best-case performance of 0(n log n)

function quicksort(array) {
  if (array.length < 2) {
    return array; // Base case
  } else {
    let pivot = array[0]; // Recursive case

    // Sub-array of all the elements less than the pivot
    let less = array.filter(num => num < pivot);

    // Sub-array of all the elements great than the pivot
    let greater = array.filter(num => num > pivot);
    return quicksort(less) + pivot + quicksort(greater);
  }
}

// Output of [1, 2, 3, 5, 6, 7, 10, 11]
console.log(quicksort([10, 5, 2, 3, 6, 11, 1, 7, 1]));
