class Graph {
    constructor() {
      this.vertices = new Map(); // Using a Map to store vertices and their edges
    }
  
    addVertex(value) {
      if (!this.vertices.has(value)) {
        this.vertices.set(value, []);
      }
      return value;
    }
  
    addEdge(vertex1, vertex2, weight = 1) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        throw new Error("Both vertices should already be in the Graph.");
      }
  
      this.vertices.get(vertex1).push({ vertex: vertex2, weight });
      this.vertices.get(vertex2).push({ vertex: vertex1, weight });
    }
  
    getVertices() {
      return [...this.vertices.keys()];
    }
  
    getNeighbors(vertex) {
      if (!this.vertices.has(vertex)) {
        return [];
      }
      return this.vertices.get(vertex);
    }
  
    size() {
      return this.vertices.size;
    }
  }
  module.export=Graph;