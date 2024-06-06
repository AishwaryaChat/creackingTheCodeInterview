// 239. Sliding Window Maximum
// Solved
// Hard
// Topics
// Companies
// Hint
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

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");
const DeQueue = require("../../PracticeQuestions/Queues/deQueueArrayImplementation")

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

// Solution using dequeue
// TC - O(N)
function solve2(nums, k) {
  let dq = new DeQueue()
    let ans = []
    for(let i=0; i<nums.length; i++) {
        while(!dq.isEmpty() && nums[dq.getRearElement()]<=nums[i]) {
            dq.dequeueRear()
        }
        dq.enqueueRear(i)
        if(dq.getFrontElement()<=i-k) dq.dequeueFront()
        if(i>=k-1) ans.push(nums[dq.getFrontElement()])
    }
    return ans
}