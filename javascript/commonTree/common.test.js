
const { BinaryTree, TreeNode } = require('./binaryTree'); // Import the BinaryTree and TreeNode classes

describe('BinaryTree', () => {
  // Helper function to create a sample binary tree
  function createSampleTree() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    return new BinaryTree(root);
  }

  it('should find common values between two binary trees', () => {
    const tree1 = createSampleTree();

    const tree2 = new TreeNode(3);
    tree2.left = new TreeNode(1);
    tree2.right = new TreeNode(6);
    tree2.left.right = new TreeNode(2);

    const binaryTree1 = new BinaryTree(tree1);
    const binaryTree2 = new BinaryTree(tree2);

    const commonValues = binaryTree1.findCommonValues(binaryTree2);
    expect(commonValues).toEqual([1, 2, 3]);
  });

  it('should handle empty trees', () => {
    const binaryTree1 = new BinaryTree(null);
    const binaryTree2 = new BinaryTree(null);

    const commonValues = binaryTree1.findCommonValues(binaryTree2);
    expect(commonValues).toEqual([]);
  });

  it('should handle trees with no common values', () => {
    const tree1 = createSampleTree();

    const tree2 = new TreeNode(6);
    tree2.left = new TreeNode(7);
    tree2.right = new TreeNode(8);

    const binaryTree1 = new BinaryTree(tree1);
    const binaryTree2 = new BinaryTree(tree2);

    const commonValues = binaryTree1.findCommonValues(binaryTree2);
    expect(commonValues).toEqual([]);
  });
});
