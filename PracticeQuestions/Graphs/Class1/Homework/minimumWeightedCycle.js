/*
Minimum Weighted Cycle

Problem Description
Given an integer A, representing number of vertices in a graph.

Also you are given a matrix of integers B of size N x 3 where N represents number of Edges in a Graph and Triplet (B[i][0], B[i][1], B[i][2]) implies there is an undirected edge between B[i][0] and B[i][1] and weight of that edge is B[i][2].

Find and return the weight of minimum weighted cycle and if there is no cycle return -1 instead.

NOTE: Graph may contain multiple edges and self loops.



Problem Constraints
1 <= A <= 1000

1 <= B[i][0], B[i][1] <= A

1 <= B[i][2] <= 100000



Input Format
The first argument given is the integer A.

The second argument given is the integer matrix B.



Output Format
Return the weight of minimum weighted cycle and if there is no cycle return -1 instead.



Example Input
Input 1:

 A = 4
 B = [  [1 ,2 ,2]
        [2 ,3 ,3]
        [3 ,4 ,1]
        [4 ,1 ,4]
        [1 ,3 ,15]  ]
Input 2:

 A = 3
 B = [  [1 ,2 ,2]
        [2 ,3 ,3]  ]


Example Output
Output 1:

 10 
Output 2:

 -1


Example Explanation
Explanation 1:

 Given graph forms 3 cycles
 1. 1 ---> 2 ---> 3 ---> 4 ---> 1 weight = 10
 2. 1 ---> 2 ---> 3 ---> 1 weight = 20
 3. 1 ---> 3---> 4 ---> 1 weight = 20
 so answer would be 10.
Explanation 2:

 Given graph forms 0 cycles so return -1.
*/

function getAdjMatrix(A, B) {
  let adjMatrix = new Array(A + 1)
    .fill(null)
    .map(() => new Array(A + 1).fill(0));
  for (let i = 0; i < B.length; i++) {
    adjMatrix[B[i][0]][B[i][1]] = B[i][2];
  }
  return adjMatrix;
}

function dfs(adjMatrix, visited, path, s, result, weight) {
  visited[s] = true;
  path[s] = true;
  let nodes = adjMatrix[s];
  for (let i = 1; i < nodes.length; i++) {
    const nodeWeight = nodes[i];
    if (nodeWeight !== 0) {
      weight += nodeWeight;
      if (path[i]) {
        result.push(weight);
        weight -= nodeWeight;
      }
      if (!visited[i] || !path[i]) {
        dfs(adjMatrix, visited, path, i, result, weight);
      }
    }
  }
  path[s] = false;
}

function solve(A, B) {
  const adjMatrix = getAdjMatrix(A, B);
  let result = [];
  dfs(adjMatrix, [], [], 1, result, 0);
  return result.length === 0 ? -1 : Math.min(...result);
}

const A = 4;
const B = [
  [1, 2, 2],
  [2, 3, 3],
  [3, 4, 1],
  [4, 1, 4],
  [1, 3, 15],
];

// const A = 3;
// const B = [
//   [1, 2, 2],
//   [2, 3, 3],
// ];

// const A = 5;
// const B = [
//   [1, 2, 1],
//   [1, 5, 2],
//   [5, 4, 3],
//   [4, 3, 1],
//   [3, 2, 5],
//   [2, 5, 8],
//   [5, 3, 6],
// ];

console.log(solve2(A, B));
