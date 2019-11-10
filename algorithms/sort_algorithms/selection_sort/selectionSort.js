function selectionSort(arr) {
  // Outer loop for iterating until second to last index in array
  for (let i = 0; i < arr.length - 1; i++) {
    // Track least index position
    let least = i;
    // Inner loop to handle checking every item for lower number
    for (let j = i + 1; j < arr.length; j++) {
      // Set least to lowest index if found
      if (arr[j] < arr[least]) least = j;
    }
    // Swap least index with current index if found
    if (least !== i) {
      [arr[i], arr[least]] = [arr[least], arr[i]];
    }
  }
  // Return sorted array
  return arr;
}
