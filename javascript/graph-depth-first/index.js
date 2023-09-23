class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(value) {
        const node = new Node(value);
        this.nodes.push(node);
        return node;
    }

    depthFirst(start) {
        const visited = new Set();
        const result = [];

        const dfs = (node) => {
            if (!visited.has(node)) {
                visited.add(node);
                result.push(node);

                for (const neighbor of node.neighbors) {
                    dfs(neighbor);
                }
            }
        };

        dfs(start);
        return result;
    }
}

module.exports=Graph;