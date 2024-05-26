// 1043. Partition Array for Maximum Sum
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

// Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.

 

// Example 1:

// Input: arr = [1,15,7,9,2,5,10], k = 3
// Output: 84
// Explanation: arr becomes [15,15,15,9,10,10,10]
// Example 2:

// Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
// Output: 83
// Example 3:

// Input: arr = [1], k = 1
// Output: 1
 

// Constraints:

// 1 <= arr.length <= 500
// 0 <= arr[i] <= 109
// 1 <= k <= arr.length

function maxSum(arr, k, dp, start) {
    const n = arr.length
    if(start >= n) return 0
    if(dp[start] !== undefined) return dp[start]
    const end = Math.min(n, start + k)
    let currMax = Number.MIN_SAFE_INTEGER
    let ans = 0
    for(let i=start; i<end; i++) {
        currMax = Math.max(currMax, arr[i])
        ans = Math.max(ans, currMax * (i-start+1)+ maxSum(arr, k, dp, i+1))
    }
    return dp[start] = ans
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    let dp = {}
    return maxSum(arr, k, dp, 0)
};