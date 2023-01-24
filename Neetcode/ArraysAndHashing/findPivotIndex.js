// Find Pivot Index
// Easy

// company
// Amazon
// Facebook
// Apple
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 10^4
// -1000 <= nums[i] <= 1000

// Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/

// TC - O(N)
// SC - O(N)
function solve(nums) {
  let N = nums.length;
  let pleft = [nums[0]];
  let pright = [];
  pright[N - 1] = nums[N - 1];

  for (let i = 1, j = N - 2; i < N && j >= 0; i++, j--) {
    pleft[i] = pleft[i - 1] + nums[i];
    pright[j] = pright[j + 1] + nums[j];
  }
  for (let i = 0; i < nums.length; i++) {
    if ((i === 0 && pright[i + 1] == 0) || (i === N - 1 && pleft[i - 1] === 0))
      return i;
    if (pleft[i - 1] === pright[i + 1]) return i;
  }
  return -1;
}

// SC - O(N)
// SC - O(1)
function solveSpaceOptimised(nums) {
  let N = nums.length;
  let S = nums.reduce((acc, a) => {
    acc += a;
    return acc;
  }, 0);
  let leftSum = 0;
  for (let i = 0; i < N; i++) {
    if (leftSum === S - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
}

// const nums = [1, 7, 3, 6, 5, 6];
// Output: 3

// const nums = [1,2,3]
// Output: -1

const nums = [2, 1, -1];
// Output: 0
console.log(solveSpaceOptimised(nums));
