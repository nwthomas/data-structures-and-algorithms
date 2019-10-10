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

module.exports = bubbleSort;
