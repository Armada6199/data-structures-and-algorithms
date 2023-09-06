


Creates a binary tree with the given root node.

- `root` (TreeNode): The root node of the binary tree.

## Methods

### `findCommonValues(otherTree: BinaryTree): Array`

Finds common values between this binary tree and another binary tree.

- `otherTree` (BinaryTree): The other binary tree to compare with.

Returns:

- `Array`: An array containing common values.

## Example Usage

```javascript
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

// Find common values
const commonValues = binaryTree1.findCommonValues(binaryTree2);
console.log(commonValues);
