/*

A priority queue is an implementation of a data structure that allows the placement
of tasks with specific priorities. These tasks can then be popped off the data structure
for work to be done on them.

Note that an optimal solution would probably use an actual binary tree as using an array
is likely to result in (net) slower operations. However, this is a conceptual implementation
and therefore does not need to be perfectly optimized.

*/

const PRIORITY_HIGH = 2;
const PRIORITY_MEDIUM = 1;
const PRIORITY_LOW = 0;

class MaxPriorityQueue {
  static priorityHigh = PRIORITY_HIGH;
  static priorityMedium = PRIORITY_MEDIUM;
  static priorityLow = PRIORITY_LOW;

  constructor() {
    this.queue = [];
  }

  /**
   * Adds a task to the priority queue and returns the index of it
   * @param {any} value The value of the task
   * @param {0 | 1 | 2} priority The priority level of the task (defaults to low)
   * @returns {number} The index placement of the new message in the queue
   */
  enqueue(value, priority = this.priorityLow) {
    this.queue.push({ value, priority });

    return this._bubbleUpTask();
  }

  /**
   * Removes a task from the queue and returns it while bubbling down its
   * replacement in the priority queue
   * @returns {{ value: any, priority: 0 | 1 | 2 }} The task object
   */
  dequeue() {
    if (this.queue.length <= 1) {
      const task = this.queue[0];
      this.queue = [];
      return task;
    }

    const lastIndex = this.queue.length - 1;
    this._swapTasks(0, lastIndex);

    const task = this.queue.pop();

    this._bubbleDownTask();

    return task;
  }

  /**
   * Bubbles down the first index position task to its final placement based
   * around its priority queue level relative to its children
   */
  _bubbleDownTask() {
    let index = 0;

    while (true) {
      const currentTask = this.queue[index];
      const [rightChildIndex, leftChildIndex] = this._getChildIndices(index);
      const rightTask = this.queue[rightChildIndex];
      const leftTask = this.queue[leftChildIndex];

      if (
        leftTask &&
        rightTask &&
        leftTask.priority > currentTask.priority &&
        rightTask.priority > currentTask.priority
      ) {
        const largestChildIndex =
          leftTask > rightTask ? leftChildIndex : rightChildIndex;

        this._swapTasks(index, largestChildIndex);
        index = largestChildIndex;
      } else if (leftTask && leftTask.priority > currentTask.priority) {
        this._swapTasks(index, leftChildIndex);
        index = leftChildIndex;
      } else if (rightTask && rightTask.priority > currentTask.priority) {
        this._swapTasks(index, rightChildIndex);
        index = rightChildIndex;
      } else {
        break;
      }
    }
  }

  /**
   * Bubbles up a task over lower priority messages in the priority queue
   * @returns {number} The final index placement of the bubbled task
   */
  _bubbleUpTask() {
    let index = this.queue.length - 1;
    const task = this.queue[index];

    while (true) {
      const parentIndex = this._getParentIndex(index);

      if (this.queue[parentIndex].priority < task.priority) {
        this._swapTasks(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }

    return index;
  }

  /**
   * Returns a pair of left/right child indices for a given index
   * @param {number} currentIndex The index to find child indices for
   * @returns {[number, number]} The left/right child indices
   */
  _getChildIndices(currentIndex) {
    const baseMultiplier = currentIndex * 2;

    const leftChildIndex = baseMultiplier + 1;
    const rightChildIndex = baseMultiplier + 2;

    return [leftChildIndex, rightChildIndex];
  }

  /**
   * Takes in a child index and finds its parent index
   * @param {number} childIndex The index to find the parent index for
   * @returns {number} The parent index
   */
  _getParentIndex(childIndex) {
    return Math.max(Math.floor((childIndex - 1) / 2), 0);
  }

  /**
   * Takes in two indices and swaps them in the priority queue. Not that this
   * method does not return any tasks/indices since tasks are mutated directly
   * in the priority queue.
   * @param {number} indexOne First of the indices to be swapped in the queue
   * @param {number} indexTwo Second of the indices to be swapped in the queue
   */
  _swapTasks(indexOne, indexTwo) {
    [this.queue[indexOne], this.queue[indexTwo]] = [
      this.queue[indexTwo],
      this.queue[indexOne],
    ];
  }
}

module.exports = MaxPriorityQueue;
