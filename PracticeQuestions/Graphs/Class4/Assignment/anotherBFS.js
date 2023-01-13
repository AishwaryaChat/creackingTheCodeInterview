// Another BFS

// Problem Description

// Given a weighted undirected graph having A nodes, a source node C and destination node D.

// Find the shortest distance from C to D and if it is impossible to reach node D from C then return -1.

// You are expected to do it in Time Complexity of O(A + M).

// Note:

// There are no self-loops in the graph.

// No multiple edges between two pair of vertices.

// The graph may or may not be connected.

// Nodes are Numbered from 0 to A-1.

// Your solution will run on multiple testcases. If you are using global variables make sure to clear them.

// Problem Constraints

// 1 <= A <= 105

// 0 <= B[i][0], B[i][1] < A

// 1 <= B[i][2] <= 2

// 0 <= C < A

// 0 <= D < A

// Input Format

// The first argument given is an integer A, representing the number of nodes.

// The second argument given is the matrix B, where B[i][0] and B[i][1] are connected through an edge of weight B[i][2].

// The third argument given is an integer C, representing the source node.

// The fourth argument is an integer D, representing the destination node.

// Note: B[i][2] will be either 1 or 2.

// Output Format

// Return the shortest distance from C to D. If it is impossible to reach node D from C then return -1.

// Example Input

// Input 1:

// A = 6
// B = [   [2, 5, 1]
//         [1, 3, 1]
//         [0, 5, 2]
//         [0, 2, 2]
//         [1, 4, 1]
//         [0, 1, 1] ]
// C = 3
// D = 2
// Input 2:

// A = 2
// B = [   [0, 1, 1]
//     ]
// C = 0
// D = 1

// Example Output

// Output 1:

//  4
// Output 2:

//  1

// Example Explanation

// Explanation 1:

// The path to be followed will be:
//     3 -> 1 (Edge weight : 1)
//     1 -> 0 (Edge weight : 1)
//     0 -> 2 (Edge weight : 2)
// Total length of path = 1 + 1 + 2 = 4.
// Explanation 2:

//  Path will be 0-> 1.

const Queue = require("../../../Queues/arrayImpelemtation");

function dividePath(s, d, weight, list, A, visited) {
  let n1 = s;
  for (let i = 1; i <= weight; i++) {
    const n2 = i === weight ? d : ++A;
    visited[n2] = false;
    if (!list[n2]) list[n2] = [];
    list[n1].push([n2, 1]);
    list[n2].push([n1, 1]);
    n1 = n2;
  }
  return A;
}

function getAdjList(A, B, currA, visited) {
  let list = {};
  for (let i = 0; i < A; i++) {
    list[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    const [n1, n2, weight] = B[i];
    if (weight > 1) {
      currA = dividePath(n1, n2, weight, list, currA, visited);
    } else {
      list[n1].push([n2, weight]);
      list[n2].push([n1, weight]);
    }
  }
  return list;
}

function solve(A, B, C, D) {
  let currA = A - 1;
  let visited = new Array(A).fill(false);
  const adjList = getAdjList(A, B, currA, visited);
  let queue = new Queue();
  visited[C] = true;
  queue.enqueue({ s: C, weight: 0 });
  while (!queue.isEmpty()) {
    const { s, weight } = queue.dequeue();
    if (s === D) return weight
    let edges = adjList[s];
    for (let i = 0; i < edges.length; i++) {
      const [n2, currWeight] = edges[i];
      if (!visited[n2]) {
        queue.enqueue({ s: n2, weight: weight + currWeight });
        visited[n2] = true;
      }
    }
  }
  return -1;
}

const A = 7;
const B = [
  [2, 5, 1],
  [1, 3, 1],
  [0, 5, 2],
  [0, 2, 2],
  [1, 4, 1],
  [0, 1, 1],
  [5, 6, 1],
  [3, 6, 1],
];
const C = 3;
const D = 2;

// const A = 2;
// const B = [[0, 1, 1]];
// const C = 0;
// const D = 1;

console.log(solve(A, B, C, D));
