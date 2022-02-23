/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 const binarySearch = (nums, lb,ub, target) => {
    if(lb>ub) return lb
    else {
        const mid = lb+ Math.floor(ub-lb/2)
        if(nums[mid] === target) return mid
        else if(target<nums[mid]) return  binarySearch(nums, lb, mid-1, target)
        else return binarySearch(nums,mid+1, ub, target)
    }
}

var searchInsert = function(nums, target) {
    if(target<nums[0]) return 0
    else if(target>nums[nums.length-1]) return nums.length
    return binarySearch(nums, 0,nums.length-1, target)
};