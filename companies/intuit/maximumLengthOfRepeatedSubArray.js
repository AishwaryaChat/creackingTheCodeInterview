// Maximum Length of Repeated Subarray
// Medium
// company
// Flipkart
// Palantir Technologies
// Karat
// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

// Example 1:

// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].
// Example 2:

// Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5
// Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 100



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findLength = function(nums1, nums2) {
//     let maxLength = 0
//     for(let i=0;i<nums1.length; i++) {
//         for(let j=0; j<nums2.length; j++) {
//             let k = 0
//             while(nums2[j+k] === nums1[i+k] && j+k<nums2.length && i+k<nums1.length) k++
//             maxLength = Math.max(maxLength, k)
//         }
//     }
//     return maxLength
// };

// var findLength = function(nums1, nums2) {
//     let maxLength = 0
//     let bStarts = {}
//     const N = nums1.length
//     const M = nums2.length
//     for(let i=0; i<N; i++) {
//         if(bStarts[nums1[i]]===undefined) bStarts[nums1[i]] = []
//         for(let j=0; j<M; j++) {
//             if(nums2[j] === nums1[i]) bStarts[nums1[i]].push(j)
//         }
//     }
    
//     for(let i=0;i<N; i++) {
//         const bStarting = bStarts[nums1[i]]
//         for(let j=0; j<bStarting.length; j++) {
//             let k=0
//             let l=bStarting[j]
//             while(i+k<N && l+k<M && nums1[i+k] == nums2[l+k] ) k++
//             maxLength = Math.max(maxLength, k)
//         }
//     }
//     return maxLength
// };

// TC - O(((N + M) * min(N, M)) * log(min(N, M)))
// SC - O(N^2)
// function check(len, A, B) {
//     const N = A.length
//     const M = B.length
//     let seen = new Set()
//     for(let i=0; i + len <= N; i++) {
//         seen.add(A.slice(i, i+len).toString())
//     }

//     for(let j=0; j + len <= M; j++) {
//         if(seen.has(B.slice(j, j+len).toString())) return true
//     }
//     return false
// }

// var findLength = function(nums1, nums2) {
//     let low = 0
//     let high = Math.min(nums1.length, nums2.length) + 1
//     while(low<high) {
//         const mid = low + Math.floor((high-low)/2)
//         if(check(mid, nums1, nums2)) low = mid + 1
//         else high = mid
//     }
//     return low - 1
// };

// TC - O(N * M)
// SC - O(N * M)
var findLength = function(A, B) {
    const N = A.length
    const M = B.length

    const dp = new Array(N+1).fill().map(() => new Array(M+1).fill(0))
    let maxLength = 0
    for(let i = N - 1; i >= 0; i--) {
        for(let j = M-1; j >= 0; j--) {
            if(A[i] === B[j]) dp[i][j] = dp[i+1][j+1] + 1
            maxLength = Math.max(maxLength, dp[i][j])
        }
    }
    return maxLength
};