// Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes.
class DirectedGraph {
  constructor() {
    this.adjList = {};
  }
  addNode(node) {
    this.adjList[node] = [];
  }
  addNeighbours(node, neighbours) {
    this.adjList[node] = [...this.adjList[node], ...neighbours];
  }

  BFS(startingNode, destinationNode) {
    const nodeQueue = [];
    const visited = {};
    nodeQueue.push(startingNode);
    visited[startingNode] = true;
    while (nodeQueue.length) {
      const current = nodeQueue.shift();
      if (current === destinationNode) {
        return true;
      }
      const neighbours = this.adjList[current];
      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          nodeQueue.push(neighbour);
          visited[neighbour] = true;
        }
      });
    }
    return false;
  }
}

const DG = new DirectedGraph();
DG.addNode("a");
DG.addNode("b");
DG.addNode("c");
DG.addNode("d");
DG.addNeighbours("a", ["b"]);
DG.addNeighbours("b", ["c"]);
DG.addNeighbours("c", ["a", "d"]);
DG.addNeighbours("d", ["a"]);
// adj = {
//     a: ["b"],
//     b: ["c"],
//     c: ["a", "d"],
//     d: ["a"]
// }
console.log("graph: ", DG);
console.log("Does path exist between a & d? ", DG.BFS("a", "a"));
