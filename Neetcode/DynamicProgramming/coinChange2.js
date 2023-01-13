// Coin Change II
// Medium

// company
// Amazon
// Bloomberg
// Google
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

// Constraints:

// 1 <= coins.length <= 300
// 1 <= coins[i] <= 5000
// All the values of coins are unique.
// 0 <= amount <= 5000

function recursive(dp, amount, coins) {
  if (amount === 0) return 1;
  if (dp[amount] !== undefined) return dp[amount];
  dp[amount] = 0;
  for (let j = 0; j < coins.length; j++) {
    if (amount - coins[j] >= 0) {
      dp[amount] += recursive(dp, amount - coins[j], coins);
    }
  }
  return dp[amount];
}

function solve(amount, coins) {
  const dp = new Array(coins.length + 1).fill();
  dp[0] = 0;
  return recursive(dp, amount, coins);
}

// brute force
// TC - O(N^amount)
function recursiveDistinctCombinations(i, amount, coins) {
  if (amount === 0) return 1;
  if (i >= coins.length) return 0;
  const isLess = amount < coins[i];
  if (isLess) return recursiveDistinctCombinations(i + 1, amount, coins);
  const notSelecting = recursiveDistinctCombinations(i + 1, amount, coins);
  const selecting = recursiveDistinctCombinations(i, amount - coins[i], coins);
  return notSelecting + selecting;
}

function solveRecursive(amount, coins) {
  const ans = recursiveDistinctCombinations(0, amount, coins);
  return ans;
}

// memoised recursive
function recursiveMemoised(i, amount, coins, dp) {
  if (amount === 0) return 1;
  if (i >= coins.length) return 0;
  if (dp[i][amount] !== undefined) return dp[i][amount];
  const isLess = amount < coins[i];
  if (isLess) return recursiveMemoised(i + 1, amount, coins, dp);
  const notSelecting = recursiveMemoised(i + 1, amount, coins, dp);
  const selecting = recursiveMemoised(i, amount - coins[i], coins, dp);
  dp[i][amount] = notSelecting + selecting;
  return dp[i][amount];
}

function solveRecursiveMemoised(amount, coins) {
  const dp = new Array(coins.length).fill().map(() => new Array(amount + 1));
  dp[0][0] = 1;
  const ans = recursiveMemoised(0, amount, coins, dp);
  return ans;
}

// TC - O(N*A)
// SC - O(A)
function solveIterativeOptimized(amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1; // there is only 1 way to get amount zero, which is by not selecting anything
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (coins[i] <= j) {
        dp[j] += dp[j - coins[i]];
      }
    }
  }
  return dp[amount];
}
const amount = 5;
const coins = [1, 2, 5];

console.log(solveIterative(amount, coins));
