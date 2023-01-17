// Unique Paths III

// Problem Description
// Given a matrix of integers A of size N x M . There are 4 types of squares in it:

// 1. 1 represents the starting square.  There is exactly one starting square.
// 2. 2 represents the ending square.  There is exactly one ending square.
// 3. 0 represents empty squares we can walk over.
// 4. -1 represents obstacles that we cannot walk over.
// Find and return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

// Note: Rows are numbered from top to bottom and columns are numbered from left to right.

// Problem Constraints
// 2 <= N * M <= 20
// -1 <= A[i] <= 2

// Input Format
// The first argument given is the integer matrix A.

// Output Format
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

// Example Input
// Input 1:

// A = [   [1, 0, 0, 0]
//         [0, 0, 0, 0]
//         [0, 0, 2, -1]   ]
// Input 2:

// A = [   [0, 1]
//         [2, 0]    ]

// Example Output
// Output 1:

// 2
// Output 2:

// 0

// Example Explanation
// Explanation 1:

// We have the following two paths:
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
// 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
// Explanation 1:

// Answer is evident here.

// TC - O(4^(N*M)), 4 because for each cell we are trying 4 possibilities, right, left, up, down
// SC - O(N*M)
function countZeros(A) {
  return A.reduce((acc, a) => {
    acc += a.reduce((acc2, b) => {
      acc2 += b === 0 ? 1 : 0;
      return acc2;
    }, 0);
    return acc;
  }, 0);
}

function findSource(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) return [i, j];
    }
  }
}

const cx = [0, 1, 0, -1];
const cy = [1, 0, -1, 0];

function solve(A) {
  const countOfZeros = countZeros(A);
  const [sx, sy] = findSource(A);
  const visited = new Array(A.length)
    .fill()
    .map(() => new Array(A[0].length).fill(false));
  visited[sx][sy] = true;
  let totalPaths = 0;
  function findNumberOfPaths(
    i,
    j,
    A,
    totalZeroCount,
    totalZerosInPath,
    visited
  ) {
    const M = A.length;
    const N = A[0].length;
    if (A[i][j] === 2 && totalZerosInPath === totalZeroCount) {
      totalPaths += 1;
      return;
    } else if (A[i][j] === 2) {
      return;
    }
    visited[i][j] = true;
    for (let k = 0; k < cx.length; k++) {
      const m = i + cx[k];
      const n = j + cy[k];
      if (
        m >= 0 &&
        m < M &&
        n >= 0 &&
        n < N &&
        A[m][n] !== -1 &&
        !visited[m][n]
      ) {
        totalZerosInPath += A[m][n] === 0 ? 1 : 0;
        findNumberOfPaths(m, n, A, totalZeroCount, totalZerosInPath, visited);
        totalZerosInPath -= A[m][n] === 0 ? 1 : 0;
        visited[m][n] = false;
      }
    }
    return totalPaths;
  }
  return findNumberOfPaths(sx, sy, A, countOfZeros, 0, visited);
}

const A = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
];
// Input 2:

// const A = [
//   [0, 1],
//   [2, 0],
// ];
console.log(solve(A));
