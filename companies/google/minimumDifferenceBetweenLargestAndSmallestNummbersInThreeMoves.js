// 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an integer array nums.

// In one move, you can choose one element of nums and change it to any value.

// Return the minimum difference between the largest and smallest value of nums after performing at most three moves.

 

// Example 1:

// Input: nums = [5,3,2,4]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 2 to 3. nums becomes [5,3,3,4].
// In the second move, change 4 to 3. nums becomes [5,3,3,3].
// In the third move, change 5 to 3. nums becomes [3,3,3,3].
// After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.
// Example 2:

// Input: nums = [1,5,0,10,14]
// Output: 1
// Explanation: We can make at most 3 moves.
// In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
// In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
// In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
// After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
// It can be shown that there is no way to make the difference 0 in 3 moves.
// Example 3:

// Input: nums = [3,100,20]
// Output: 0
// Explanation: We can make at most 3 moves.
// In the first move, change 100 to 7. nums becomes [3,7,20].
// In the second move, change 20 to 7. nums becomes [3,7,7].
// In the third move, change 3 to 7. nums becomes [7,7,7].
// After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0.
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// We can do following things to get minimum answer
// 1. Kill biggest 3 elements
// 2. Kill 2 biggest and 1 smallest element
// 3. Kill 1 biggest and 2 smallest elements
// 4. Kill 3 smallest elements
// TC - O(NlogN)

var minDifference = function(nums) {
    const n = nums.length
    if(nums.length<5) return  0
    nums.sort((A, B) => A-B)
    const max1 = nums[n-1]
    const max2 = nums[n-2]
    const max3 = nums[n-3]
    const max4 = nums[n-4]
    const min1 = nums[0]
    const min2 = nums[1]
    const min3 = nums[2]
    const min4 = nums[3]
    return Math.min(max4-min1, max3-min2, max2 - min3, max1-min4)
    
    // OR, above solution can also be written as

    // let ans = Number.MAX_SAFE_INTEGER
    // for(let i=0; i<4; i++) {
    //     ans = Math.min(ans, nums[n-3+i]- nums[i])
    // }
    // return ans
};