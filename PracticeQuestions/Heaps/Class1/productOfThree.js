/*
Product of 3

Problem Description
Given an integer array A of size N.

You have to find the product of the three largest integers in array A from range 1 to i, where i goes from 1 to N.

Return an array B where B[i] is the product of the largest 3 integers in range 1 to i in array A. If i < 3, then the integer at index i in B should be -1.



Problem Constraints
1 <= N <= 10^5
0 <= A[i] <= 10^3



Input Format
First and only argument is an integer array A.



Output Format
Return an integer array B. B[i] denotes the product of the largest 3 integers in range 1 to i in array A.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [10, 2, 13, 4]


Example Output
Output 1:

 [-1, -1, 6, 24, 60]
Output 2:

 [-1, -1, 260, 520]


Example Explanation
Explanation 1:

 For i = 1, ans = -1
 For i = 2, ans = -1
 For i = 3, ans = 1 * 2 * 3 = 6
 For i = 4, ans = 2 * 3 * 4 = 24
 For i = 5, ans = 3 * 4 * 5 = 60

 So, the output is [-1, -1, 6, 24, 60].
 
Explanation 2:

 For i = 1, ans = -1
 For i = 2, ans = -1
 For i = 3, ans = 10 * 2 * 13 = 260
 For i = 4, ans = 10 * 13 * 4 = 520

 So, the output is [-1, -1, 260, 520].
*/

// TC = O(N log N) 
// Concept is to create a maxHeap on the go, get the top max elements from the heap, calculate the multiplication and put the elements back in the heap

const { insert, deleteMax } = require("../maxheapImplementation");

function solve(A) {
  let result = [];
  let heap = [];

  let i = 0;
  if (A.length === 0) return [];
  if (A.length === 1) return [-1];
  if (A.length === 2) return [-1, -1];
  while (i < A.length) {
    heap = insert(heap, A[i]);
    if (i - 2 < 0) result.push(-1);
    else {
      let a = heap[0];
      heap = deleteMax(heap);
      let b = heap[0];
      heap = deleteMax(heap);
      let c = heap[0];
      heap = deleteMax(heap);
      result.push(a * b * c);
      insert(heap, a);
      insert(heap, b);
      insert(heap, c);
    }
    i++;
  }
  return result;
}

const A = [1, 2, 3, 4, 5];
console.log(solve(A));
[1, 2, 3];
