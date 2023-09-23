const  Graph  = require('./index'); 

describe('Graph', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    test('should add nodes correctly', () => {
        const nodeA = graph.addNode('A');
        const nodeB = graph.addNode('B');
        const nodeC = graph.addNode('C');

        expect(graph.nodes).toHaveLength(3);
        expect(nodeA.value).toBe('A');
        expect(nodeB.value).toBe('B');
        expect(nodeC.value).toBe('C');
    });

    test('should perform depth-first traversal', () => {
        const nodeA = graph.addNode('A');
        const nodeB = graph.addNode('B');
        const nodeC = graph.addNode('C');
        const nodeD = graph.addNode('D');

        nodeA.neighbors.push(nodeB);
        nodeA.neighbors.push(nodeC);
        nodeB.neighbors.push(nodeD);

        const traversalResult = graph.depthFirst(nodeA);

        expect(traversalResult.map(node => node.value)).toEqual(['A', 'B', 'D', 'C']);
    });
});
