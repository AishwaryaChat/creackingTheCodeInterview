// 862. Shortest Subarray with Sum at Least K
// Hard
// company
// Google
// Adobe
// Facebook
// Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [1], k = 1
// Output: 1
// Example 2:

// Input: nums = [1,2], k = 4
// Output: -1
// Example 3:

// Input: nums = [2,-1,2], k = 3
// Output: 3

// Constraints:

// 1 <= nums.length <= 10^5
// -10^5 <= nums[i] <= 10^5
// 1 <= k <= 10^9


const DeQueue = require("../../PracticeQuestions/Queues/deQueueArrayImplementation")

// The solution goes like below
// 1. In every pass we keep calculating the prefix sum
// 2. In every pass we will see if the sum od elements between, 1st element in deque and current element is greater than k or not, if it is we will just update our answe and dequeue front element, 
// 3. In every pass we will also check if current prefix sum is smaller than and the prefix of till last element, this will tell us that we have encountered a negative element and that will not be of any use t use
// 4. Lastly every time we will also push the current index to the dequeue
// TC - O(N)
// SC - O(N), for dequeue
// Solution hint from - https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/3070805/javascript-solution-with-detailed-explaination/
function solve(A, k) {
  const N = A.length
    let d = new DeQueue()
    let res = N+1
    for(let i=0; i<N; i++) {
        if(i>0) {
            A[i] += A[i-1]
        }
        if(A[i]>=k) {
            res = Math.min(res, i+1)
        }
        while(!d.isEmpty() && A[i] - A[d.getFrontElement()]>=k) {
            res = Math.min(res, i-d.getFrontElement())
            d.dequeueFront()
        }
        while(!d.isEmpty() && A[i] <= A[d.getRearElement()]){
            d.dequeueRear()
        }
        d.enqueueRear(i)
    }
    return res >= N+1 ? -1 : res
}

// const nums = [1];
// const k = 1;
// Output: 1

// const nums = [1,2]
// const k = 4
// Output: -1

const nums = [2, -1, 2];
const k = 3;
// Output: 3

console.log(solve(nums, k));
