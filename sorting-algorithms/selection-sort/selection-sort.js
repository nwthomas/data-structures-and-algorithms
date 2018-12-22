// Worst-case performance of O(n^2) for comparisons and O(n) for swaps
// Best-case performance of 0(n^2) for comparisons and O(n) for swaps

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  const dupArr = arr.slice();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let smallest = findSmallest(dupArr);
    newArr.push(dupArr.splice([smallest], 1));
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10, 1, 9, 4]));
