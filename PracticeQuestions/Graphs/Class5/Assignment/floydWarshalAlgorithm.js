// Floyd Warshall Algorithm

// Problem Description
// Given a matrix of integers A of size N x N, where A[i][j] represents the weight of directed edge from i to j (i ---> j).

// If i == j, A[i][j] = 0, and if there is no directed edge from vertex i to vertex j, A[i][j] = -1.

// Return a matrix B of size N x N where B[i][j] = shortest path from vertex i to vertex j.

// If there is no possible path from vertex i to vertex j , B[i][j] = -1

// Note: Rows are numbered from top to bottom and columns are numbered from left to right.

// Problem Constraints
// 1 <= N <= 200
// -1 <= A[i][j] <= 1000000

// Input Format
// The first and only argument given is the integer matrix A.

// Output Format
// Return a matrix B of size N x N where B[i][j] = shortest path from vertex i to vertex j
// If there is no possible path from vertex i to vertex j, B[i][j] = -1.

// Example Input
// A = [ [0 , 50 , 39]
//           [-1 , 0 , 1]
//           [-1 , 10 , 0] ]

// Example Output
// [ [0 , 49 , 39 ]
//    [-1 , 0 , -1 ]
//    [-1 , 10 , 0 ] ]

// Example Explanation
// Shortest Path from 1 to 2 would be 1 ---> 3 ---> 2 and not directly from 1 to 2,
// All remaining distances remains same.

// The below solution is given for Floyd's warshal Algorithm
// This algorithm works for finding shortest path to travel from any node to any other node in the given graph
// The idea is to consider each node as intermediate node and calculate distance between every other pair of nodes using this node as intermediate node

// TC - O(N^3)
// SC - O(1), if we are using the given matrix, otherwise O(N^2)
function solve(A) {
  const N = A.length;
  const M = A[0].length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] === -1) A[i][j] = Number.MAX_SAFE_INTEGER;
    }
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        A[i][j] = Math.min(A[i][j], A[i][k] + A[k][j]);
      }
    }
  }
  return A.map((a) => a.map((b) => (b === Number.MAX_SAFE_INTEGER ? -1 : b)));
}

const A = [
  [0, 50, 39],
  [-1, 0, 1],
  [-1, 10, 0],
];

// Example Output
// [ [0 , 49 , 39 ],
//    [-1 , 0 , -1 ],
//    [-1 , 10 , 0 ], ],

console.log(solve(A));
