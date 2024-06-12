// 2149. Rearrange Array Elements by Sign
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

// Constraints:

// 2 <= nums.length <= 2 * 105
// nums.length is even
// 1 <= |nums[i]| <= 105
// nums consists of equal number of positive and negative integers.

// It is not required to do the modifications in-place.
// TC - O(N)
// SC - O(N)

var rearrangeArray = function (nums) {
  let even = 0;
  let odd = 1;
  let i = 0;
  const n = nums.length;
  let ans = [];
  while (i < n) {
    if (nums[i] > 0) {
      ans[even] = nums[i];
      even += 2;
    }
    if (nums[i] < 0) {
      ans[odd] = nums[i];
      odd += 2;
    }
    i++;
  }
  return ans;
};

// Below is a solution where space is O(1), but then complexity will be O(N^2), we will have to do a lot of shifts if we find the elements at wrong places
// for eg if we have consecutive 5 positive elements, then finding the first negative element and replacing it with positive element will not work because positive elements order will not remain the same in the answer and hence we will have to shift all the positive numbers first


// TC - O(N^2)
// SC - O(1)
function swap(i, j, nums) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}


var sol2 = function(nums) {
    let i = 1
    const n = nums.length
    while(i < n) {
        if(nums[i-1]>0 && nums[i]<0) {
            i+=2
            continue
        } else if(nums[i-1]<0 && nums[i]>0) {
            swap(i, i-1, nums)
        } else if(nums[i-1]>0 && nums[i]>0) {
            let j = i+1
            let temp1 = nums[i]
            let temp2 = nums[j]
            while(j<n && nums[j]>0) {
                nums[j] = temp1
                temp1 = temp2
                j++
                temp2 = nums[j]
            }
            nums[j] = temp1
            nums[i] = temp2
            
        } else if(nums[i-1]<0 && nums[i]<0) {
            let j = i
            let temp1 = nums[i-1]
            let temp2 = nums[j]
            while(j<n && nums[j]<0) {
                nums[j] = temp1
                temp1 = temp2
                j++
                temp2 = nums[j]
            }
            nums[j] = temp1
            nums[i-1] = temp2
        }
        i+=2
    }
    return nums
};
