// Maximum Product Subarray
// Medium
// company
// Amazon
// Microsoft
// Expedia

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// TC - O(N)
// SC - O(1)
function solve(nums) {
  let min_so_far = nums[0];
  let max_so_far = nums[0];
  let max = max_so_far;
  for (let i = 1; i < nums.length; i++) {
    const temp = max_so_far * nums[i];
    max_so_far = Math.max(max_so_far * nums[i], min_so_far * nums[i], nums[i]);
    min_so_far = Math.min(min_so_far * nums[i], temp, nums[i]);
    max = Math.max(max, max_so_far);
  }
  return max;
}

// const nums = [2, 3, -2, 4];
// Output: 6

const nums = [-2, 0, 10, 20, -1];
// Output: 0
// const nums = [-2,0,2, 10,-1]

console.log(solve(nums));
