/*
228. Summary Ranges
You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

Input: nums = []
Output: []
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */

// Complexity - O(n)
 var summaryRanges = function(nums) {
    if(nums.length === 0) return []
    let rangeArr = []
    let range = ""
    let inBtw = 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i+1] && nums[i+1]-1 === nums[i]) {
            inBtw +=1
        } else {
            if(inBtw === 0) {
                range = "" + nums[i] 
            } else {
                let rangeMin = nums[i] - inBtw
                range = rangeMin + "->" + nums[i] 
            }
            rangeArr.push(range)
            range = ""
            inBtw = 0
        }
    }
    return rangeArr
};

let nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]

console.log(summaryRanges(nums))

nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]

console.log(summaryRanges(nums))