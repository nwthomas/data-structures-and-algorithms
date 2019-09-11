function merge(arrA, arrB) {
  const elements = arrA.length + arrB.length;
  const mergedArr = [];
  for (let i = 0; i < elements; i++) {
    if (!arrA.length) {
      mergedArr.push(arrB[0]);
      arrB = arrB.slice(1, arrB.length);
    } else if (!arrB.length) {
      mergedArr.push(arrA[0]);
      arrA = arrA.slice(1, arrA.length);
    } else if (arrA[0] < arrB[0]) {
      mergedArr.push(arrA[0]);
      arrA = arrA.slice(1, arrA.length);
    } else {
      mergedArr.push(arrB[0]);
      arrB = arrB.slice(1, arrB.length);
    }
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = Math.floor(arr.length / 2);
    const left = arr.slice(0, pivot);
    const right = arr.slice(pivot, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
