function quickSort(array) {
  if (array.length <= 1) {
    return array; // Exit case
  } else {
    // Selection of pivot point
    let pivot = array[Math.floor(Math.random() * array.length)];
    // Sub-array of all the elements less than the pivot
    const less = array.filter(num => num < pivot);
    // Takes into account possibility of duplicate number values
    const equal = array.filter(num => num === pivot);
    // Sub-array of all the elements great than the pivot
    const greater = array.filter(num => num > pivot);
    // Return concatenated recursive array calls
    return quickSort(less)
      .concat(equal)
      .concat(quickSort(greater));
  }
}
