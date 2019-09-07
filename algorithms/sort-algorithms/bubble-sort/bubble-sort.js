// Worst case performance of O(n^2) for comparisons and O(n^2) for swaps
// Best case performance of O(n^2) for comparisons and O(1) for swaps

function bubbleSort(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    } else {
      swapped = false;
    }
  }
  return arr;
}

// Expected return of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(bubbleSort([9, 10, 2, 4, 5, 3, 6, 8, 7, 1]));
