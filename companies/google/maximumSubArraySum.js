// Maximum Subarray
// Medium
// company
// Amazon
// Bloomberg
// Apple
// Google
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// TC - O(N^2)
// SC - O(1)
function solve(nums) {
    let ans = Number.MIN_SAFE_INTEGER
    for(let i=0;i<nums.length; i++) {
            let sum = 0
        for(let j=i;j<nums.length; j++) {
            sum+=nums[j]
            ans = Math.max(ans, sum)
        }
    }
    return ans
}

// TC - O((N)
// SC - O(1)
// Kadane's Algorithm
function solveOptimised(nums) {
    let ans = Number.MIN_SAFE_INTEGER
    for(let i=0;i<nums.length; i++) {
            let sum = 0
        for(let j=i;j<nums.length; j++) {
            sum+=nums[j]
            ans = Math.max(ans, sum)
        }
    }
    return ans
}



const nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// const nums = [1]
// Output: 1

// const nums = [5,4,-1,7,8]
// Output: 23

console.log(solve(nums))