const { Node, Tree, BinaryTree } = require('../index');

describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    const sixth = new Node(32);
    const fifth = new Node(27);
    const fourth = new Node(30, fifth, sixth);
    const third = new Node(12);
    const second = new Node(15, third);
    const first = new Node(25, second, fourth);
    binaryTree = new BinaryTree(first);
  });

  describe('add', () => {
    test('should add a new node to the left when value < current.value', () => {
      binaryTree.add(10);
      expect(binaryTree.root.left.left.left.value).toBe(10);
    });

    test('should add a new node to the right when value > current.value', () => {
      binaryTree.add(35);
      expect(binaryTree.root.right.right.right.value).toBe(35);
    });

    test('should not add a new node if the value already exists', () => {
      binaryTree.add(15);
      expect(binaryTree.root.left.right).toBe(null);
    });
  });

  describe('contains', () => {
    test('should return the node if it exists in the binary tree', () => {
      const node = binaryTree.contains(12);
      expect(node.value).toBe(12);
    });

    test('should return undefined if the node does not exist in the binary tree', () => {
      const node = binaryTree.contains(100);
      expect(node).toBe(undefined);
    });

    test('should return false if the binary tree is empty', () => {
      binaryTree = new BinaryTree(null);
      const node = binaryTree.contains(12);
      expect(node).toBe(false);
    });
  });
});
