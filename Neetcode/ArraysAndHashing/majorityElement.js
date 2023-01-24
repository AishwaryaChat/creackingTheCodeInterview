// Majority Element
// Easy

// company
// Amazon
// Bloomberg
// Google
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 10^4
// -10^9 <= nums[i] <= 10^9

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// TC - O(N)
// SC - O(N/2) ~ O(N), N/2 because it is given that the majority element will be present, and if it will be present than it will tahe n/2+1 space, so there will be only n/2 distinct elements in array
function solve(nums) {
  let map = {};
  let N = nums.length;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    if (map[nums[i]] > Math.floor(N / 2)) return nums[i];
  }
}

// TC - O(NlogN)
function solveAnother(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}

// TC - O(N)
// SC - O(1)
// The below solution is based on Boyer-Moore Voting Algorithm
// The idea is to cancel out the elements with the majority element and at the end you will find the majority element
// select first number as majority element and make count=1
// If next element is equal to current majority element, increment count
// As soon as you find the next element not equal to current major element decrement count
// And check if count has become 0
// if count has become zero, change majority element to current element and count=1
// Continue above steps till you rech end of array
// At the end current majority element will be your answer
// https://www.youtube.com/watch?v=n5QY3x_GNDg
// Here is the reference to find a great explanation
// This is something great that I learned today, it's pretty intutive.
function solveOptimised(nums) {
  let count = 1;
  let me = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === me) count++;
    else count--;
    if (count === 0) {
      me = nums[i];
      count = 1
    }
  }
  return me;
}

// const nums = [3, 2, 3];

const nums = [2,2,1,1,1,2,2]

console.log(solveOptimised(nums));
