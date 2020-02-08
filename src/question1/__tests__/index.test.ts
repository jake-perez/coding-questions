import QueueFromStacks from '..';

describe('Question 1', () => {
  it('should correctly dequeue and enqueue our `Queue`', () => {
    const queue: QueueFromStacks<number> = new QueueFromStacks<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    const t = () => queue.dequeue();

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
    expect(t).toThrowError('Empty Queue');
  });

  it('should account for edge cases', () => {
    const queue: QueueFromStacks<string> = new QueueFromStacks<string>();
    const t = () => queue.dequeue();
    expect(t).toThrowError('Empty Queue');
  });

  it('should complicated enqueue and dequeue for edge cases', () => {
    const queue: QueueFromStacks<string> = new QueueFromStacks<string>();

    queue.enqueue('a');
    queue.enqueue('b');
    const a: string | Error = queue.dequeue();
    queue.enqueue('c');
    queue.enqueue('d');
    const b: string | Error = queue.dequeue();
    queue.enqueue('g');
    const c: string | Error = queue.dequeue();
    const d: string | Error = queue.dequeue();
    const g: string | Error = queue.dequeue();

    const t = () => queue.dequeue();

    expect(t).toThrowError('Empty Queue');
    expect([a, b, c, d, g]).toEqual(['a', 'b', 'c', 'd', 'g']);
  });
});
