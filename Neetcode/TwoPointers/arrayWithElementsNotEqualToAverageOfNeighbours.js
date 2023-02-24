// Array With Elements Not Equal to Average of Neighbors
// Medium
// company
// Amazon
// Uber
// You are given a 0-indexed array nums of distinct integers. You want to rearrange the elements in the array such that every element in the rearranged array is not equal to the average of its neighbors.

// More formally, the rearranged array should have the property such that for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i].

// Return any rearrangement of nums that meets the requirements.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: [1,2,4,5,3]
// Explanation:
// When i=1, nums[i] = 2, and the average of its neighbors is (1+4) / 2 = 2.5.
// When i=2, nums[i] = 4, and the average of its neighbors is (2+5) / 2 = 3.5.
// When i=3, nums[i] = 5, and the average of its neighbors is (4+3) / 2 = 3.5.
// Example 2:

// Input: nums = [6,2,0,9,7]
// Output: [9,7,6,2,0]
// Explanation:
// When i=1, nums[i] = 7, and the average of its neighbors is (9+6) / 2 = 7.5.
// When i=2, nums[i] = 6, and the average of its neighbors is (7+2) / 2 = 4.5.
// When i=3, nums[i] = 2, and the average of its neighbors is (6+0) / 2 = 3.

// Constraints:

// 3 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^5

// TC - O(N)
// SC - O(N)
// The approach we have used here is a greedy approach, we are basically putting every element either in between 2 greater elements or an element etween 2 smaller elements, so the average will never be equal to that element
// To put this in code we are dividing the arrays into two parts, smaller and bigger elements and then rearranging them
function solve(nums) {
  const N = nums.length;
  nums.sort((a, b) => a - b);
  const half = N % 2 === 1 ? Math.floor(N / 2) : Math.floor(N / 2) - 1;
  let ans = [];
  for (let i = 0, j = 0; i <= half; i++, j += 2) {
    ans[j] = nums[i];
  }
  for (let i = half + 1, j = 1; i < N; i++, j += 2) {
    ans[j] = nums[i];
  }
  return ans;
}

// const nums = [1, 2, 3, 4, 5];
// Output: [1,2,4,5,3]

const nums = [6, 2, 0, 9, 7];
// 0 2 6 7 9
// Output: [9,7,6,2,0]
// const nums = [1,2,5,9]

console.log(solve(nums));
