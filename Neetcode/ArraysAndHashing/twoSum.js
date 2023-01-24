// Two Sum
// Easy
// company
// Amazon
// Adobe
// Apple
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// TC - O(N)
// SC - O(N)
function solve(arr, target) {
  let i = 0;
  let j = arr.length + 1;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let num2 = target - arr[i];
    if (map[num2] !== undefined) return [map[num2], i];
    map[arr[i]] = i;
  }
}

// const nums = [2, 7, 11, 15],
//   target = 9;
// Output: [0,1]

// const nums = [3,2,4], target = 6
// Output: [1,2]

// const nums = [3,3], target = 6
// Output: [0,1]

console.log(solve(nums, target));
