function binarySearch(array, target) {
  // Short-circuit evaluation if the list length is 0
  if (!array.length) return -1;
  // Define starting placements for low and high selections
  let low = 0;
  let high = array.length - 1;
  // While loop runs until low is lower than (or equal to) high
  while (low <= high) {
    // Defines mid-point guess using floor division
    const guess = Math.floor((low + high) / 2);
    // Control flow of guesses
    if (array[guess] === target) {
      // If the item is found, return index of item
      return guess;
    } else if (array[guess] > target) {
      // Move high point if target is lower than current guess
      high = guess - 1;
    } else {
      // Move low point if target is higher than current guess
      low = guess + 1;
    }
  }
  // Return -1 if the item is not found
  return -1;
}
