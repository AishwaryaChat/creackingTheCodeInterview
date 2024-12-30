/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// worst way
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target) return [i,j]
        }
    }
};

// Better way
var twoSum1 = function(nums, target) {
    const indexObj = {}
    for(let i=0; i<nums.length; i++){
        indexObj[nums[i]] = i
    }
    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i]
        if(indexObj[diff] && indexObj[diff] !== i) return [i, indexObj[diff]]
    }
};

// Best way

var twoSum2 = function(nums, target) {
	let obj = {};
  let res;
	for(let i=0;i<nums.length;i++){
		if(obj[target - nums[i]] !==undefined){
      res = [obj[target - nums[i]], i];
      break;
		}  
  	obj[nums[i]] = i;
  }
  return res;
}

const nums = [1, 1,1,1]
const target = 2
console.log(twoSum2(nums, target))