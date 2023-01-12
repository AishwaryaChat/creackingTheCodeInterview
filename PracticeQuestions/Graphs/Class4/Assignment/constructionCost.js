// Construction Cost

// Problem Description
// Given a graph with A nodes and C weighted edges. Cost of constructing the graph is the sum of weights of all the edges in the graph.

// Find the minimum cost of constructing the graph by selecting some given edges such that we can reach every other node from the 1st node.

// NOTE: Return the answer modulo 109+7 as the answer can be large.

// Problem Constraints
// 1 <= A <= 100000
// 0 <= C <= 100000
// 1 <= B[i][0], B[i][1] <= N
// 1 <= B[i][2] <= 109

// Input Format
// First argument is an integer A.
// Second argument is a 2-D integer array B of size C*3 denoting edges. B[i][0] and B[i][1] are connected by ith edge with weight B[i][2]

// Output Format
// Return an integer denoting the minimum construction cost.

// Example Input
// Input 1:

// A = 3
// B = [   [1, 2, 14]
//         [2, 3, 7]
//         [3, 1, 2]   ]
// Input 2:

// A = 3
// B = [   [1, 2, 20]
//         [2, 3, 17]  ]

// Example Output
// Output 1:

// 9
// Output 2:

// 37

// Example Explanation
// Explanation 1:

// We can take only two edges (2 -> 3 and 3 -> 1) to construct the graph.
// we can reach the 1st node from 2nd and 3rd node using only these two edges.
// So, the total cost of costruction is 9.
// Explanation 2:

// We have to take both the given edges so that we can reach the 1st node from 2nd and 3rd node.

// The below solution is given using Kruskal's algorithm
// Sort the edges based on their weight in ascending order
// Start selecting edges starting from lowest weight
// Discard an edge if it is forming is cycle (use disjoin set union and path compression)
// TC - O(ElogE) [sort edges] + O(1) - path compression
// SC - O(N) - parent array
function findRoot(x, parent) {
  if (x === parent[x]) return x;
  parent[x] = findRoot(parent[x], parent);
  return parent[x];
}

function union(x, y, parent) {
  const rx = findRoot(x, parent);
  const ry = findRoot(y, parent);
  if (rx === ry) return false;
  else {
    parent[rx] = ry;
  }
  return true;
}

function initParent(A) {
  const parent = new Array(A + 1);
  for (let i = 1; i <= A; i++) {
    parent[i] = i;
  }
  return parent;
}

function solve(A, B) {
  const MOD = Math.pow(10, 9) + 7;
  B.sort((a, b) => a[2] - b[2]);
  let ans = 0;
  let edges = 0;
  let parent = initParent(A);
  for (let i = 0; i < B.length; i++) {
    const [n1, n2, weight] = B[i];
    if (union(n1, n2, parent)) {
      ans = ((ans % MOD) + (weight % MOD)) % MOD;
      edges++;
    }
  }
  return edges === A - 1 ? ans : -1;
}

// const A = 3;
// const B = [
//   [1, 2, 14],
//   [2, 3, 7],
//   [3, 1, 2],
// ];
// o/p - 9

const A = 3;
const B = [
  [1, 2, 20],
  [2, 3, 17],
];
// o/p - 37

console.log(solve(A, B));
