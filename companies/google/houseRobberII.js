// House Robber II
// Medium
// company
// Google
// Amazon
// TikTok
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

// TC - O(N)
// SC - O(1)
function findSolution(start, end, nums) {
  let DP = new Array(end - start).fill(0);
  DP0 = nums[start];
  DP1 = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2, j = 2; i < end; i++, j++) {
    DP = Math.max(nums[i] + DP0, DP1);
    DP0 = DP1;
    DP1 = DP0;
  }

  return DP;
}

function solve(nums) {
  if (nums.length === 1) return nums[0];
  const DP1 = findSolution(0, nums.length - 1, nums);
  const DP2 = findSolution(1, nums.length, nums);
  return Math.max(DP1, DP2);
}

// const nums = [2, 3, 2];
// Output: 3

// const nums = [1,2,3,1]
// Output: 4

// const nums = [1, 2, 3];
// Output: 3
// const nums = [0];
// const nums = [0, 1];
// const nums = [2, 1, 1, 2];
const nums = [1, 7, 9, 2];

console.log(solve(nums));
