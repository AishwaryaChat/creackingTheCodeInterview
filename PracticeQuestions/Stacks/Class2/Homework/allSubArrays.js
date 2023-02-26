// All Subarrays
// Problem Description
// Given an integer array A of size N. You have to generate it's all subarrays having a size greater than 1.

// Then for each subarray, find Bitwise XOR of its maximum and second maximum element.

// Find and return the maximum value of XOR among all subarrays.

// Problem Constraints
// 2 <= N <= 10^5

// 1 <= A[i] <= 10^7

// Input Format
// The only argument is an integer array A.

// Output Format
// Return an integer, i.e., the maximum value of XOR of maximum and 2nd maximum element among all subarrays.

// Example Input
// Input 1:

//  A = [2, 3, 1, 4]
// Input 2:

//  A = [1, 3]

// Example Output
// Output 1:

//  7
// Outnput 2:

//  2

// Example Explanation
// Explanation 1:

//  All subarrays of A having size greater than 1 are:
//  Subarray            XOR of maximum and 2nd maximum no.
//  1. [2, 3]           1
//  2. [2, 3, 1]        1
//  3. [2, 3, 1, 4]     7
//  4. [3, 1]           2
//  5. [3, 1, 4]        7
//  6. [1, 4]           5
//  So maximum value of Xor among all subarrays is 7.
// Explanation 2:

//  Only subarray is [1, 3] and XOR of maximum and 2nd maximum is 2.

// While values are smaller than the current element in stack, take XOR, because the current element and smaller element will be maximum and second maximum for these subarrays
// As sson as we find a greater element take xor with that element as well because in this case the current element is second maximum and top of the stack is maximum element for that subarray
// TC - O(N)
function solve(A) {
  // monotonic decreasing stack
  let stack = [A[0]];
  let max = -1;
  for (let i = 1; i < A.length; i++) {
    while (stack.length && stack[stack.length - 1] <= A[i]) {
      max = Math.max(max, stack[stack.length - 1] ^ A[i]);
      stack.pop();
    }
    if (stack.length > 0) max = Math.max(max, stack[stack.length - 1] ^ A[i]);
    stack.push(A[i]);
  }
  return max;
}

const A = [2, 3, 1, 4];
// Output: 7

//  const A = [1, 3]
// Output: 2

console.log(solve(A));
