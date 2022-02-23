/*Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
Example 2:

Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
 

Constraints:

n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228

*/
// Concept: Arrays and Hashmap
// Complexity: Object(n^2)
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map ={}
    let count = 0
    for(let num1 of nums1 ) {
        for(let num2 of nums2) {
            let sum = num1+num2
            map[sum] = map[sum] ? ++map[sum] : 1
        }
    }
    for(let num3 of nums3 ) {
        for(let num4 of nums4) {
            let sum2 = -(num3+num4)
            if(map[sum2]){
                count+=map[sum2]
            }
            
        }
    }
    return count
};