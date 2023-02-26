// Sliding Window Maximum
// Hard
// company
// Amazon
// Google
// DoorDash
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(NlogK)
function solve(nums, k) {
  const maxHeap = new Heap({ comparator: (a, b) => a[0] > b[0] });
  for (let i = 0; i < k; i++) {
    maxHeap.push([nums[i], i]);
  }
  let ans = [maxHeap.peek()[0]];
  for (let i = k, j=1; i < nums.length; i++,j++) {
    let idx = i-k
    while(maxHeap.getSize() && maxHeap.peek()[1]<=idx) maxHeap.pop()
    maxHeap.push([nums[i], i])
    ans[j] = maxHeap.peek()[0]
  }
  return ans
}

// const nums = [1, 3, -1, -3, 5, 3, 6, 7];
// const k = 3;
// Output: [3,3,5,5,6,7]

// const nums = [1]
// const k = 1
// Output: [1]

const nums = [1, -1]
const k = 1

console.log(solve(nums, k));
