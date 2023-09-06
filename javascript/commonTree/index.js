class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor(root) {
      this.root = root;
    }
  
    // Helper function for in-order traversal
    inorderTraversal(node, callback) {
      if (node === null) return;
      this.inorderTraversal(node.left, callback);
      callback(node.val);
      this.inorderTraversal(node.right, callback);
    }
  
    // Find common values between two binary trees
    findCommonValues(otherTree) {
      const set = new Set();
      const result = [];
  
      // Traverse the current tree and add values to the set
      this.inorderTraversal(this.root, (value) => {
        set.add(value);
      });
  
      // Traverse the other tree and check if values exist in the set
      this.inorderTraversal(otherTree.root, (value) => {
        if (set.has(value)) {
          result.push(value);
        }
      });
  
      return result;
    }
  }
  
  // Example usage:
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  tree1.left.left = new TreeNode(4);
  tree1.left.right = new TreeNode(5);
  
  const tree2 = new TreeNode(3);
  tree2.left = new TreeNode(1);
  tree2.right = new TreeNode(6);
  tree2.left.right = new TreeNode(2);
  
  const binaryTree1 = new BinaryTree(tree1);
  const binaryTree2 = new BinaryTree(tree2);
  
  const commonValues = binaryTree1.findCommonValues(binaryTree2);
  console.log(commonValues); // Output: [1, 2, 3]
  