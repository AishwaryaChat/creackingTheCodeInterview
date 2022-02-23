/*
560. Subarray Sum Equals K
Medium
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 var subarraySum = function(nums, k) {
    let sum = 0, count = 0
    var map = {0:1}
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        console.log("nums[i]", nums[i])
        console.log("map before", map)
        console.log("sum", sum)
        console.log("sum-k", sum-k)
        if(map[sum-k] !== undefined){
            count += map[sum-k]
        }
        let val = map[sum] !== undefined ? map[sum]  : 0
        map[sum] = val+1
        console.log("map after", map)
    }
    return count
};

let arr = [-1,-1,0]
let k = 0

console.log(subarraySum(arr, k))