// Gray Code

// Problem Description
// The gray code is a binary numeral system where two successive values differ in only one bit.

// Given a non-negative integer A representing the total number of bits in the code, print the sequence of gray code.

// A gray code sequence must begin with 0.

// Problem Constraints
// 1 <= A <= 16

// Input Format
// The first argument is an integer A.

// Output Format
// Return an array of integers representing the gray code sequence.

// Example Input
// Input 1:

// A = 2
// Input 1:

// A = 1

// Example Output
// output 1:

// [0, 1, 3, 2]
// output 2:

// [0, 1]

// Example Explanation
// Explanation 1:

// for A = 2 the gray code sequence is:
//     00 - 0
//     01 - 1
//     11 - 3
//     10 - 2
// So, return [0,1,3,2].
// Explanation 1:

// for A = 1 the gray code sequence is:
//     00 - 0
//     01 - 1
// So, return [0, 1].
// The solution is based on bread first search

// TC - O(2^A)
// TC - O(2^A) - recursion space + hashing space
function recursion(num, maxLength, ans, pushed, seen) {
  if (pushed === maxLength) {
    return;
  }
  for (let i = 0; i < A; i++) {
    const newNum = num ^ (1 << i);
    if (!seen[newNum]) {
      ans.push(newNum);
      seen[newNum] = true;
      recursion(newNum, maxLength, ans, pushed + 1, seen);
      if (ans.length === maxLength) {
        break;
      }
    }
  }
  return ans;
}

function solve(A) {
  let ans = [0];
  let seen = { 0: true };
  const maxLength = Math.pow(2, A);
  return recursion(0, maxLength, ans, 1, seen);
}

// const A = 2;
// const A = 1
const A = 3;

console.log(solve(A));
