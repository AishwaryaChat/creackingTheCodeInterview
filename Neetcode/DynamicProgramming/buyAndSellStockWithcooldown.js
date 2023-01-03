// Best Time to Buy and Sell Stock with Cooldown
// Medium
// 7.8K
// 269
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
// Example 2:

// Input: prices = [1]
// Output: 0

// Constraints:

// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000


// SC - O(N)
// TC - O(N)
function recursive(i, buying, prices, dp) {
  if (i >= prices.length) return 0;
  const dpKey = `${i}_${buying}`;
  const val = dp[dpKey];
  if (val !== undefined) return val;
  const cooldown = recursive(i+1, buying, prices, dp)
  if(buying) {
    const buy = recursive(i+1, !buying, prices, dp) - prices[i]
    dp[dpKey] = Math.max(buy, cooldown)
  } else {
    const sell = recursive(i+2, !buying, prices, dp) + prices[i]
    dp[dpKey] = Math.max(sell, cooldown)
  }
  return dp[dpKey]
}

function solve(prices) {
  let dp = {};
  return recursive(0, true, prices, dp);
}

// const prices = [1,2,3,0,2]
const prices = [1]
console.log(solve(prices))
