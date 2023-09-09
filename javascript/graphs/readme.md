
## Methods

### `addVertex(value)`

- Arguments: `value` (any)
- Returns: The added vertex
- Adds a new vertex to the graph with the specified value.
- Returns the value of the added vertex.

### `addEdge(vertex1, vertex2, weight = 1)`

- Arguments: `vertex1` (any), `vertex2` (any), `weight` (optional, default is 1)
- Returns: Nothing
- Adds a new edge between two vertices in the graph.
- If specified, assigns a weight to the edge.
- Both `vertex1` and `vertex2` should already be in the graph as vertices.

### `getVertices()`

- Arguments: None
- Returns: An array containing all of the vertices in the graph.
- Returns an empty array if there are no vertices in the graph.

### `getNeighbors(vertex)`

- Arguments: `vertex` (any)
- Returns: An array of objects representing the edges connected to the given vertex. Each object has two properties: `vertex` (the neighboring vertex) and `weight` (the weight of the connection).
- Returns an empty array if the specified vertex does not exist in the graph.

### `size()`

- Arguments: None
- Returns: The total number of vertices in the graph.
- Returns 0 if there are no vertices in the graph.

## Example Usage

Here's an example of how to use the `Graph` class:

```javascript
const Graph = require('./Graph');

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B', 2);
graph.addEdge('B', 'C', 3);

const vertices = graph.getVertices();
console.log('Vertices:', vertices); 

const neighborsOfB = graph.getNeighbors('B');
console.log('Neighbors of B:', neighborsOfB);

const graphSize = graph.size();
console.log('Graph Size:', graphSize);


`    A
   / \
  B   C
 /     \
D       E

Iteration 1:

Pop the top vertex ('A') from the stack.
Mark 'A' as visited and print it: Visited: A
Get the neighbors of 'A', which are 'B' and 'C'.
Push unvisited neighbors onto the stack ('B' and 'C').
Current Stack: ['B', 'C']

Iteration 2:

Pop the top vertex ('C') from the stack.
Mark 'C' as visited and print it: Visited: C
Get the neighbors of 'C', which is 'E'.
Push the unvisited neighbor ('E') onto the stack.
Current Stack: ['B', 'E']

Iteration 3:

Pop the top vertex ('E') from the stack.
Mark 'E' as visited and print it: Visited: E
Get the neighbors of 'E', which is an empty array (no neighbors).
The stack is now ['B'].
Current Stack: ['B']

Iteration 4:

Pop the top vertex ('B') from the stack.
Mark 'B' as visited and print it: Visited: B
Get the neighbors of 'B', which is 'D'.
Push the unvisited neighbor ('D') onto the stack.
Current Stack: ['D']

Iteration 5:

Pop the top vertex ('D') from the stack.
Mark 'D' as visited and print it: Visited: D
Get the neighbors of 'D', which is an empty array (no neighbors).
The stack is now empty.
Current Stack: []

Iteration 6 (End):

Since the stack is empty and there are no unvisited neighbors, the DFS traversal is complete.
