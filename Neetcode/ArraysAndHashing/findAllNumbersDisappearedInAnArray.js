// Find All Numbers Disappeared in an Array
// Easy
// company
// Google
// Amazon
// Facebook
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 10^5
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// TC - O(N)
// SC - O(1)
function solve(nums) {
  let ans = [];
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== i) ans.push(i);
  }
  return ans;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [5,6]

// const nums = [1,1]
// Output: [2]

console.log(solve(nums));
