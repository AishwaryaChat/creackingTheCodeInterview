// 368. Largest Divisible Subset
// Medium
// Topics
// Companies
// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.

// Recursion
// TC - O(N^2)
// SC - O(N^2)

function dfs(nums, pos, dp) {
  if (dp[pos] !== undefined) return dp[pos];
  let maxSet = [];
  for (let i = 0; i < pos; i++) {
    if (nums[pos] % nums[i] === 0) {
      const subset = dfs(nums, i, dp);
      if (subset.length > maxSet.length) {
        maxSet = subset;
      }
    }
  }
  const ans = maxSet.map((a) => a);
  ans.push(nums[pos]);
  return (dp[pos] = ans);
}

function solve1(nums) {
  nums.sort((a, b) => a - b);
  let dp = {};
  let maxSet = [];
  for (let i = 0; i < nums.length; i++) {
    const ans = dfs(nums, i, dp);
    if (ans.length > maxSet.length) {
      maxSet = ans;
    }
  }
  return maxSet;
}

// Bottomup DP
// TC - O(N^2)
// SC - O(N^2)
function solve2(nums) {
  nums.sort((a, b) => a - b);
  let maxSet = [];
  for (let i = 0; i < nums.length; i++) {
    const ans = dfs(nums, i, dp);
    if (ans.length > maxSet.length) {
      maxSet = ans;
    }
  }
  let dp = new Array(nums.length).fill(() => []);
  for (let i = 0; i < nums.length; i++) {
    let maxSubset = [];
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && maxSubset.length < dp[j].length) {
        maxSubset = dp[j];
      }
    }
    const newSet = maxSubset.map((a) => a);
    newSet.push(nums[i]);
    dp[i] = newSet;
    if (maxSet.length < dp[i].length) maxSet = dp[i];
  }
  return maxSet;
}

// Bottom up DP with less space
// TC - O(N^2)
// SC - O(N)
function solve3() {
  let maxSubsetIndex = -1;
  let maxSubsetSize = 0;
  let dp = new Array(nums.length).fill(() => 0);
  for (let i = 0; i < nums.length; i++) {
    let subsetSize = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && subsetSize < dp[j]) subsetSize = dp[j];
    }
    dp[i] = subsetSize + 1;
    if (maxSubsetSize < dp[i]) {
      maxSubsetSize = dp[i];
      maxSubsetIndex = i;
    }
  }
  let currNum = nums[maxSubsetIndex];
  let currSize = maxSubsetSize;
  for (let i = maxSubsetIndex; i >= 0; i--) {
    if (currNum % nums[i] === 0 && dp[i] === currSize) {
      maxSet.push(nums[i]);
      currNum = nums[i];
      currSize -= 1;
    }
  }
  return maxSet;
}
