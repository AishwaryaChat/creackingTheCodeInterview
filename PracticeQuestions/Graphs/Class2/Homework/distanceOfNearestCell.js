// Distance of nearest cell

// Problem Description
// Given a matrix of integers A of size N x M consisting of 0 or 1.

// For each cell of the matrix find the distance of nearest 1 in the matrix.

// Distance between two cells (x1, y1) and (x2, y2) is defined as |x1 - x2| + |y1 - y2|.

// Find and return a matrix B of size N x M which defines for each cell in A distance of nearest 1 in the matrix A.

// NOTE: There is atleast one 1 is present in the matrix.

// Problem Constraints
// 1 <= N, M <= 1000

// 0 <= A[i][j] <= 1

// Input Format
// The first argument given is the integer matrix A.

// Output Format
// Return the matrix B.

// Example Input
// Input 1:

//  A = [
//        [0, 0, 0, 1]
//        [0, 0, 1, 1]
//        [0, 1, 1, 0]
//      ]
// Input 2:

//  A = [
//        [1, 0, 0]
//        [0, 0, 0]
//        [0, 0, 0]
//      ]

// Example Output
// Output 1:

//  [
//    [3, 2, 1, 0]
//    [2, 1, 0, 0]
//    [1, 0, 0, 1]
//  ]
// Output 2:

//  [
//    [0, 1, 2]
//    [1, 2, 3]
//    [2, 3, 4]
//  ]

// Example Explanation
// Explanation 1:

//  A[0][0], A[0][1], A[0][2] will be nearest to A[0][3].
//  A[1][0], A[1][1] will be nearest to A[1][2].
//  A[2][0] will be nearest to A[2][1] and A[2][3] will be nearest to A[2][2].
// Explanation 2:

//  There is only a single 1. Fill the distance from that 1.

const Queue = require("../../../Queues/arrayImpelemtation");

// TC - O(M*N*M*N)
// SC - O(M*N)
// This is a brute force solution, where for each cell we are running BFS to get the answer
function solveN3(A) {
  const M = A.length;
  const N = A[0].length;
  let ans = new Array(M).fill().map(() => new Array(N).fill(-1));
  const cx = [-1, 0, 1, 0];
  const cy = [0, 1, 0, -1];
  for (let i = 0; i < M; i++) {
    for (j = 0; j < N; j++) {
      let queue = new Queue();
      queue.enqueue({ i, j, steps: 0 });
      let visited = new Array(M).fill().map(() => new Array(N).fill(false));
      visited[i][j] = true;
      while (!queue.isEmpty()) {
        const { i: x, j: y, steps } = queue.dequeue();
        if (A[x][y] === 1) {
          ans[i][j] = steps;
          break;
        }
        for (let k = 0; k < cx.length; k++) {
          const m = x + cx[k];
          const n = y + cy[k];
          if (m >= 0 && m < M && n >= 0 && n < N && !visited[m][n]) {
            queue.enqueue({ i: m, j: n, steps: steps + 1 });
            visited[m][n] = true;
          }
        }
      }
    }
  }
  return ans;
}

// Here we are using multisource bfs
// First we will add all the nodes with value 1 in the queue and then we will propogate
// TC - O(M*N)
// SC - O(M*N)
function solveOptimized(A) {
  const M = A.length;
  const N = A[0].length;
  let ans = new Array(M)
    .fill()
    .map(() => new Array(N).fill(Number.MAX_SAFE_INTEGER));
  const cx = [-1, 0, 1, 0];
  const cy = [0, 1, 0, -1];
  let queue = new Queue();
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i][j] === 1) {
        ans[i][j] = 0;
        queue.enqueue({ i, j });
      }
    }
  }
  while (!queue.isEmpty()) {
    let { i, j } = queue.dequeue();
    const distanceParent = ans[i][j];
    for (let k = 0; k < cx.length; k++) {
      const m = i - cx[k];
      const n = j - cy[k];
      if (
        m >= 0 &&
        m < M &&
        n >= 0 &&
        n < N &&
        distanceParent + 1 < ans[m][n]
      ) {
        ans[m][n] = distanceParent + 1;
        queue.enqueue({ i: m, j: n });
      }
    }
  }
  return ans;
}

const A = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
  [0, 1, 1, 0],
];
// O/P
//  [
//    [3, 2, 1, 0]
//    [2, 1, 0, 0]
//    [1, 0, 0, 1]
//  ]

// const A = [
//        [1, 0, 0],
//        [0, 0, 0],
//        [0, 0, 0],
//      ]

// const A = [
//   [1, 1, 1, 1, 1, 0],
//   [0, 0, 1, 1, 1, 0],
//   [0, 0, 0, 0, 1, 1],
// ];
// OP
// actual OP - [[ 0, 0, 0, 0, 0, 1 ], [ 1, 1, 0, 0, 0, 1 ], [ 2, 2, 1, 1, 0, 0 ] ]
//my OP -      [[ 0, 0, 0, 0, 0, 1 ], [ 2, 1, 0, 0, 0, 1 ], [ 3, 2, 1, 1, 0, 0 ] ]

console.log(solveOptimized(A));
