// Worst-case performance of O(log n)
// Best-case performance of 0(1)

function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + high;
    let guess = array[mid];
    if (guess === item) {
      return item;
    } else if (guess > mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "None";
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
