// House Robber
// Medium
// company
// Bloomberg
// Amazon
// Cisco
// Google
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

// TC - O(N)
// SC - O(N)
function solve(nums) {
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
}

// TC - O(N)
// SC - O(1)
function spaceOptimised(nums) {
  if (nums.length === 1) return nums[0];
  let dp0 = nums[0];
  let dp1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const temp = Math.max(dp1, dp0 + nums[i]);
    dp0 = dp1;
    dp1 = temp;
  }
  return dp1;
}

// TC - O(N)
// SC - O(N), for recursion stack and dp
function recursive(nums, pos, dp) {
  if (dp[pos] !== undefined) return dp[pos];
  if (pos >= nums.length) return 0;
  return (dp[pos] = Math.max(
    recursive(nums, pos + 1, dp),
    nums[pos] + recursive(nums, pos + 2, dp)
  ));
}

var solveRecursive = function (nums) {
  let dp = [];
  return recursive(nums, 0, dp);
};

// const nums = [1,2,3,1]
// Output: 4

// const nums = [2,7,9,3,1]
// Output: 12

console.log(solve(nums));
