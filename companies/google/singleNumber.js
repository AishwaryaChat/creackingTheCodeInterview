// Single Number
// Easy
// company
// Amazon
// Apple
// Yahoo
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// TC - O(N)
// SC - O(1)
// Concept
// X ^ 0 = X
// X ^ X = 0
// All the repeated numbers will have XOR 0 and at the end we will be left with X ^ 0 = X, X will be the answer
function solve(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
}

const nums = [2, 2, 1];
// Output: 1

// const nums = [4,1,2,1,2]
// Output: 4

// const nums = [1]
// Output: 1

console.log(solve(nums));
