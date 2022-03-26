/*
Problem Description
Given a matrix of integers A of size N x M and multiple queries Q, for each query, find and return the submatrix sum.

Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out.

NOTE:

Rows are numbered from top to bottom, and columns are numbered from left to right.
Sum may be large, so return the answer mod 109 + 7.


Problem Constraints
1 <= N, M <= 1000
-100000 <= A[i] <= 100000
1 <= Q <= 100000
1 <= B[i] <= D[i] <= N
1 <= C[i] <= E[i] <= M



Input Format
The first argument given is the integer matrix A.
The second argument given is the integer array B.
The third argument given is the integer array C.
The fourth argument given is the integer array D.
The fifth argument given is the integer array E.
(B[i], C[i]) represents the top left corner of the i'th query.
(D[i], E[i]) represents the bottom right corner of the i'th query.



Output Format
Return an integer array containing the submatrix sum for each query.



Example Input
Input 1:

 A = [   [1, 2, 3]
         [4, 5, 6]
         [7, 8, 9]   ]
 B = [1, 2]
 C = [1, 2]
 D = [2, 3]
 E = [2, 3]
Input 2:

 A = [   [5, 17, 100, 11]
         [0, 0,  2,   8]    ]
 B = [1, 1]
 C = [1, 4]
 D = [2, 2]
 E = [2, 4]


Example Output
Output 1:

 [12, 28]
Output 2:

 [22, 19]

*/

function prefixSum(A) {
  let modulo = Math.pow(10, 9) + 7;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (i === 0 && j === 0) continue;
      if (i !== 0 && j !== 0) {
        A[i][j] =
          (((A[i][j - 1] + A[i - 1][j] - A[i - 1][j - 1] + A[i][j]) % modulo) +
            modulo) %
          modulo;
      } else if (i === 0) {
        A[i][j] = (((A[i][j - 1] + A[i][j]) % modulo) + modulo) % modulo;
      } else if (j === 0) {
        A[i][j] = (((A[i - 1][j] + A[i][j]) % modulo) + modulo) % modulo;
      }
    }
  }
  return A;
}

function getSubArraySum(A, i, j, k, l) {
  const modulo = Math.pow(10, 9) + 7;
  if (i == 0 && j == 0 && k == 0 && l == 0) return A[i][j];
  else if (i == 0) {
    if (j == 0) {
      return A[k][l];
    } else {
      return (((A[k][l] - A[k][j - 1]) % modulo) + modulo) % modulo;
    }
  } else if (j === 0) {
    return (((A[k][l] - A[i - 1][l]) % modulo) + modulo) % modulo;
  }
  return (
    (((A[k][l] - A[k][j - 1] - A[i - 1][l] + A[i - 1][j - 1]) % modulo) +
      modulo) %
    modulo
  );
}

function subMatrixSumQueries(A, B, C, D, E) {
  prefixSum(A);
  let result = [];
  for (let i = 0; i < B.length; i++) {
    result.push(getSubArraySum(A, B[i] - 1, C[i] - 1, D[i] - 1, E[i] - 1));
  }
  return result;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [1, 2];
const C = [1, 2];
const D = [2, 3];
const E = [2, 3];

console.log(subMatrixSumQueries(A, B, C, D, E));

const F = [
  [5, 17, 100, 11],
  [0, 0, 2, 8],
];

const G = [1, 1];
const H = [1, 4];
const I = [2, 2];
const J = [2, 4];
console.log(subMatrixSumQueries(F, G, H, I, J));
