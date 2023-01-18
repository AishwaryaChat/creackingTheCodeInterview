// Commutable Islands

// There are A islands and there are M bridges connecting them. Each bridge has some cost attached to it.

// We need to find bridges with minimal cost such that all islands are connected.

// It is guaranteed that input data will contain at least one possible scenario in which all islands are connected with each other.

// Problem Constraints
// 1 <= A, M <= 6*104

// 1 <= B[i][0], B[i][1] <= A

// 1 <= B[i][2] <= 103

// Input Format
// The first argument contains an integer, A, representing the number of islands.

// The second argument contains an 2-d integer matrix, B, of size M x 3 where Island B[i][0] and B[i][1] are connected using a bridge of cost B[i][2].

// Output Format
// Return an integer representing the minimal cost required.

// Example Input
// Input 1:

//  A = 4
//  B = [  [1, 2, 1]
//         [2, 3, 4]
//         [1, 4, 3]
//         [4, 3, 2]
//         [1, 3, 10]  ]
// Input 2:

//  A = 4
//  B = [  [1, 2, 1]
//         [2, 3, 2]
//         [3, 4, 4]
//         [1, 4, 3]   ]

// Example Output
// Output 1:

//  6
// Output 2:

//  6

// Example Explanation
// Explanation 1:

//  We can choose bridges (1, 2, 1), (1, 4, 3) and (4, 3, 2), where the total cost incurred will be (1 + 3 + 2) = 6.
// Explanation 2:

//  We can choose bridges (1, 2, 1), (2, 3, 2) and (1, 4, 3), where the total cost incurred will be (1 + 2 + 3) = 6.

const Heap = require("../../../Heaps/heapGeneralisedImplementation");

// The below solution is done using Prim's algorithm, which uses the concept of minimum spanning tree, basically we create a tree(all nodes are connected with each other), having minimum weight
// TC - O(ElogE) - pushing and poping from minHeap
// SC - O(N+E) ~~ O(E) (adjList(E) + visited array(N) + minHeap(E))

function getAdjList(A, B) {
  let list = {};
  for (let i = 1; i <= A; i++) {
    list[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    const [n1, n2, weight] = B[i];
    list[n1].push([n2, weight]);
    list[n2].push([n1, weight]);
  }
  return list;
}

function primsAlgo(s, adjList, visited, minHeap, ans) {
  visited[s] = true;
  const edges = adjList[s];
  for (let j = 0; j < edges.length; j++) {
    const [n2, weight] = edges[j];
    if (!visited[n2]) {
      minHeap.push({ value: weight, n1: s, n2 });
    }
  }
  while (minHeap.getSize() > 0) {
    const { n2, value: weight } = minHeap.pop();
    if (!visited[n2]) {
      ans += weight;
      ans = primsAlgo(n2, adjList, visited, minHeap, ans);
      break;
    }
  }
  return ans;
}

function solve(A, B) {
  const adjList = getAdjList(A, B);
  let visited = new Array(A + 1).fill(false);
  let minHeap = new Heap({ comparator: (a, b) => a.value < b.value });
  let ans = 0;
  for (let i = 1; i <= A; i++) {
    if (!visited[i]) {
      ans += primsAlgo(i, adjList, visited, minHeap, ans);
    }
  }
  return ans;
}

// const A = 4;
// const B = [
//   [1, 2, 1],
//   [2, 3, 4],
//   [1, 4, 3],
//   [4, 3, 2],
//   [1, 3, 10],
// ];
// Input 2:

const A = 4;
const B = [
  [1, 2, 1],
  [2, 3, 2],
  [3, 4, 4],
  [1, 4, 3],
];

// const A = 3;
// const B = [
//   [1, 2, 10],
//   [2, 3, 5],
//   [1, 3, 9],
// ];

console.log(solve(A, B));
