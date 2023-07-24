const Tree = require('../breadthFirst'); 

describe('Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  test('should return null when searching for a value that does not exist in the tree', () => {
    tree.addN(5);
    tree.add(3);
    tree.add(7);

    expect(tree.breadthFirstSearch(10)).toBeNull();
  });

  test('should find the node when searching for a value that exists in the tree', () => {
    tree.add(1);
    tree.add(4);
    tree.add(6);
    tree.add(8);

    const resultNode = tree.breadthFirstSearch(4);
    expect(resultNode).toBeDefined();
    expect(resultNode.value).toBe(4);
  });

  test('should return null when searching in an empty tree', () => {
    expect(tree.breadthFirstSearch(5)).toBeNull();
  });

  test('should find the node when the tree has only one node', () => {
    tree.add(10);

    const resultNode = tree.breadthFirstSearch(10);
    expect(resultNode).toBeDefined();
    expect(resultNode.value).toBe(10);
  });
});
