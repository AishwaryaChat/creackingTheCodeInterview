// Product of Array Except Self
// Medium
// company
// Amazon
// Apple
// Microsoft
// Google
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 10^5
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// TC - O(N)
// SC - O(N)
function solve(nums) {
  let N = nums.length;
  let pLeft = [nums[0]];
  let pRight = [];
  pRight[N - 1] = nums[N - 1];
  let ans = [];
  for (let i = 1, j = N - 2; i < N && j >= 0; i++, j--) {
    pLeft[i] = pLeft[i - 1] * nums[i];
    pRight[j] = pRight[j + 1] * nums[j];
  }
  for (let i = 0; i < N; i++) {
    if (i === 0) ans[i] = pRight[i + 1];
    else if (i === N - 1) ans[i] = pLeft[i - 1];
    else ans[i] = pLeft[i - 1] * pRight[i + 1];
  }
  return ans;
}

// TC - O(N)
// SC - O(1)
function solveSpaceOptimised(nums) {
  const N = nums.length;
  let ans = [];
  ans[0] = 1;
  for (let i = 1; i < N; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  let R = 1;
  for (let i = N - 1; i >= 0; i--) {
    ans[i] = ans[i] * R;
    R = R * nums[i];
  }
  return ans;
}

const nums = [1,2,3,4]
// Output: [24,12,8,6]

// const nums = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]
// const nums = [0, 0];

console.log(solveSpaceOptimised(nums));
