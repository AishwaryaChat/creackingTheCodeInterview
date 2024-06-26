// Rotate Array
// Medium
// 13.2K
// 1.5K
// company
// Apple
// company
// Amazon
// company
// Microsoft
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 10^5
// -2^31 <= nums[i] <= 2^31 - 1
// 0 <= k <= 10^5

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// TC - O(N)
// SC - O(1)
function reverse(low, high, nums) {
  while (low < high) {
    let temp = nums[low];
    nums[low] = nums[high];
    nums[high] = temp;
    low++;
    high--;
  }
  return nums;
}

function solve(nums, k) {
  const N = nums.length;
  k = k % N;
  reverse(0, N - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, N - 1, nums);
  return nums;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// Output: [5,6,7,1,2,3,4]

// const nums = [-1, -100, 3, 99];
// const k = 2;
// Output: [3,99,-1,-100]

// const nums = [-1];
// const k = 2;

console.log(solve(nums, k));
