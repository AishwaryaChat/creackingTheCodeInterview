// Unique Binary Search Trees II

// Problem Description
// Given an integer A, how many structurally unique BST's (binary search trees) exist that can store values 1...A?

// Problem Constraints
// 1 <= A <=18

// Input Format
// First and only argument is the integer A

// Output Format
// Return a single integer, the answer to the problem

// Example Input
// Input 1:

//  1
// Input 2:

//  2

// Example Output
// Output 1:

//  1
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  Only single node tree is possible.
// Explanation 2:

//  2 trees are possible, one rooted at 1 and other rooted at 2.

// TC - O(N^2)
// SC - O(N)
function solve(N) {
  let DP = new Array(N+1).fill(0);
  DP[0] = 1;
  DP[1] = 1;
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      DP[i] += DP[j] * DP[i - 1 - j];
    }
  }
  return DP[N];
}

const N = 5
console.log(solve(N))
