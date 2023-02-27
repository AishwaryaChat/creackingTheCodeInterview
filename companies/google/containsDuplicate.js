// Contains Duplicate II
// Easy
// 4.5K
// 2.5K
// company
// Amazon
// company
// Facebook
// company
// Google
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// 0 <= k <= 10^5

// TC - O(N)
function solve(nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) map[nums[i]] = 0;
    if (map[nums[i]] > 0) return true;
    if (i >= k) map[nums[i - k]] -= 1;
    map[nums[i]] += 1;
  }
  return false;
}

// const nums = [1, 2, 3, 1];
// const k = 3;
// Output: true

// const nums = [1,0,1,1]
// const k = 1
// Output: true

const nums = [1, 2, 3, 1, 2, 3];
const k = 2;
// Output: false

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const k = 15;

console.log(solve(nums, k));
