// Next Greater Element III
// Medium
// company
// Amazon
// Google
// DoorDash
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1

// Constraints:

// 1 <= n <= 2^31 - 1

// TC - O(N)
// SC - O(logn), number of digits in number, O(1)
function swap(i, j, nums) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, i) {
  let k = nums.length - 1;
  while (i < k) {
    swap(i, k, nums);
    i++;
    k--;
  }
}

function solve(n) {
  let nums = String(n)
    .split("")
    .map((a) => Number(a));
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i < 0) return -1;
  let j = nums.length - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  swap(i, j, nums);
  reverse(nums, i + 1);
  let ans = Number(nums.join(""));
  if (ans > 2147483647) ans = -1;
  return ans;
}

const n = 12
// Output: 21

// const n = 21
// Output: -1

console.log(solve(n))
