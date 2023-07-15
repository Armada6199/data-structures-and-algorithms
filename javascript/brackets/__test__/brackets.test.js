const { Node, LinkedList } = require('../index'); 

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should initialize with front, back, and size set to null and 0', () => {
    expect(linkedList.front).toBe(null);
    expect(linkedList.back).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it('should enqueue a value and update front, back, and size correctly', () => {
    linkedList.enqueue(1);

    expect(linkedList.front.value).toBe(1);
    expect(linkedList.back.value).toBe(1);
    expect(linkedList.size).toBe(1);

    linkedList.enqueue(2);

    expect(linkedList.front.value).toBe(1);
    expect(linkedList.back.value).toBe(2);
    expect(linkedList.size).toBe(2);
  });

  it('should check brackets and return true for balanced brackets', () => {
    linkedList.enqueue('[');
    linkedList.enqueue(']');
    linkedList.enqueue('{');
    linkedList.enqueue('}');
    linkedList.enqueue('(');
    linkedList.enqueue(')');

    expect(linkedList.checkBrackets()).toBe(true);
  });

  it('should check brackets and return false for unbalanced brackets', () => {
    linkedList.enqueue('[');
    linkedList.enqueue(']');
    linkedList.enqueue('{');
    linkedList.enqueue('}');
    linkedList.enqueue('(');

    expect(linkedList.checkBrackets()).toBe(false);
  });

  it('should check brackets and return false for different bracket counts', () => {
    linkedList.enqueue('[');
    linkedList.enqueue(']');
    linkedList.enqueue('{');
    linkedList.enqueue('}');
    linkedList.enqueue(')');
    linkedList.enqueue(')');

    expect(linkedList.checkBrackets()).toBe(false);
  });
});
