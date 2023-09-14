const Graph = require('./graph-breadth-first'); 

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();

    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");
  });

  it('should perform breadth-first search correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    graph.breadthFirstSearch("A");

    expect(consoleSpy).toHaveBeenCalledTimes(6); 

    expect(consoleSpy.mock.calls[0][0]).toBe("A");
    expect(consoleSpy.mock.calls[1][0]).toBe("B");
    expect(consoleSpy.mock.calls[2][0]).toBe("C");
    expect(consoleSpy.mock.calls[3][0]).toBe("D");
    expect(consoleSpy.mock.calls[4][0]).toBe("E");
    expect(consoleSpy.mock.calls[5][0]).toBe("F");

    consoleSpy.mockRestore();
  });

});
