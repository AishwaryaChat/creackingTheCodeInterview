/*
Maximum height of staircase

Problem Description
Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a staircase of max-height using these blocks.

The first stair would require only one block, and the second stair would require two blocks, and so on.

Find and return the maximum height of the staircase.



Problem Constraints
0 <= A <= 10^9


Input Format
The only argument given is integer A.



Output Format
Return the maximum height of the staircase using these blocks.



Example Input
Input 1:

 A = 10
Input 2:

 A = 20


Example Output
Output 1:

 4
Output 2:

 5


Example Explanation
Explanation 1:

 The stairs formed will have height 1, 2, 3, 4.
Explanation 2:

 The stairs formed will have height 1, 2, 3, 4, 5.


*/

// TC - O(log(log A))

function solution(A) {
  let ans = 0;
  let i = 1;
  while (ans <= A) {
    ans += i;
    i++;
  }
  return i - 2;
}

// TC - O(log A)
// solved using Binary search
// Binary search applied on the answer(number of stairs)

function solve(A) {
  let l = 0;
  let h = (A * (A + 1)) / 2;
  while (l <= h) {
    let mid = l + Math.floor((h - l) / 2);
    let totalBlocks = (mid * (mid + 1)) / 2;
    let totalBlockPlus1 = ((mid + 1) * (mid + 2)) / 2;
    if (totalBlocks <= A && totalBlockPlus1 > A) return mid;
    else if (totalBlocks > A) h = mid - 1;
    else l = mid + 1;
  }
}

const A = 5;

console.log(solve(A));
