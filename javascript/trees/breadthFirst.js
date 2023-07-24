class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  //using an array to push elements to and check each time 
  class Tree {
    constructor() {
      this.root = null;
    }
    add(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
          this.root = newNode;
        } else {
          this.addNode(this.root, newNode);
        }
      }
    
      addNode(node, newNode) {
        if (newNode.value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            this.addNode(node.left, newNode);
          }
        } else {
          if (!node.right) {
            node.right = newNode;
          } else {
            this.addNode(node.right, newNode);
          }
        }
      }
    BFS(target) {
      if (!this.root) return null;
  
      const queue = [this.root];
  
      while (queue.length > 0) {
        const node = queue.shift();
  
        if (node.value === target) {
          return node; 
        }
  
        if (node.left) {
          queue.push(node.left);
        }
  
        if (node.right) {
          queue.push(node.right);
        }
      }
  
      return null;
    }
  }
  module.exports=Tree;