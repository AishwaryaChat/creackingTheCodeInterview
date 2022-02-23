/*
532. K-diff Pairs in an Array
Medium
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i < j < nums.length
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

 

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
 

Constraints:

1 <= nums.length <= 104
-107 <= nums[i] <= 107
0 <= k <= 107
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Worst solution
// Complexity O(N^2) actually O(Nlog N) of sorting + O(N^2) for comparision
 var findPairs = function(nums, k) {
    if(nums.length === 1)  return 0
    let pairs = 0
    let map = {}
    
    nums = nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(!map[nums[i]] || !map[nums[j]]) {
                if(Math.abs(nums[i]-nums[j]) == k) {
                    map[nums[i]] = true
                    map[nums[j]] = true
                    pairs++
                }
            }
        }
    }
    return pairs
};

// Complexity O(NlogN) + O(N) === O(NlogN)
var findPairs2 = function(nums, k) {
    if(nums.length === 1)  return 0
    let pairs = 0
    let map = {}
    nums = nums.sort((a,b) => a-b)
     let right = 0;
     let left = 0
     while(right<nums.length) {
         if(right === left) {
             right++
             continue
         }
         let diff = Math.abs(nums[right] - nums[left])
         if(diff>k) {
             left++
         } else if(diff < k) {
             right++
         } else {
             if(!map[nums[right]] || !map[nums[left]]) {
                    map[nums[right]] = true
                    map[nums[left]] = true
                    pairs++
                 
            }
             right++
         }
     }
    return pairs
};

// Complexity O(N)
var findPairs3 = function(nums, k) {
    if (k < 0) return 0;   
    if((k !== 0)) {
        nums = Array.from(new Set(nums));
    }
    let m = new Map(), res = 0;
    for (let num of nums) {
        if (m.get(num+k) === 1 ) res++;
        console.log("m.get(num-k) ", m.get(num-k) )
        if (num+k !== num-k && m.get(num-k) === 1) res++;
        m.set(num, m.get(num)+1 || 1);
    }
    return res;
};

const arr = [1,3,1,5,4]


const k = 1
console.log(findPairs3(arr, k))