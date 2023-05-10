// Maximum Sum of Two Non-Overlapping Subarrays
// Medium
// company
// PhonePe
// Microsoft
// ByteDance
// Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.

// The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
// Output: 20
// Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
// Example 2:

// Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
// Output: 29
// Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
// Example 3:

// Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
// Output: 31
// Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.

// Constraints:

// 1 <= firstLen, secondLen <= 1000
// 2 <= firstLen + secondLen <= 1000
// firstLen + secondLen <= nums.length <= 1000
// 0 <= nums[i] <= 1000

// TC - O(N)
// SC - O(N)
function solve(nums, x, y) {
  const n = nums.length;
  let maxX = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i < x) {
      sum += nums[i];
      maxX[i] = sum;
    } else {
      sum += nums[i] - nums[i - x];
      maxX[i] = Math.max(sum, maxX[i - 1]);
    }
  }
  let maxY = [];
  sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (i + y >= n) {
      sum += nums[i];
      maxY[i] = sum;
    } else {
      sum += nums[i] - nums[i + y];
      maxY[i] = Math.max(sum, maxY[i + 1]);
    }
  }
  let ans = 0;
  for (let i = x - 1; i < n - y; i++) {
    ans = Math.max(ans, maxX[i] + maxY[i + 1]);
  }
  maxY = [];
  sum = 0;
  for (let i = 0; i < n; i++) {
    if (i < y) {
      sum += nums[i];
      maxY[i] = sum;
    } else {
      sum += nums[i] - nums[i - y];
      maxY[i] = Math.max(sum, maxY[i - 1]);
    }
  }
  maxX = [];
  sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (i + x >= n) {
      sum += nums[i];
      maxX[i] = sum;
    } else {
      sum += nums[i] - nums[i + x];
      maxX[i] = Math.max(sum, maxX[i + 1]);
    }
  }
  for (let i = y - 1; i < n - x; i++) {
    ans = Math.max(ans, maxY[i] + maxX[i + 1]);
  }
  return ans;
}

// const nums = [0, 6, 5, 2, 2, 5, 1, 9, 4];
// const firstLen = 1;
// const secondLen = 2;
// Output: 20

// const nums = [3,8,1,3,2,1,8,9,0]
// const firstLen = 3
// const secondLen = 2
// Output: 29

const nums = [2,1,5,6,0,9,5,0,3,8]
const firstLen = 4
const secondLen = 3
// Output: 31

console.log(solve(nums, firstLen, secondLen));
