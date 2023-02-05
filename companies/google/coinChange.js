// Coin Change
// Medium
// 15.2K
// 352
// company
// Amazon
// company
// TikTok
// company
// Bloomberg
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

// TC - O(S*N)
// SC - O(N) - N is number of coins
function findRecursive(coins, sum, dp) {
  if (sum === 0) return 0;
  if (dp[sum] !== undefined) return dp[sum];
  dp[sum] = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < coins.length; i++) {
    const diff = sum - coins[i];
    if (diff >= 0) {
      dp[sum] = Math.min(dp[sum], 1 + findRecursive(coins, diff, dp));
    }
  }
  return dp[sum];
}

function solve(coins, amount) {
  if (amount === 0) return 0;
  let dp = {};
  findRecursive(coins, amount, dp);
  console.log(dp);
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}

// TC - O(S*N)
// SC - O(N) - N is number of coins
function solveIterative(coins, amount) {
  if (amount === 0) return 0;
  let dp = {};
  dp[0] = 0;
  for (let sum = 1; sum <= amount; sum++) {
    dp[sum] = amount + 1;
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= sum) {
        dp[sum] = Math.min(dp[sum], 1 + dp[sum - coins[j]]);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// const coins = [1,2,5], amount = 11
// Output: 3

const coins = [2],
  amount = 3;
// Output: -1

// const coins = [1],
//   amount = 0;
// Output: 0

// const coins =[474,83,404,3]
// const amount =264

console.log(solveIterative(coins, amount));
