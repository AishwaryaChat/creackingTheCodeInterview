// Dijsktra

// Problem Description
// Given a weighted undirected graph having A nodes and M weighted edges, and a source node C.

// You have to find an integer array D of size A such that:

// => D[i] : Shortest distance from the C node to node i.

// => If node i is not reachable from C then -1.

// Note:

// There are no self-loops in the graph.

// No multiple edges between two pair of vertices.

// The graph may or may not be connected.

// Nodes are numbered from 0 to A-1.

// Your solution will run on multiple testcases. If you are using global variables make sure to clear them.

// Problem Constraints
// 1 <= A <= 1e5

// 0 <= B[i][0],B[i][1] < A

// 0 <= B[i][2] <= 1e3

// 0 <= C < A

// Input Format
// The first argument given is an integer A, representing the number of nodes.

// The second argument given is the matrix B of size M x 3, where nodes B[i][0] and B[i][1] are connected with an edge of weight B[i][2].

// The third argument given is an integer C.

// Output Format
// Return the integer array D.

// Example Input
// Input 1:

// A = 6
// B = [   [0, 4, 9]
//         [3, 4, 6]
//         [1, 2, 1]
//         [2, 5, 1]
//         [2, 4, 5]
//         [0, 3, 7]
//         [0, 1, 1]
//         [4, 5, 7]
//         [0, 5, 1] ]
// C = 4
// Input 2:

// A = 5
// B = [   [0, 3, 4]
//         [2, 3, 3]
//         [0, 1, 9]
//         [3, 4, 10]
//         [1, 3, 8]  ]
// C = 4

// Example Output
// Output 1:

// D = [7, 6, 5, 6, 0, 6]
// Output 2:

// D = [14, 18, 13, 10, 0]

// Example Explanation
// Explanation 1:

//  All Paths can be considered from the node C to get shortest path
// Explanation 2:

//  All Paths can be considered from the node C to get shortest path

const Heap = require("../../../Heaps/heapGeneralisedImplementation");

// TC - (ElogE)
// SC - O(N+E) ~ O(E) since E > N
function getAdjacencyList(A, B) {
  const list = {};
  for (let i = 0; i <= A; i++) {
    list[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    const [n1, n2, weight] = B[i];
    list[n1].push([n2, weight]);
    list[n2].push([n1, weight]);
  }
  return list;
}

function pushToMinHeap(node, adjList, minHeap, distance = 0, ans) {
  for (let i = 0; i < adjList[node].length; i++) {
    const [n2, weight] = adjList[node][i];
    if (ans[n2] === -1) {
      minHeap.push({ s: node, d: n2, value: distance + weight });
    }
  }
}

function solve(A, B, source) {
  const minHeap = new Heap({ comparator: (a, b) => a < b });
  const adjList = getAdjacencyList(A, B);
  let ans = new Array(A).fill(-1);
  minHeap.push({ d: source, value: 0, s: -1 });
  const path = new Array(A).fill(-1); // path is use to get the path to reach any node from source node
  while (minHeap.getSize() !== 0) {
    const { s, d, value: weight } = minHeap.pop();
    if (ans[d] === -1 || d === source) {
      path[d] = s;
      ans[d] = weight;
      pushToMinHeap(d, adjList, minHeap, weight, ans);
    }
  }
  return ans;
}

const A = 6;
const B = [
  [0, 4, 9],
  [3, 4, 6],
  [1, 2, 1],
  [2, 5, 1],
  [2, 4, 5],
  [0, 3, 7],
  [0, 1, 1],
  [4, 5, 7],
  [0, 5, 1],
];
const C = 4;

// const A = 5;
// const B = [
//   [0, 3, 4],
//   [2, 3, 3],
//   [0, 1, 9],
//   [3, 4, 10],
//   [1, 3, 8],
// ];
// const C = 4;

console.log(solve(A, B, C));
