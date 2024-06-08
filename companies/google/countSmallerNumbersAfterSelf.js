// 315. Count of Smaller Numbers After Self
// https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/
// Hard
// Topics
// Companies
// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

 

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
// Example 2:

// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// We are solving this question using merge sort
//  since we cannot change the nums array because we need to know the original index of every number in the array so we are using an extra array arr, where we are putting num and index of that num and we are sorting that array

// TC - O(N log N)
function merge(arr, count, low, high, mid) {
    let i = low
    let j = mid+1
    let temp = []
    while(i<=mid && j<=high) {
        //  we are sorting in descending order, if num[i] is less, then we are not counting, but then we are putting the bigger number first
        if(arr[i][0] <= arr[j][0]) {
            temp.push(arr[j])
            j++
        } else {
            // if num[i] is greater than num[j] i.e number at right of i then we are counting this pair and all pairs after j because, if nums[j] < nums[i], then all the numbers after j will also be lesser than i because we are sorting the number in descending order
            temp.push(arr[i])
            count[arr[i][1]] += high - j + 1
            i++
        }
    }
    while(i<=mid) {
        temp.push(arr[i])
        i++
    }
    while(j<=high) {
        temp.push(arr[j])
        j++
    }
    // we need to put the elements of arr in their correct sorted order for later comparisions
    for(let k=low; k<=high; k++) {
        arr[k] = temp[k - low]
    }

}

function mergeSort(indices, ans, low, high) {
    if(low>=high) return
    const mid = low + Math.floor((high - low)/2)
    mergeSort(indices, ans, low, mid)
    mergeSort(indices, ans, mid+1, high)
    merge(indices, ans, low, high, mid)
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const n = nums.length
    let ans = new Array(n).fill(0)
    let indices = []
    for(let i=0; i<n; i++) {
        indices[i] = [nums[i], i]
    }
    mergeSort(indices, ans, 0, n-1)
    return ans
};