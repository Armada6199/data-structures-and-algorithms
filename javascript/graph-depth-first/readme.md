# Graph Traversal and Testing Documentation

This documentation explains a JavaScript code that includes a graph data structure and a depth-first pre-order traversal algorithm. Additionally, it covers test cases to verify the code's correctness.

## Code Structure

- `depthFirst(start)`: Performs a depth-first pre-order traversal starting from the specified node. It returns a collection of nodes in traversal order.

## Depth-First Traversal

The `depthFirst` method implements a depth-first pre-order traversal algorithm. It uses recursion to explore the graph, starting from the specified node. The algorithm keeps track of visited nodes to avoid infinite loops.
## Depth-First Traversal Visualization


- Starting from node A, we visit node A and mark it as visited.
- Then, we explore its neighbors, so we move to node B, visit it, and mark it as visited.
- Next, we explore node B's neighbors and visit node D.
- After exploring all of node B's neighbors, we backtrack to node A.
- We then explore node A's remaining neighbor, which is C, visit it, and mark it as visited.
- Finally, we've visited all nodes in the graph, and the traversal order is A, B, D, C.

