// Worst case performance of O(n^2) for comparisons and O(n^2) for swaps
// Best case performance of O(n) for comparisons and O(1) for swaps

function bubbleSort(array) {
  let arrayLength = array.length;
  // Outer sort loop
  for (
    let firstLoopPosition = 0;
    firstLoopPosition < arrayLength;
    firstLoopPosition++
  ) {
    // Inner sort loop
    for (
      let secondLoopPosition = 0;
      secondLoopPosition < arrayLength - firstLoopPosition - 1;
      secondLoopPosition++
    ) {
      // Checks if numbers need to be changed
      if (array[secondLoopPosition] > array[secondLoopPosition + 1]) {
        let tempVar = array[secondLoopPosition];
        array[secondLoopPosition] = array[secondLoopPosition + 1];
        array[secondLoopPosition + 1] = tempVar;
      }
    }
  }
  return array;
}

// Expect this to return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(bubbleSort([9, 10, 2, 4, 5, 3, 6, 8, 7, 1]));
