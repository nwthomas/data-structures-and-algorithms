/*

A max binary heap is a data structure that uses an array (under the hood) to mimic a binary tree.

It has a variety of use cases including (notably) priority queues.

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(newValue) {
    this.values.push(newValue);

    return this._bubbleUpValue();
  }

  remove() {
    if (this.values.length <= 1) {
      const value = this.values[0];
      this.values = [];
      return value;
    }

    const lastIndex = this.values.length - 1;
    this._swapValues(0, lastIndex);

    const value = this.values.pop();

    this._bubbleDownValue();

    return value;
  }

  _swapValues(indexOne, indexTwo) {
    [this.values[indexOne], this.values[indexTwo]] = [
      this.values[indexTwo],
      this.values[indexOne],
    ];
  }

  _getChildIndices(currentIndex) {
    const baseMultiplier = currentIndex * 2;
    const leftChildIndex = baseMultiplier + 1;
    const rightChildIndex = baseMultiplier + 2;

    return [leftChildIndex, rightChildIndex];
  }

  _getParentIndex(childIndex) {
    return Math.max(Math.floor((childIndex - 1) / 2), 0);
  }

  _bubbleUpValue() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (true) {
      const parentIndex = this._getParentIndex(index);

      if (this.values[parentIndex] < value) {
        this._swapValues(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }

    return index;
  }

  _bubbleDownValue() {
    let index = 0;

    while (true) {
      const currentValue = this.values[index];
      const [rightChildIndex, leftChildIndex] = this._getChildIndices(index);
      const rightValue = this.values[rightChildIndex];
      const leftValue = this.values[leftChildIndex];

      if (
        leftValue &&
        rightValue &&
        leftValue > currentValue &&
        rightValue > currentValue
      ) {
        const largestChildIndex =
          leftValue > rightValue ? leftChildIndex : rightChildIndex;
        this._swapValues(index, largestChildIndex);
        index = largestChildIndex;
      } else if (leftValue && leftValue > currentValue) {
        this._swapValues(index, leftChildIndex);
        index = leftChildIndex;
      } else if (rightValue && rightValue > currentValue) {
        this._swapValues(index, rightChildIndex);
        index = rightChildIndex;
      } else {
        break;
      }
    }
  }
}

module.exports = MaxBinaryHeap;
