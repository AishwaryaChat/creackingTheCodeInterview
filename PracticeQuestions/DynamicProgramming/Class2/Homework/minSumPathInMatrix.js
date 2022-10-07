// Min Sum Path in Matrix

// Problem Description
// Given a M x N grid A of integers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Return the minimum sum of the path.

// NOTE: You can only move either down or right at any point in time.

// Problem Constraints
// 1 <= M, N <= 2000

// -1000 <= A[i][j] <= 1000

// Input Format
// First and only argument is a 2-D grid A.

// Output Format
// Return an integer denoting the minimum sum of the path.

// Example Input
// Input 1:

//  A = [
//        [1, 3, 2]
//        [4, 3, 1]
//        [5, 6, 1]
//      ]
// Input 2:

//  A = [
//        [1, -3, 2]
//        [2, 5, 10]
//        [5, -5, 1]
//      ]

// Example Output
// Output 1:

//  8
// Output 2:

//  -1

// Example Explanation
// Explanation 1:

//  The path will be: 1 -> 3 -> 2 -> 1 -> 1.
// Input 2:

//  The path will be: 1 -> -3 -> 5 -> -5 -> 1.

// TC - O(N * M)
// If we are allowed to modify the given input then
// SC - O(1)
// else 
// SC - O(N * M)
function solve(A) {
  const N = A.length - 1;
  const M = A[0].length - 1;
  for (let i = N; i >= 0; i--) {
    for (let j = M; j >= 0; j--) {
      if (i !== N || j !== M) {
        if (i == N) {
          A[i][j] = A[i][j] + A[i][j + 1];
        } else if (j == M) {
          A[i][j] = A[i][j] + A[i + 1][j];
        } else {
          A[i][j] = A[i][j] + Math.min(A[i][j + 1], A[i + 1][j]);
        }
      }
    }
  }
  return A[0][0];
}

// const A = [
//   [1, 3, 2],
//   [4, 3, 1],
//   [5, 6, 1],
// ];

const A = [
  [1, -3, 2],
  [2, 5, 10],
  [5, -5, 1],
];

console.log(solve(A))
