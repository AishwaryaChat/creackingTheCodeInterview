// Coin Change
// Medium
// company
// Yahoo
// Amazon
// TikTok
// Paypal
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10^4

// Top-Down DP
// TC - O(S * n), where S is amount, n is number of coins
// SC - O(S), stack space and memoization space
function find(coins, target, amount, dp) {
  if (amount === target) return 0;
  if (dp[amount] !== undefined) return dp[amount];
  dp[amount] = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < coins.length; i++) {
    if (amount + coins[i] <= target) {
      dp[amount] = Math.min(
        dp[amount],
        find(coins, target, amount + coins[i], dp) + 1
      );
    }
  }
  return dp[amount];
}

function solve(coins, amount) {
  let dp = {};
  const ans = find(coins, amount, 0, dp);
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

// Iterative or Button-up dp
// TC - O(S*n)
// SC - O(S)
function solveIterative(coins, amount) {
  let dp = { 0: 0, 1: 1 };
  for (let sum = 1; sum <= amount; sum++) {
    dp[sum] = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= sum) {
        dp[sum] = Math.min(dp[sum], dp[sum - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}

const coins = [1, 2, 5];
const amount = 11;
// Output: 3

// const coins = [2];
// const amount = 3;
// Output: -1

// const coins = [1];
// const amount = 0;
// Output: 0

console.log(solveIterative(coins, amount));
