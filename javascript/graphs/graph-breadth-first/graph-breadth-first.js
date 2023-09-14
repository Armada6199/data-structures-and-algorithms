class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For an undirected graph
      }
    }
  
    breadthFirstSearch(startingVertex) {
      const visited = new Set();
      const queue = [];
  
      visited.add(startingVertex);
      queue.push(startingVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        const neighbors = this.adjacencyList.get(currentVertex);
  
        console.log(currentVertex);
  
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  module.exports=Graph;
//   const graph = new Graph();
  
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addVertex("D");
//   graph.addVertex("E");
//   graph.addVertex("F");
  
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "D");
//   graph.addEdge("C", "E");
//   graph.addEdge("D", "E");
//   graph.addEdge("D", "F");
//   graph.addEdge("E", "F");
  
//   console.log("Breadth-First Traversal:");
//   graph.breadthFirstSearch("A");
  