// Find First and Last Position of Element in Sorted Array
// Medium
// company
// Adobe
// Facebook
// Apple
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

// TC - O(log N)
// SC - O(1)
function findBound(A, target, isFirst) {
  const N = A.length;
  let low = 0;
  let high = N - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (A[mid] === target) {
      if (isFirst) {
        if (mid === 0 || A[mid - 1] < target) return mid;
        high = mid - 1;
      } else {
        if (mid === N - 1 || A[mid + 1] > target) return mid;
        low = mid + 1;
      }
    } else if (A[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solve = function (nums, target) {
  const first = findBound(nums, target, true);
  if (first === -1) return [-1, -1];
  return [first, findBound(nums, target, false)];
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
// Output: [3,4]

// const nums = [5,7,7,8,8,10]
// const target = 6
// Output: [-1,-1]

// const nums = [];
// const target = 0;
// Output: [-1,-1]

// const nums = [2,2];
// const target = 2;

console.log(solve(nums, target));
