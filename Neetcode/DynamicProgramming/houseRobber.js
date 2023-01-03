// House Robber
// Medium
// 16.4K
// 325
// Companies
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
  let N = nums.length;
  let DP = new Array(N + 1).fill(0);
  DP[0] = nums[0];
  DP[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < N; i++) {
    DP[i] = Math.max(nums[i] + DP[i - 2], DP[i - 1]);
  }

  return DP[N - 1];
}

// TC - O(N)
// SC - O(1)
function solveSpaceOptimised(nums) {
  let N = nums.length;
  let DP0 = nums[0];
  let DP1 = Math.max(nums[0], nums[1]);
  let DP = 0;
  for (let i = 2; i < N; i++) {
    DP = Math.max(nums[i] + DP0, DP1);
    DP0 = DP1;
    DP1 = DP;
  }
  return DP;
}

// TC - O(N)
// SC - O(N)

function recursive(n, nums, DP) {
  if (n < 2) return DP[n];
  if (DP[n] === 0) {
    DP[n] = Math.max(
      recursive(n - 1, nums, DP),
      recursive(n - 2, nums, DP) + nums[n]
    );
  }
  return DP[n];
}

// TC - O(N)
// SC - O(N) // stack space + DP space
function solveRecursive(nums) {
  let DP = new Array(nums.length).fill(0);
  DP[0] = nums[0];
  DP[1] = Math.max(nums[0], nums[1]);
  return recursive(nums.length - 1, nums, DP);
}

const nums = [2, 7, 9, 3, 1];
console.log(solveRecursive(nums));
