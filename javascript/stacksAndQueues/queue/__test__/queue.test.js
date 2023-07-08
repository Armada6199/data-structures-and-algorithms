const LinkedList = require('../index');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('isEmpty() returns true for empty list', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  test('isEmpty() returns false after enqueue', () => {
    linkedList.enqueue(1);
    expect(linkedList.isEmpty()).toBe(false);
  });

  test('dequeue() returns "stack is empty" for empty list', () => {
    expect(linkedList.dequeue()).toBe('stack is empty');
  });

  test('dequeue() returns the value of the dequeued node', () => {
    linkedList.enqueue(1);
    linkedList.enqueue(2);
    expect(linkedList.dequeue()).toBe(1);
  });

  test('peek() returns "stack is Empty" for empty list', () => {
    expect(linkedList.peek()).toBe('stack is Empty');
  });

  test('peek() returns the value of the front node', () => {
    linkedList.enqueue(1);
    linkedList.enqueue(2);
    expect(linkedList.peek().value).toBe(1);
  });

  test('printAllNodes() prints all nodes in the list', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    linkedList.enqueue(1);
    linkedList.enqueue(2);
    linkedList.enqueue(3);
    linkedList.printAllNodes();
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ value: 1 }));
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ value: 2 }));
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ value: 3 }));
    consoleSpy.mockRestore();
  });
});
