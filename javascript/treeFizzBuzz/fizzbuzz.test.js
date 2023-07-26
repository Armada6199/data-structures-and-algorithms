const { TreeNode, FizzBuzzTree } = require('./your-file-name'); // Replace with your actual file name

describe('FizzBuzzTree', () => {
  test('FizzBuzz value for divisible by 3', () => {
    const fizzBuzz = new FizzBuzzTree();
    expect(fizzBuzz.fizzBuzzValue(9)).toBe('Fizz');
  });

  test('FizzBuzz value for divisible by 5', () => {
    const fizzBuzz = new FizzBuzzTree();
    expect(fizzBuzz.fizzBuzzValue(10)).toBe('Buzz');
  });

  test('FizzBuzz value for divisible by 3 and 5', () => {
    const fizzBuzz = new FizzBuzzTree();
    expect(fizzBuzz.fizzBuzzValue(15)).toBe('FizzBuzz');
  });

  test('FizzBuzz value for not divisible by 3 or 5', () => {
    const fizzBuzz = new FizzBuzzTree();
    expect(fizzBuzz.fizzBuzzValue(7)).toBe('7');
  });

  test('FizzBuzz tree with null input', () => {
    const fizzBuzz = new FizzBuzzTree();
    expect(fizzBuzz.fizzBuzzTree(null)).toBe(null);
  });

  test('FizzBuzz tree with single node', () => {
    const fizzBuzz = new FizzBuzzTree();
    const originalTree = new TreeNode(3);
    const newTree = fizzBuzz.fizzBuzzTree(originalTree);
    expect(newTree.val).toBe('Fizz');
    expect(newTree.children.length).toBe(0);
  });

  test('FizzBuzz tree with multiple nodes', () => {
    const fizzBuzz = new FizzBuzzTree();
    const originalTree = new TreeNode(15, [
      new TreeNode(3, [new TreeNode(9), new TreeNode(10)]),
      new TreeNode(5),
      new TreeNode(7, [new TreeNode(14)]),
    ]);

    const newTree = fizzBuzz.fizzBuzzTree(originalTree);
    expect(newTree.val).toBe('FizzBuzz');
    expect(newTree.children[0].val).toBe('Fizz');
    expect(newTree.children[0].children[0].val).toBe('Fizz');
    expect(newTree.children[0].children[1].val).toBe('Buzz');
    expect(newTree.children[1].val).toBe('Buzz');
    expect(newTree.children[2].val).toBe('7');
    expect(newTree.children[2].children[0].val).toBe('14');
  });
});
