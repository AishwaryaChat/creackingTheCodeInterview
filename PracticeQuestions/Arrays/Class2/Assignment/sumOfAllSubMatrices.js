/*
Sum of all Submatrices

Problem Description
Given a 2D Matrix A of dimensions N*N, we need to return the sum of all possible submatrices.



Problem Constraints
1 <= N <=30

0 <= A[i][j] <= 10



Input Format
Single argument representing a 2-D array A of size N x N.



Output Format
Return an integer denoting the sum of all possible submatrices in the given matrix.



Example Input
A = [ [1, 1]
      [1, 1] ]


Example Output
16


Example Explanation
Number of submatrices with 1 elements = 4, so sum of all such submatrices = 4 * 1 = 4
Number of submatrices with 2 elements = 4, so sum of all such submatrices = 4 * 2 = 8
Number of submatrices with 3 elements = 0
Number of submatrices with 4 elements = 1, so sum of such submatrix = 4
Total Sum = 4+8+4 = 16
*/

// This is called contribution technique
// Basically we are trying to find contribution of each element in total number of sub matrices
// How we do that? for each elemnt we will find out in how mnay sub matrices it is present
// Multiply this number with A[i][j] and add it to sum
// TC - O(N*M)
// SC - O(1)

function solve(A) {
  const N = A.length;
  const M = A[0].length;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum += A[i][j] * (i + 1) * (j + 1) * (N - i) * (M - j);
    }
  }
  return sum;
}

const A = [
  [1, 1],
  [1, 1],
];

console.log(solve(A));
