// Longest Increasing Subsequence II
// Hard
// 534
// 22
// company
// Google
// You are given an integer array nums and an integer k.

// Find the longest subsequence of nums that meets the following requirements:

// The subsequence is strictly increasing and
// The difference between adjacent elements in the subsequence is at most k.
// Return the length of the longest subsequence that meets the requirements.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [4,2,1,4,3,4,5,8,15], k = 3
// Output: 5
// Explanation:
// The longest subsequence that meets the requirements is [1,3,4,5,8].
// The subsequence has a length of 5, so we return 5.
// Note that the subsequence [1,3,4,5,8,15] does not meet the requirements because 15 - 8 = 7 is larger than 3.
// Example 2:

// Input: nums = [7,4,5,1,8,12,4,7], k = 5
// Output: 4
// Explanation:
// The longest subsequence that meets the requirements is [4,5,8,12].
// The subsequence has a length of 4, so we return 4.
// Example 3:

// Input: nums = [1,5], k = 1
// Output: 1
// Explanation:
// The longest subsequence that meets the requirements is [1].
// The subsequence has a length of 1, so we return 1.

// Constraints:

// 1 <= nums.length <= 10^5
// 1 <= nums[i], k <= 10^5

function dfs(pos, nums, k, dp) {
  if (pos === nums.length - 1) return 0;
  if (dp[pos] !== undefined) return dp[pos];
  let ans = 1;
  for (let i = pos - 1; i >= 0; i--) {
    if (nums[pos]>nums[i] && nums[pos]-nums[i] <= k) {
      ans = Math.max(ans, 1 + dfs(i, nums, k, dp));
    }
  }
  return (dp[pos] = ans);
}

function solve(nums, k) {
  let dp = {};
  let ans = 1;
  for (let i = nums.length-1; i >=0; i--) {
    ans = Math.max(ans, dfs(i, nums, k, dp));
  }
  return ans;
}

// const nums = [4, 2, 1, 4, 3, 4, 5, 8, 9];
// const k = 3;
// Output: 5

// const nums = [7,4,5,1,8,12,4,7]
// const k = 5
// Output: 4

// const nums = [1,5]
// const k = 1
// Output: 1

// const nums = [1,10000]
// const k = 10000

const nums =[1,100,500,100000,100000]
const k =100000

console.log(solve(nums, k));
