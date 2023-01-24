// Contains Duplicate
// Easy

// Companies
// Amazon
// Bloomberg
// Apple
// Adobe
// Microsoft
// Uber
// JPMorgan
// Google
// Yahoo
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

// TC - O(N)
// SC - O(N)
// Or do it with O(1) SC, but TC - O(NlogN), by sorting the array and then comparing the items are indexes
function solve(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], true);
  }
  return false;
}

function solveSpaceOptimised(nums) {
  if (nums.length === 1) return false;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) return true;
  }
  return false;
}
const nums = [1, 2, 5, 3, 5,];
// const nums = [1, 2, 3, 5];
// console.log(solve(nums));
console.log(solveSpaceOptimised(nums));
