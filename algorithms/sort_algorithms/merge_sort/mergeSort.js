function merge(arrA, arrB) {
  // Defines length of both sub-lists
  const elements = arrA.length + arrB.length;
  const mergedArr = [];
  // Control flow for different outcomes
  for (let i = 0; i < elements; i++) {
    if (!arrA.length || arrA[0] > arrB[0]) {
      mergedArr.push(arrB[0]);
      arrB = arrB.slice(1, arrB.length);
    } else if (!arrB.length || arrB[0] > arrA[0]) {
      mergedArr.push(arrA[0]);
      arrA = arrA.slice(1, arrA.length);
    }
  }
  // Returns merged list at end of function call
  return mergedArr;
}

function mergeSort(arr) {
  // Returns list if the list is length of 1
  if (arr.length <= 1) {
    return arr;
  } else {
    // Defines a pivot and then recursively calls merge_sort while merging the two halves
    const pivot = Math.floor(arr.length / 2);
    const left = arr.slice(0, pivot);
    const right = arr.slice(pivot, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
