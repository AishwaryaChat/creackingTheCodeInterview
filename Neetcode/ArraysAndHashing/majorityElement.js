// Majority Element
// Easy

// company
// Amazon
// Bloomberg
// Google
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
// SC - O(N/2) ~ O(N), N/2 because it is given that the majority element will be present, and if it will be present than it will tahe n/2+1 space, so there will be only n/2 distinct elements in array
function solve(nums) {
  let map = {};
  let N = nums.length;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    if (map[nums[i]] > Math.floor(N / 2)) return nums[i];
  }
}

// TC - O(NlogN)
function solveAnother(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

const nums = [3, 2, 3];

// const nums = [2,2,1,1,1,2,2]

console.log(solve(nums));
