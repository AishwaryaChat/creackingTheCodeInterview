// Max Rectangle in Binary Matrix

// Problem Description
// Given a 2-D binary matrix A of size N x M filled with 0's and 1's, find the largest rectangle containing only ones and return its area.

// Problem Constraints
// 1 <= N, M <= 100

// Input Format
// The first argument is a 2-D binary array A.

// Output Format
// Return an integer denoting the area of the largest rectangle containing only ones.

// Example Input
// Input 1:

//  A = [
//        [1, 1, 1]
//        [0, 1, 1]
//        [1, 0, 0]
//      ]
// Input 2:

//  A = [
//        [0, 1, 0]
//        [1, 1, 1]
//      ]

// Example Output
// Output 1:

//  4
// Output 2:

//  3

// Example Explanation
// Explanation 1:

//  As the max area rectangle is created by the 2x2 rectangle created by (0, 1), (0, 2), (1, 1) and (1, 2).
// Explanation 2:

//  As the max area rectangle is created by the 1x3 rectangle created by (1, 0), (1, 1) and (1, 2).

// More than DP this is a Prefix sum questions
// What are we doing here? - we are basically calculating the prefix sum of widths
// i.e we are finding sum of continuous 1's in a row, this will give us the max width for any current cell
// now we will iterate through the whole matrix and for every cell, we will go to the row above it and keep increasing the height and take minimum width among the cells and calculate area

// TC - O(N*N*M)
// To make this solution better for TC, if N>M then take a transpose of matrix and then do the same operations on transposed matrix, in that case complexity will become O(M * M * N), where M<N

function solve(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 1; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        A[i][j] += A[i][j - 1];
      }
    }
  }
  let maxArea = A[0][0];
  let minWidth = A[0][0];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] > 0) {
        minWidth = A[i][j];
        for (let k = i, h = 1; k >= 0; k--, h++) {
          const w = A[k][j];
          if (w === 0) break;
          minWidth = Math.min(minWidth, w);
          const a = minWidth * h;
          maxArea = Math.max(a, maxArea);
        }
      }
    }
  }
  return maxArea;
}

const A = [
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
];

// const A = [
//   [1, 1, 1],
//   [0, 1, 1],
//   [1, 0, 0],
// ];

// const A = [
//   [0, 1, 0],
//   [1, 1, 1],
// ];

// const A = [
//   [0, 1, 0, 1],
//   [1, 1, 1, 0],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1],
// ];

console.log(solve(A));
