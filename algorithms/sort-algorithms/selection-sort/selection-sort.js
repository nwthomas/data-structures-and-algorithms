// Worst-case performance of O(n^2) for comparisons and O(n) for swaps
// Best-case performance of 0(n^2) for comparisons and O(n) for swaps

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

// Expected return of [1, 2, 3, 44, 5, 6, 9, 10]
console.log(selectionSort([5, 3, 6, 2, 10, 1, 9, 4]));
