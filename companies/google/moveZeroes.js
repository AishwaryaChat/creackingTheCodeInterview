// Move Zeroes
// Easy
// company
// Yandex
// Facebook
// Amazon
// Google
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

// Follow up: Could you minimize the total number of operations done?

// TC - O(N)
// SC - O(1)
function solve(nums) {
  let zero = 0;
  let nonzero = 0;
  while (nonzero < nums.length) {
    while (nums[zero] !== 0 && zero < nums.length) zero++;
    while ((nums[nonzero] == 0 || nonzero < zero) && nonzero < nums.length)
      nonzero++;
    if (zero < nonzero && zero < nums.length && nonzero < nums.length) {
      let temp = nums[zero];
      nums[zero] = nums[nonzero];
      nums[nonzero] = temp;
    }
  }
  return nums;
}

// TC - O(N)
// SC - O(1)
function solveSimpler(nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }
  }
  return nums;
}

// const nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// const nums = [0]
// Output: [0]

// const nums = [1, 2, 8, 3, 0, 3, 0, 9, 4, 0, 5, 0];
const nums = [0, 0, 0, 0, 1, 2, 3, 4];

console.log(solve(nums));
