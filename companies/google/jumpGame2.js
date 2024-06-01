// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/
// Medium
// Topics
// Companies
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].

// TC - O(N^2)
// SC - O(N)
function dfs(nums, pos, dp) {
  if (pos === nums.length - 1) return 0;
  if (nums[pos] === 0) return Infinity;
  if (dp[pos] !== undefined) return dp[pos];
  let ans = Infinity;
  for (let i = pos + 1; i <= pos + nums[pos] && i < nums.length; i++) {
    ans = Math.min(ans, 1 + dfs(nums, i, dp));
  }
  return (dp[pos] = ans);
}

function solveTopDown(nums) {
  let dp = {};
  return dfs(nums, 0, dp);
}

// TC - O(N)
// SC - O(1)
var solveGreedy = function (nums) {
  let end = 0;
  let far = 0;
  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (far < i + nums[i]) far = Math.max(far, i + nums[i]);
    if (i === end) {
      ans += 1;
      end = far;
    }
  }
  return ans;
};
