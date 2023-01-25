// Happy Number
// Easy
// company
// Amazon
// Apple
// Google
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Constraints:

// 1 <= n <= 2^31 - 1

// TC - O(logN)
// SC - O(logN)
function isHappy(n, visited) {
  if (n === 1) return true;
  if (visited.has(n)) return false;
  visited.set(n);
  let sum = 0;
  while (n) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return isHappy(sum, visited);
}

function solve(n) {
  let visited = new Map();
  return isHappy(n, visited);
}

// The below solution is given using slow and fast pointers concept
// TC - O(logN)
// SC - O(1)

function getNext(n) {
  let sum = 0;
  while (n) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
}

function solveOptimised(n) {
  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
}

// const n = 19;
// Output - true

// const n = 3
// Output - false
const n = 116;

console.log(solveOptimised(n));
