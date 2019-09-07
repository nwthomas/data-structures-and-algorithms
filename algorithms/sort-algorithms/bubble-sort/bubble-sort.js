// Worst case performance of O(n^2) for comparisons and O(n^2) for swaps
// Best case performance of O(n^2) for comparisons and O(1) for swaps

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Boolean flag to check if current iteration has swapped anything
    let swapped = false;
    // Loops over every time every time
    for (let j = 0; j < arr.length; j++) {
      // Swap elements if j is lesser than j + 1
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Indicate via boolean flag that change has occured
        swapped = true;
      }
    }
    // End all loops if not swaps have happend on current iteration
    if (!swapped) break;
  }
  return arr;
}

// Expected return of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(bubbleSort([9, 10, 2, 4, 5, 3, 6, 8, 7, 1]));
