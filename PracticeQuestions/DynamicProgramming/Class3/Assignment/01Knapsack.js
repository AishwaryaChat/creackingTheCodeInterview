// 0-1 Knapsack
// Unsolved
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description
// Given two integer arrays A and B of size N each which represent values and weights associated with N items respectively.

// Also given an integer C which represents knapsack capacity.

// Find out the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.

// NOTE:

// You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).

// Problem Constraints
// 1 <= N <= 103

// 1 <= C <= 103

// 1 <= A[i], B[i] <= 103

// Input Format
// First argument is an integer array A of size N denoting the values on N items.

// Second argument is an integer array B of size N denoting the weights on N items.

// Third argument is an integer C denoting the knapsack capacity.

// Output Format
// Return a single integer denoting the maximum value subset of A such that sum of the weights of this subset is smaller than or equal to C.

// Example Input
// Input 1:

//  A = [60, 100, 120]
//  B = [10, 20, 30]
//  C = 50
// Input 2:

//  A = [10, 20, 30, 40]
//  B = [12, 13, 15, 19]
//  C = 10

// Example Output
// Output 1:

//  220
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  Taking items with weight 20 and 30 will give us the maximum value i.e 100 + 120 = 220
// Explanation 2:

//  Knapsack capacity is 10 but each item has weight greater than 10 so no items can be considered in the knapsack therefore answer is 0.

// function solveKnapsack(index, A, B, remainingWeight, dp) {
//     if(index===A.length-1 && remainingWeight > 0) return A[index]
//     select
//     notselect'
// }

function solve(A, B, C) {
  let dp = [];
  let N = A.length;
  for (let i = 0; i <= N; i++) {
    dp[i] = [];
    for (let j = 0; j <= C; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 0; i < N; i++) {
    for (let w = 0; w <= C; w++) {
      if (B[i] <= w) {
        // Exclude or include
        dp[i + 1][w] = Math.max(dp[i][w], dp[i][w - B[i]] + A[i]);
      } else {
        // Exclude
        dp[i + 1][w] = dp[i][w];
      }
    }
  }
  return dp[A.length][C];
}

// A = [60, 100, 120];
// B = [10, 20, 30];
// C = 50;
// Input 2:

//  A = [10, 20, 30, 40]
//  B = [12, 13, 15, 19]
//  C = 10

const A = [359, 963, 465, 706, 146, 282, 828, 962, 492];
const B = [96, 43, 28, 37, 92, 5, 3, 54, 93];
const C = 383;

console.log(solve(A, B, C));
