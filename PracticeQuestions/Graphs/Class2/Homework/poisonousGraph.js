// Poisonous Graph

// Problem Description
// You are given an undirected unweighted graph consisting of A vertices and M edges given in a form of 2D Matrix B of size M x 2 where (B[i][0], B][i][1]) denotes two nodes connected by an edge.

// You have to write a number on each vertex of the graph. Each number should be 1, 2 or 3. The graph becomes Poisonous if for each edge the sum of numbers on vertices connected by this edge is odd.

// Calculate the number of possible ways to write numbers 1, 2 or 3 on vertices so the graph becomes poisonous. Since this number may be large, return it modulo 998244353.

// NOTE:

// Note that you have to write exactly one number on each vertex.
// The graph does not have any self-loops or multiple edges.
// Nodes are labelled from 1 to A.

// Problem Constraints
// 1 <= A <= 3*105

// 0 <= M <= 3*105

// 1 <= B[i][0], B[i][1] <= A

// B[i][0] != B[i][1]

// Input Format
// First argument is an integer A denoting the number of nodes.

// Second argument is an 2D Matrix B of size M x 2 denoting the M edges.

// Output Format
// Return one integer denoting the number of possible ways to write numbers 1, 2 or 3 on the vertices of given graph so it becomes Poisonous . Since answer may be large, print it modulo 998244353.

// Example Input
// Input 1:

//  A = 2
//  B = [  [1, 2]
//      ]
// Input 2:

//  A = 4
//  B = [  [1, 2]
//         [1, 3]
//         [1, 4]
//         [2, 3]
//         [2, 4]
//         [3, 4]
//     ]

// Example Output
// Output 1:

//  4
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  There are 4 ways to make the graph poisonous. i.e, writing number on node 1 and 2 as,
//     [1, 2] , [3, 2], [2, 1] or [2, 3] repsectively.
// Explanation 2:

//  There is no way to make the graph poisonous.

const MOD = 998244353;

function getAdjacencyList(A, B) {
  let list = {};
  for (let i = 1; i <= A; i++) {
    list[i] = [];
  }
  for (let i = 0; i < B.length; i++) {
    const [node1, node2] = B[i];
    list[node1].push(node2);
    list[node2].push(node1);
  }
  return list;
}

function dfs(s, adjList, visited) {
  const nodes = adjList[s];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (visited[node] === -1) {
      visited[node] = 1 - visited[s];
      if (!dfs(node, adjList, visited)) return false;
    } else if (visited[node] === visited[s]) return false;
  }
  return true;
}

function pre(dp) {
  const maxn = 300009;
  dp[0] = 1;
  for (let i = 1; i < maxn; i++) dp[i] = mult(2, dp[i - 1] % MOD);
}

function mult(a, b) {
  let val = a * b;
  if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
    return val % MOD;
  return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function solve(A, B) {
  const adjList = getAdjacencyList(A, B);
  const visited = new Array(A + 1).fill(-1);
  const maxn = 300009;
  let dp = new Array(maxn).fill();
  pre(dp);
  let ans = 1;
  for (let i = 1; i <= A; i++) {
    if (visited[i] === -1) {
      visited[i] = 0;
      if (!dfs(i, adjList, visited)) return 0;
      let c0 = 0;
      let c1 = 0;
      for (let i = 1; i <= A; i++) {
        if (visited[i] === 0) c0++;
        else c1++;
      }
      const res = ((dp[c0] % MOD) + (dp[c1] % MOD)) % MOD;
      ans = mult(ans % MOD, res % MOD);
    }
  }

  return ans;
}

// const A = 2;
// const B = [[1, 2]];

// const A = 4;
// const B = [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4],
// ];

const A = 10000;
const B = [];

console.log(solve(A, B));
// console.log(Math.pow(2, 10000) % MOD);
