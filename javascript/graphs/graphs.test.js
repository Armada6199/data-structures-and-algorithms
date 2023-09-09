const Graph = require('./index'); 

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add vertices and return them', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    const vertices = graph.getVertices();
    expect(vertices).toEqual(['A', 'B', 'C']);
  });

  it('should add edges between vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', 2);
    graph.addEdge('B', 'C', 3);

    const neighborsOfA = graph.getNeighbors('A');
    const neighborsOfB = graph.getNeighbors('B');

    expect(neighborsOfA).toEqual([{ vertex: 'B', weight: 2 }]);
    expect(neighborsOfB).toEqual([{ vertex: 'A', weight: 2 }, { vertex: 'C', weight: 3 }]);
  });

  it('should return an empty collection for neighbors if the vertex does not exist', () => {
    const neighborsOfNonExistentVertex = graph.getNeighbors('D');
    expect(neighborsOfNonExistentVertex).toEqual([]);
  });

  it('should return the correct size of the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    expect(graph.size()).toBe(3);

    graph.addEdge('A', 'B', 2);
    expect(graph.size()).toBe(3); // Size should remain the same after adding edges
  });

  it('should throw an error when adding an edge with non-existent vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');

    expect(() => {
      graph.addEdge('A', 'C', 2);
    }).toThrowError('Both vertices should already be in the Graph.');
  });
});
