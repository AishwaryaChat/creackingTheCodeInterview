// 962. Maximum Width Ramp
// Solved
// Medium
// Topics
// Companies
// A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

// Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

// Example 1:

// Input: nums = [6,0,8,2,1,5]
// Output: 4
// Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
// Example 2:

// Input: nums = [9,8,1,0,1,9,4,0,4,1]
// Output: 7
// Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.

// Constraints:

// 2 <= nums.length <= 5 * 104
// 0 <= nums[i] <= 5 * 104

// TC - O(N^2)
function solve(nums) {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;
    while (j > i && nums[i] > nums[j]) {
      j--;
    }
    max = Math.max(max, j - i);
  }
  return max;
}

// Using monotonic stacks
// TC - O(N)
// SC - O(N)
// We are creating a monotonic decreasing stack
// After this we will stacrt iterating from back of array and for every element in stack from top we chceck if it is ess that curr element in loop and update the max and pop that element, because this element will not contribute to any other pair if it is contributing to current element because this will be the maximum gap
function solve(nums) {
    let stack = [0]
    let max = -1
    for(let i=1; i<nums.length; i++) {
     if(nums[i]<nums[stack[stack.length-1]]) {
      stack.push(i)
     }
    }
    for(let i=nums.length-1; stack.length>0 && i>=0; i--) {
      while(stack.length>0 && nums[i]>=nums[stack[stack.length-1]]) {
          max= Math.max(max, i-stack[stack.length-1])
          stack.pop()
      }
    }
    return max 
}
