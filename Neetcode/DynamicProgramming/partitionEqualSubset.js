// Partition Equal Subset Sum
// Medium
// company
// Facebook
// Apple
// Expedia
// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

function recursive(nums, pos, sum, currentSum, dp) {
  if (dp[`${pos}_${currentSum}`] !== undefined)
    return dp[`${pos}_${currentSum}`];
  if (currentSum === sum) {
    return true;
  }
  if (pos == nums.length - 1 || currentSum > sum) return false;
  dp[`${pos}_${currentSum}`] = true;

  const result =
    recursive(nums, pos + 1, sum, currentSum + nums[pos + 1], dp) ||
    recursive(nums, pos + 1, sum, currentSum, dp);

  dp[`${pos}_${currentSum}`] = result;
  return result;
}

function solve(nums) {
  let sum = nums.reduce((acc, a) => {
    acc += a;
    return acc;
  });
  if (sum % 2) return false;
  sum = sum / 2;
  let dp = {};
  return recursive(nums, 0, sum, nums[0], dp);
}

// const nums = [1,5,11,5]
// Output: true

// const nums = [1,2,3,5]
// Output: false

// const nums = [3,3,3,4,5]
const nums = [1, 2, 5];
// const nums = [
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 99, 97,
// ];
// const nums=[1,2,3,4,5,6,7]

console.log(solve(nums));
