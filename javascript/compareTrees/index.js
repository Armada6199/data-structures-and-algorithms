class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Trees {
    constructor() {
      this.tree1 = null;
      this.tree2 = null;
    }
  
    setTrees(tree1, tree2) {
      this.tree1 = tree1;
      this.tree2 = tree2;
    }
  
    countLeafNodes(node) {
      if (node === null) {
        return 0;
      }
      if (node.left === null && node.right === null) {
        return 1;
      }
      return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
    }
  
    areTreesEqualInLeafNodes() {
      const leafCount1 = this.countLeafNodes(this.tree1);
      const leafCount2 = this.countLeafNodes(this.tree2);
  
      return leafCount1 === leafCount2;
    }
  }
    const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  tree1.left.left = new TreeNode(4);
  tree1.left.right = new TreeNode(5);
  
  const tree2 = new TreeNode(6);
  tree2.left = new TreeNode(7);
  tree2.right = new TreeNode(8);
  tree2.left.left = new TreeNode(9);
  tree2.right.right = new TreeNode(10);
  
  const comparator = new Trees();
  comparator.setTrees(tree1, tree2);
  
  const areEqualInLeafNodes = comparator.areTreesEqualInLeafNodes();
  