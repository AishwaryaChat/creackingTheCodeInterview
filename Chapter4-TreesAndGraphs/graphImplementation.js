//  using adjacency list
class Graph {
  constructor() {
    this.adjList = {};
  }
  addNode(node) {
    this.adjList[node.value] = {
      node,
      edges: [],
    };
  }
  removeNode(node) {
    delete this.adjList[node.value];
    Object.keys(this.adjList).forEach((eachNode) => {
      const edges = this.adjList[eachNode].edges;
      const index = edges.indexOf(node.value);
      if (index > -1) {
        edges.splice(index, 1);
      }
    });
  }
  addEdge(n1, n2) {
    this.adjList[n1.value].edges.push(n2);
    this.adjList[n2.value].edges.push(n1);
  }
  removeEdge() {}
}

const graph = new Graph();
const node1 = { value: 1 };
graph.addNode(node1);
const node2 = { value: 2 };
graph.addNode(node2);
graph.addEdge(node1, node2);
console.log("graph", graph);
graph.removeNode(node1);
console.log("graph", graph);
