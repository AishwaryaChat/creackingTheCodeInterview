// Increasing Triplet Subsequence
// Medium
// company
// Google
// Facebook
// Adobe
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:

// 1 <= nums.length <= 5 * 10^5
// -2^31 <= nums[i] <= 2^31 - 1

// TC - O(N)
function solve(nums) {
    let firstSmallest = Number.MAX_SAFE_INTEGER
    let secondSmallest = Number.MAX_SAFE_INTEGER
    for(let num of nums){
        if(num<=firstSmallest) firstSmallest = num
        else if (num<=secondSmallest) secondSmallest = num
        else return true
    }
}

// const nums = [1,2,3,4,5]
// Output: true

// const nums = [5,4,3,2,1]
// Output: false

// const nums = [2,1,5,0,4,6]
// Output: true

console.log(solve(nums))
