// Worst-case performance of O(n^2) for comparisons and O(n) for swaps
// Best-case performance of 0(n^2) for comparisons and O(n) for swaps

const swap = (items, firstIndex, secondIndex) => {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};

function selectionSort(items) {
  let min;
  for (let itemsIndex = 0; itemsIndex < items.length; itemsIndex++) {
    // Set minimum to this position
    min = itemsIndex;
    for (
      nextItemIndex = itemsIndex + 1;
      nextItemIndex < items.length;
      nextItemIndex++
    ) {
      //check the rest of the array to see if anything is smaller
      if (items[nextItemIndex] < items[min]) {
        min = nextItemIndex;
      }
    }
    //if the minimum isn't in the position, swap it
    if (itemsIndex != min) {
      swap(items, itemsIndex, min);
    }
  }
  return items;
}

console.log(selectionSort([3, 1, 9, 5, 8, 4]));
