// Matrix Chain Multiplication

// Problem Description
// Given an array of integers A representing chain of 2-D matices such that the dimensions of ith matrix is A[i-1] x A[i].

// Find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.

// Return the minimum number of multiplications needed to multiply the chain.

// Problem Constraints
// 1 <= length of the array <= 1000
// 1 <= A[i] <= 100

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return an integer denoting the minimum number of multiplications needed to multiply the chain.

// Example Input
// Input 1:

//  A = [40, 20, 30, 10, 30]
// Input 2:

//  A = [10, 20, 30]

// Example Output
// Output 1:

//  26000
// Output 2:

//  6000

// Example Explanation
// Explanation 1:

//  Dimensions of A1 = 40 x 20
//  Dimensions of A2 = 20 x 30
//  Dimensions of A3 = 30 x 10
//  Dimensions of A4 = 10 x 30
//  First, multiply A2 and A3 ,cost = 20*30*10 = 6000
//  Second, multilpy A1 and (Matrix obtained after multilying A2 and A3) =  40 * 20 * 10 = 8000
//  Third, multiply (Matrix obtained after multiplying A1, A2 and A3) and A4 =  40 * 10 * 30 = 12000
//  Total Cost = 12000 + 8000 + 6000 =26000
// Explanation 2:

//  Cost to multiply two matrices with dimensions 10 x 20 and 20 x 30 = 10 * 20 * 30 = 6000.

// TC - O(N^3)
// SC - O(N^2)

function solve(A) {
  const N = A.length - 1;
  let dp = new Array(N).fill().map(() => []);
  for (let gap = 0; gap < N; gap++) {
    for (let i = 0, j = gap; j < N; i++, j++) {
      if (gap == 0) dp[i][j] = 0;
      else if (gap == 1) {
        dp[i][j] = A[i] * A[j] * A[j + 1];
      } else {
        let minCost = Number.MAX_SAFE_INTEGER;
        for (let k = i; k < j; k++) {
          const leftCost = dp[i][k];
          const rightCost = dp[k + 1][j];
          const thisCost = A[i] * A[k + 1] * A[j + 1];
          minCost = Math.min(minCost, leftCost + rightCost + thisCost);
        }
        dp[i][j] = minCost;
      }
    }
  }
  return dp[0][N - 1];
}

const A = [5, 4, 6, 2, 7];
console.log(solve(A));
