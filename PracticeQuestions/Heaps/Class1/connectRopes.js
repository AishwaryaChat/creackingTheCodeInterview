/*
Connect ropes

Problem Description
You are given an array A of integers that represent the lengths of ropes.

You need to connect these ropes into one rope. The cost of joining two ropes equals the sum of their lengths.

Find and return the minimum cost to connect these ropes into one rope.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 1000



Input Format
The only argument given is the integer array A.



Output Format
Return an integer denoting the minimum cost to connect these ropes into one rope.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [5, 17, 100, 11]


Example Output
Output 1:

 33
Output 2:

 182


Example Explanation
Explanation 1:

 Given array A = [1, 2, 3, 4, 5].
 Connect the ropes in the following manner:
 1 + 2 = 3
 3 + 3 = 6
 4 + 5 = 9
 6 + 9 = 15

 So, total cost  to connect the ropes into one is 3 + 6 + 9 + 15 = 33.
Explanation 2:

 Given array A = [5, 17, 100, 11].
 Connect the ropes in the following manner:
 5 + 11 = 16
 16 + 17 = 33
 33 + 100 = 133

 So, total cost  to connect the ropes into one is 16 + 33 + 133 = 182.

*/

// TC = O(N log N)
// The Observation is if we add the ropes with smaller lengths first then the total cost will be minimum
// Idea is to solve this question using minHeap
// A minHeap is a complete binary tree, where every children is smaller than the root node
// So we will first generate the minHeap of all elements of the given array
// Then until the heap has length more than 1, we will keep deleting the root of the heap since it is the smallest element
// Like this we will get First 2 minimum elements, add them and put this result back in the heap in its correct position

const { Heap } = require("../minheapImplementation");

function solve(A) {
  let heap = new Heap();
  for (let i = 0; i < A.length; i++) {
    heap.push(A[i]);
  }
  let ans = 0;
  while (heap.size()>1) {
    let a = heap.peek();
    console.log(a)
    heap.pop();
    let b = heap.peek();
    heap.pop();
    let res = a && b ? a + b : a;
    heap.push(res);
    ans += res;
    if (b === undefined) break;
  }
  return ans;
}

const A = [5, 17, 100, 11];
console.log(solve(A));
