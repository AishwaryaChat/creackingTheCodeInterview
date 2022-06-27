/*
Running Median

Problem Description
Given an array of integers, A denoting a stream of integers. New arrays of integer B and C are formed.
Each time an integer is encountered in a stream, append it at the end of B and append the median of array B at the C.

Find and return the array C.

NOTE:

If the number of elements is N in B and N is odd, then consider the median as B[N/2] ( B must be in sorted order).
If the number of elements is N in B and N is even, then consider the median as B[N/2-1]. ( B must be in sorted order).


Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return an integer array C, C[i] denotes the median of the first i elements.



Example Input
Input 1:

 A = [1, 2, 5, 4, 3]
Input 2:

 A = [5, 17, 100, 11]


Example Output
Output 1:

 [1, 1, 2, 2, 3]
Output 2:

 [5, 5, 17, 11]


Example Explanation
Explanation 1:

 stream          median
 [1]             1
 [1, 2]          1
 [1, 2, 5]       2
 [1, 2, 5, 4]    2
 [1, 2, 5, 4, 3] 3
Explanation 2:

 stream          median
 [5]              5
 [5, 17]          5
 [5, 17, 100]     17
 [5, 17, 100, 11] 11 
*/

// The Idea here is
// Start storing elements in maxHeap
// we can assume that we have a middile element, and some elements in left of the middle element and elements greater than middle element on right of middle element
// Sowe will keep elements less than middle element in maxHeap and elements greater that middle element in minHeap
// At any point the median is the top element of maxHeap
// At any point difference i.e 0 <= Math.abs(size.minHeap - size.maxHeap) <= 1
// if this not the case than move elements from one(whichever has more elements) to other
// TC = O(NlogN)
// SC = O(N)

const { Heap: MinHeap } = require("../minheapImplementation");
const { Heap: MaxHeap } = require("../maxheapImplementation");

function solve(A) {
  const res = [];
  let minHeap = new MinHeap();
  let maxHeap = new MaxHeap();
  maxHeap.push(A[0]);
  let median = A[0];
  for (let i = 1; i <= A.length; i++) {
    median = maxHeap.peek();
    res.push(median);
    if (A[i] < median) {
      maxHeap.push(A[i]);
    } else {
      minHeap.push(A[i]);
    }
    if (maxHeap.size() - minHeap.size() > 1) {
      let ele = maxHeap.pop();
      minHeap.push(ele);
    } else if(minHeap.size() - maxHeap.size() > 0) {
        let ele = minHeap.pop();
        maxHeap.push(ele);
    }
  }
  return res;
}

// const A = [1, 2, 5, 4, 3];
// console.log(solve(A));

const A = [5, 17, 100, 11]
console.log(solve(A));
