// Longest Arithmetic Subsequence
// Medium
// company
// Adobe
// Amazon
// Microsoft
// Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

// Note that:

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
// A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).

// Example 1:

// Input: nums = [3,6,9,12]
// Output: 4
// Explanation:  The whole array is an arithmetic sequence with steps of length = 3.
// Example 2:

// Input: nums = [9,4,7,2,10]
// Output: 3
// Explanation:  The longest arithmetic subsequence is [4,7,10].
// Example 3:

// Input: nums = [20,1,15,3,10,5,8]
// Output: 4
// Explanation:  The longest arithmetic subsequence is [20,15,10,5].

// Constraints:

// 2 <= nums.length <= 1000
// 0 <= nums[i] <= 500

function solve(nums) {
  let maxLength = 0;
  let dp = new Array(nums.length);
  for (let right = 0; right < nums.length; right++) {
    dp[right] = {};
    for (let left = 0; left < nums.length; left++) {
      const diff = nums[left] - nums[right];
      dp[right][diff] = ((dp[left] && dp[left][diff]) || 1) + 1;
      maxLength = Math.max(maxLength, dp[right][diff]);
    }
  }
  return maxLength;
}

function recursive(pos, preIndex, nums, dp) {
  const diff = preIndex === -1 ? -2 : nums[pos] - nums[preIndex];
  const key = `${pos}_${diff}`;
  if (dp[key] !== undefined) return dp[key];
  let len = 0;
  for (let i = pos + 1; i < nums.length; i++) {
    if (preIndex === -1 || nums[i] - nums[pos] === nums[pos] - nums[preIndex]) {
      len = Math.max(len, recursive(i, pos, nums, dp));
    }
  }
  return (dp[key] = len + 1);
}

function topDownApproach(nums) {
  let max = 0;
  dp = {};
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, recursive(i, -1, nums, dp));
  }
  return max;
}

const nums = [3, 6, 9, 12];
// Output: 4

// const nums = [9, 4, 7, 2, 10];
// Output: 3

// const nums = [20,1,15,3,10,5,8]
// Output: 4

console.log(topDownApproach(nums));
