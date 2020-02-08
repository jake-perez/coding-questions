/**
 * This problem was asked by Apple.
 *
 * Implement a queue using two stacks. Recall that a
 * queue is a FIFO (first-in, first-out) data structure
 * with the following methods:
 *   enqueue, which inserts an element into the queue
 *   dequeue, which removes it.
 *
 * example: [1, 2, 3, 4]
 *    queue -> 1, 2, 3, 4
 *    stack -> 4, 3, 2, 1
 */

export default class QueueFromStacks<T> {
  enqueueStack: T[] = [];
  dequeueStack: T[] = [];

  enqueue = (value: T): void => {
    this.enqueueStack.push(value);
  };

  dequeue = (): T => {
    if (this.dequeueStack.length > 0) {
      return this.dequeueStack.pop()!;
    }
    if (this.enqueueStack.length === 0) {
      throw new Error('Empty Queue');
    } else {
      while (this.enqueueStack.length) {
        this.dequeueStack.push(this.enqueueStack.pop()!);
      }
      return this.dequeueStack.pop()!;
    }
  };
}
