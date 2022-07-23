/*
Number of islands

Problem Description
Given a matrix of integers A of size N x M consisting of 0 and 1. A group of connected 1's forms an island. From a cell (i, j) such that A[i][j] = 1 you can visit any cell that shares a corner with (i, j) and value in that cell is 1.

More formally, from any cell (i, j) if A[i][j] = 1 you can visit:

(i-1, j) if (i-1, j) is inside the matrix and A[i-1][j] = 1.
(i, j-1) if (i, j-1) is inside the matrix and A[i][j-1] = 1.
(i+1, j) if (i+1, j) is inside the matrix and A[i+1][j] = 1.
(i, j+1) if (i, j+1) is inside the matrix and A[i][j+1] = 1.
(i-1, j-1) if (i-1, j-1) is inside the matrix and A[i-1][j-1] = 1.
(i+1, j+1) if (i+1, j+1) is inside the matrix and A[i+1][j+1] = 1.
(i-1, j+1) if (i-1, j+1) is inside the matrix and A[i-1][j+1] = 1.
(i+1, j-1) if (i+1, j-1) is inside the matrix and A[i+1][j-1] = 1.
Return the number of islands.

NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.



Problem Constraints
1 <= N, M <= 100

0 <= A[i] <= 1



Input Format
The only argument given is the integer matrix A.



Output Format
Return the number of islands.



Example Input
Input 1:

 A = [ 
       [0, 1, 0]
       [0, 0, 1]
       [1, 0, 0]
     ]
Input 2:

 A = [   
       [1, 1, 0, 0, 0]
       [0, 1, 0, 0, 0]
       [1, 0, 0, 1, 1]
       [0, 0, 0, 0, 0]
       [1, 0, 1, 0, 1]    
     ]


Example Output
Output 1:

 2
Output 2:

 5


Example Explanation
Explanation 1:

 The 1's at position A[0][1] and A[1][2] forms one island.
 Other is formed by A[2][0].
Explanation 2:

 There 5 island in total.
*/
// Idea here is to travel each cell, then traverse 8 neighbouring cell of each cell
// and mark them visited, this will be one island
// Keep counting islands like this
// TC - O(rows * column)
// SC - O(rows * column) - stack space - here we are using the given matrix for marking visited elements so we dont need extra N * M space for that
// If we are not allowed to modify givem matrix then we will have to have another
// N * M space for visited array

function dfs(i, j, A, N, M) {
  A[i][j] = 2; // marking visited
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, 1, 0, -1];
  for (let k = 0; k < 8; k++) {
    const u = i + dx[k];
    const v = j + dy[k];
    if (u >= 0 && u <= N && v >= 0 && v <= M && A[u][v] === 1) {
      dfs(u, v, A, N, M);
    }
  }
}

function solve(A) {
  let ans = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        ans++;
        dfs(i, j, A, A.length - 1, A[0].length - 1);
      }
    }
  }
  return ans;
}

// const A = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 0, 0],
// ];

const A = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

console.log(solve(A));
