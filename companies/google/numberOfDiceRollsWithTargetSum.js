// Number of Dice Rolls With Target Sum
// Medium
// 3.7K
// 120
// company
// Google
// company
// Apple
// company
// Amazon
// You have n dice, and each die has k faces numbered from 1 to k.

// Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.

// Example 1:

// Input: n = 1, k = 6, target = 3
// Output: 1
// Explanation: You throw one die with 6 faces.
// There is only one way to get a sum of 3.
// Example 2:

// Input: n = 2, k = 6, target = 7
// Output: 6
// Explanation: You throw two dice, each with 6 faces.
// There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
// Example 3:

// Input: n = 30, k = 30, target = 500
// Output: 222616187
// Explanation: The answer must be returned modulo 109 + 7.

// Constraints:

// 1 <= n, k <= 30
// 1 <= target <= 1000

// TC - O(N * T * K), where N is n, T is target and K is k
// SC - O(N * T), stack space + dp space
let MOD = 1e9 + 7;

function recurse(pos, n, k, target, dp) {
  const key = `${pos}_${target}`;
  if (dp[key] !== undefined) return dp[key];
  if (pos === n) {
    if (target === 0) {
      dp[key] = 1;
      return 1;
    }
    dp[key] = 0;
    return 0;
  }
  let ans = 0;
  for (let i = 1; i <= k && i <= target; i++) {
    ans =
      ((ans % MOD) + (recurse(pos + 1, n, k, target - i, dp, ans) % MOD)) % MOD;
  }
  dp[key] = ans;
  return dp[key];
}
function solve(n, k, target) {
  let dp = {};
  return recurse(0, n, k, target, dp, 0);
}

function solveIterative(n, k, target) {
  let dp = new Array(n + 1).fill().map(() => new Array(target + 1).fill(0));
  dp[n][target] = 1;
  for (let diceIndex = n - 1; diceIndex >= 0; diceIndex--) {
    for (let currSum = 0; currSum <= target; currSum++) {
      let ways = 0;
      for (let face = 1; face <= Math.min(target - currSum, k); face++) {
        ways = (ways%MOD + dp[diceIndex + 1][currSum + face]%MOD)%MOD;
      }
      dp[diceIndex][currSum] = ways;
    }
  }
  return dp[0][0];
}

// const n = 1
// const k = 6
// const target = 3
// Output: 1

// const n = 2
// const k = 6
// const target = 7
// Output: 6

const n = 30;
const k = 30;
const target = 500;
// Output: 222616187

console.log(solveIterative(n, k, target));
