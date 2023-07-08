const LinkedList = require('../index');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('isEmpty() returns true for empty list', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  test('isEmpty() returns false after push', () => {
    linkedList.push(1);
    expect(linkedList.isEmpty()).toBe(false);
  });

  test('pop() returns "stack is empty" for empty list', () => {
    expect(linkedList.pop()).toBe('stack is empty');
  });

  test('pop() returns the value of the popped node', () => {
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.pop()).toBe(2);
  });

  test('peek() returns "stack is empty" for empty list', () => {
    expect(linkedList.peek()).toBe('stack is empty');
  });

  test('peek() returns the value of the top node', () => {
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.peek().value).toBe(2);
  });

  test('printData() prints all nodes in the list', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.printData();
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ value: 3 }));
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ value: 2 }));
    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ value: 1 }));
    consoleSpy.mockRestore();
  });
});
