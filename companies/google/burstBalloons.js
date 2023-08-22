// 312. Burst Balloons
// Hard
// company
// PhonePe
// Amazon
// Google
// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

// Return the maximum coins you can collect by bursting the balloons wisely.

// Example 1:

// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// Example 2:

// Input: nums = [1,5]
// Output: 10

// Constraints:

// n == nums.length
// 1 <= n <= 300
// 0 <= nums[i] <= 100

// The intution here is select a baloon that you want to burst at end, burst remaining left and right side balloons and find maximum among all these choices
// TC - O(N^3), overall there ar N^2 state and to find maximum coin for each state we are iterating over all balloon in that range
// SC - O(N^2)

function dfs(nums, left, right, dp) {
  if (right - left < 0) return 0;
  const key = `${left}_${right}`;
  if (dp[key] !== undefined) return dp[key];
  dp[key] = 0;
  for (let i = left; i <= right; i++) {
    const lastBalloonBurst = nums[left - 1] * nums[i] * nums[right + 1];
    const remainingBalloons =
      dfs(nums, left, i - 1, dp) + dfs(nums, i + 1, right, dp);
    dp[key] = Math.max(dp[key], lastBalloonBurst + remainingBalloons);
  }
  return dp[key];
}

function solve(nums) {
  nums = [1, ...nums, 1];
  return dfs(nums, 1, nums.length - 2, {});
}

const nums = [3, 1, 5, 8];
// Output: 167

// const nums = [1,5]
// Output: 10

console.log(solve(nums));
