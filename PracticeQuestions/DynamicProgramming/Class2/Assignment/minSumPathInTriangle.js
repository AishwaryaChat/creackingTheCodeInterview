/*
Min Sum Path in Triangle

Problem Description
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

Adjacent numbers for jth number of row i is jth and (j+1)th numbers of row i+1 is



Problem Constraints
|A| <= 1000

A[i] <= 1000



Input Format
First and only argument is the vector of vector A defining the given triangle



Output Format
Return the minimum sum



Example Input
Input 1:

 
A = [ 
         [2],
        [3, 4],
       [6, 5, 7],
      [4, 1, 8, 3]
    ]
Input 2:

 A = [ [1] ]


Example Output
Output 1:

 11
Output 2:

 1


Example Explanation
Explanation 1:

 The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
Explanation 2:

 Only 2 can be collected.

*/

// The idea here is to consider we are standing at any point (i, j) and we have to reach the destination
// So here we are starting from destination and then at every point we take minimum from previous row
// TC - O(N^2)
// SC - O(N^2)
// This is bottom up approach

function solve(A) {
  let DP = [];
  let N = A.length;
  for (let i = 0; i < N; i++) {
    DP[i] = [];
    for (let j = 0; j < A[i].length; j++) {
      DP[i][j] = 0;
    }
  }

  for (let i = N - 1; i >= 0; i--) {
    let M = A[i].length;
    for (let j = M - 1; j >= 0; j--) {
      if (i == N - 1) {
        // This is because for last row, we do not have any other way to go so that element will be the answer for that cell
        DP[i][j] = A[i][j];
      } else {
        DP[i][j] = A[i][j] + Math.min(DP[i + 1][j], DP[i + 1][j + 1]);
      }
    }
  }
  console.log(DP)
  return DP[0][0];
}

const A = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// const A = [[1]];

console.log(solve(A));

// Space complexity can be optimised by using two array, one for current row another for i+1th row, since we only need these 2
// SC = O(N)
// TC = O(N^2)

function solveOptimised(A) {
  let DP = [];
  let DPiPlus1 = [];
  let N = A.length;
  for (let i = N - 1; i >= 0; i--) {
    let M = A[i].length;
    for (let j = M - 1; j >= 0; j--) {
      if (i === N - 1) DP[j] = A[i][j];
      else {
        DP[j] = A[i][j] + Math.min(DPiPlus1[j], DPiPlus1[j + 1]);
      }
    }
    DPiPlus1 = DP.map((a) => a);
  }
  return DP[0];
}

// const A = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// const A = [[1]];

// console.log(solveOptimised(A));


// Top-down approach

