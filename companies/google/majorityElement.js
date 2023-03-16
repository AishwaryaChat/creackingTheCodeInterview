// Majority Element
// Easy
// company
// Amazon
// Google
// Bloomberg
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// TC - O(N)
// SC - O(1)
// Boyer-Moore voting Algorithm
function solve(nums) {
  let majority = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) count += 1;
    else {
      count -= 1;
    }
    if (count === 0) {
      majority = nums[i];
      count = 1;
    }
  }
  return majority;
}

// const nums = [3,2,3]
// Output: 3

// const nums = [2,2,1,1,1,2,2]
// Output: 2

console.log(solve(nums));
