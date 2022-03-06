const PriorityQueue = require('./priorityQueue.js');

describe('Priority Queue', () => {
  let pq;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  describe('enqueue and bubble up', () => {
    it('enqueues first task correctly with default priority', () => {
      const addedTaskIndex = pq.enqueue(55);
      expect(pq.queue).toEqual([{ value: 55, priority: 0 }]);
      expect(addedTaskIndex).toBe(0);
    });

    it('enqueues first task with custom priority', () => {
      const addedTaskIndex = pq.enqueue(55, pq.priorityHigh);
      expect(pq.queue).toEqual([{ value: 55, priority: 2 }]);
      expect(addedTaskIndex).toBe(0);
    });

    it('enqueues values in correct order and bubbles up', () => {
      const values = [
        [41, pq.priorityLow],
        [39, pq.priorityHigh],
        [33, pq.priorityMedium],
        [18, pq.priorityHigh],
        [27, pq.priorityMedium],
        [12, pq.priorityMedium],
      ];

      values.forEach((newValue) => {
        const [value, priority] = newValue;
        const addedTaskIndex = pq.enqueue(value, priority);
        expect(pq.queue[addedTaskIndex]).toEqual({ value, priority });
      });

      expect(pq.queue).toEqual([
        { value: 39, priority: 2 },
        { value: 18, priority: 2 },
        { value: 33, priority: 1 },
        { value: 41, priority: 0 },
        { value: 27, priority: 1 },
        { value: 12, priority: 1 },
      ]);
    });
  });

  describe('dequeue and bubble down', () => {
    it('dequeues and bubbles down', () => {
      const values = [
        [41, pq.priorityLow],
        [39, pq.priorityHigh],
        [33, pq.priorityMedium],
        [18, pq.priorityHigh],
        [27, pq.priorityMedium],
        [12, pq.priorityMedium],
      ];

      values.forEach((newValue) => pq.enqueue(...newValue));

      const dequeuedTask = pq.dequeue();
      expect(dequeuedTask).toEqual({ value: 39, priority: 2 });
      expect(pq.queue).toEqual([
        { value: 18, priority: 2 },
        { value: 12, priority: 1 },
        { value: 33, priority: 1 },
        { value: 41, priority: 0 },
        { value: 27, priority: 1 },
      ]);
    });
  });
});
