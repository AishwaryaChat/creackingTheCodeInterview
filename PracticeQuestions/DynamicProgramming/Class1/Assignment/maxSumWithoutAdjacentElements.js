/*
Max Sum Without Adjacent Elements

Get help from TA.
Problem Description

Given a 2 x N grid of integer, A, choose numbers such that the sum of the numbers is maximum and no two chosen numbers are adjacent horizontally, vertically or diagonally, and return it.

Note: You can choose more than 2 numbers.



Problem Constraints

1 <= N <= 20000
1 <= A[i] <= 2000



Input Format

The first and the only argument of input contains a 2d matrix, A.



Output Format

Return an integer, representing the maximum possible sum.



Example Input

Input 1:

 A = [   
        [1]
        [2]    
     ]
Input 2:

 A = [   
        [1, 2, 3, 4]
        [2, 3, 4, 5]    
     ]


Example Output

Output 1:

 2
Output 2:

 8


Example Explanation

Explanation 1:

 We will choose 2.
Explanation 2:

 We will choose 3 and 5.
*/

// Solution for 1D array where only adjacent elements are not allowed
// So Idea here is store answer for every index in dp array
// for every index, either current element + answer from 2 previous element will be the answer, or answer from 1 previous answer will be the answer, so we will choose max of these 2

function solve(A) {
  let N = A.length;
  let dp = [A[0], Math.max(A[0], A[1])];
  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(A[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[N - 1];
}

// const A = [2, 3, 4, 5];
// const A = [1, 8, 3, 4, 7];

// console.log(solve(A));

// Solution for original questions
// If we read the question carefull then we get to know that we can never take both elements from 1 single column, so we can simply take the maximum of 2, in this way we can convert 2D matrix to 1D and solve similarly as above
// TC = O(N)
// SC = O(N) - including DP and new array
function solve2(A) {
  let N = A[0].length;
  let newA = [];
  for (let j = 0; j < N; j++) {
    newA[j] = Math.max(A[0][j], A[1][j]);
  }
  let dp = [newA[0], Math.max(newA[0], newA[1])];
  for (let i = 2; i < N; i++) {
    dp[i] = Math.max(newA[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[N - 1];
}

const A = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
];

console.log(solve2(A))
