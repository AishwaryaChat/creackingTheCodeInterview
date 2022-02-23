/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/
var findMaxLength = function(nums) {
    let map = {"-1": 0}
    let maxCount = 0
    let count = 0
    for(let i=0; i< nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1
        if(map[count]!==undefined) {
            console.log("map", map)
            console.log("count", count)
            console.log("i", i)
            console.log("map[count]", map[count])
            console.log("maxCount", maxCount)
            maxCount = Math.max(maxCount, i-map[count])
            console.log("maxCount after", maxCount)
        } else {
            map[count] = i
        }
        
    }
    console.log("map", map)
    return maxCount
};

console.log(findMaxLength([0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1])) // 10