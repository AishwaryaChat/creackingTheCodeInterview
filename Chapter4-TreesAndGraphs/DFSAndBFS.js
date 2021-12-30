class Graph {
  constructor() {
    this.adjList = {};
  }

  addNode(node) {
    this.adjList[node] = [];
  }
  addNeighbours(node, neighbours) {
    this.adjList[node] = [...this.adjList[node], ...neighbours];
  }

  DFS(startingNode, func = console.log) {
    const nodeStack = [];
    const visited = {};

    nodeStack.push(startingNode);
    visited[startingNode] = true;

    while (nodeStack.length) {
      const current = nodeStack.pop();
      func(current);
      const neighbours = this.adjList[current];
      neighbours.forEach((element) => {
        if (!visited[element]) {
          nodeStack.push(element);
          visited[element] = true;
        }
      });
    }
    console.log("visited", visited);
  }

  BFS(startingNode, func = console.log) {
    const nodeQueue = [];
    const visited = {};
    nodeQueue.push(startingNode);
    visited[startingNode] = true;
    while (nodeQueue.length) {
      const current = nodeQueue.shift();
      const neighbours = this.adjList[current];
      func(current);
      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          nodeQueue.push(neighbour);
          visited[neighbour] = visited;
        }
      });
    }
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNeighbours(1, [2, 5]);
graph.addNeighbours(2, [1, 5, 3, 4]);
graph.addNeighbours(3, [2, 4]);
graph.addNeighbours(4, [2, 5, 3]);
graph.addNeighbours(5, [4, 1, 2]);
// console.log(graph);
// graph.DFS(1);
graph.BFS(1);
