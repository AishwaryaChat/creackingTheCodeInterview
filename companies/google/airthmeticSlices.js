// Arithmetic Slices
// Medium
// 4.7K
// 275
// company
// Google
// company
// Bloomberg
// company
// Adobe
// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0

// Constraints:

// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000

// TC - O(N)
// SC - O(1)
function calculateSubArrays(n) {
  return (n * (n + 1)) / 2;
}

var numberOfArithmeticSlices = function (nums) {
  let count = 0;
  let ans = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      count += 1;
    } else {
      ans += calculateSubArrays(count);
      count = 0;
    }
  }
  if (count >= 0) {
    ans += calculateSubArrays(count);
  }
  return ans;
};

console.log(numberOfArithmeticSlices());
