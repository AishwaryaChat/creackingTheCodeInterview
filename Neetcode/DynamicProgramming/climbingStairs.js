// Climbing Stairs
// Easy

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

// TC - O(N)
// TC = O(N)
function solve(n) {
  let DP = new Array(n + 1).fill(0);
  DP[0] = 1;
  DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= n; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }
  return DP[n];
}

// TC - O(N)
// SC - O(1)
function solveSpaceOptimised(n) {
  let DP = new Array(n + 1).fill(0);
  DP[0] = 1;
  DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= n; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }
  return DP[n];
}

// TC - O(N)
// SC - O(N) // including stack space and DP space

function recursiveStairs(n, DP) {
  if (n < 2) return 1
  if (DP[n] === 0) {
    DP[n] = recursiveStairs(n-1, DP) + recursiveStairs(n-2, DP);
  }
  return DP[n];
}

function solveRecursive(n) {
    let DP = new Array(n+1).fill(0)
    return recursiveStairs(n, DP)
}

const N = 10;
console.log(solveRecursive(N));
