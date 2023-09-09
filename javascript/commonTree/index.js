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
  
    inorderTraversal(node, callback) {
      if (node === null) return;
      this.inorderTraversal(node.left, callback);
      callback(node.val);
      this.inorderTraversal(node.right, callback);
    }
  
    findCommonValues(otherTree) {
      const set = new Set();
      const result = [];
  
      this.inorderTraversal(this.root, (value) => {
        set.add(value);
      });
  
      this.inorderTraversal(otherTree.root, (value) => {
        if (set.has(value)) {
          result.push(value);
        }
      });
  
      return result;
    }
  }
