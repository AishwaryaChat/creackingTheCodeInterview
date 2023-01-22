// Longest Substring Without Repeat

// Problem Description
// Given a string A, find the length of the longest substring without repeating characters.

// Note: Users are expected to solve in O(N) time complexity.

// Problem Constraints
// 1 <= size(A) <= 106

// String consists of lowerCase,upperCase characters and digits are also present in the string A.

// Input Format
// Single Argument representing string A.

// Output Format
// Return an integer denoting the maximum possible length of substring without repeating characters.

// Example Input
// Input 1:

//  A = "abcabcbb"
// Input 2:

//  A = "AaaA"

// Example Output
// Output 1:

//  3
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  Substring "abc" is the longest substring without repeating characters in string A.
// Explanation 2:

//  Substring "Aa" or "aA" is the longest substring without repeating characters in string A.

function solve(A) {
  let map = {};
  let i = 0;
  let j = 0;
  let maxCount = -1;
  while (j < A.length) {
    map[A[j]] = map[A[j]] === undefined ? 0 : map[A[j]];
    map[A[j]]++;
    while (i < A.length && !checkIfUnique(map)) {
      map[A[++i]]--;
    }
    maxCount = Math.max(maxCount, j - i + 1);
    j++;
  }
  return maxCount;
}

function checkIfUnique(map) {
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] > 1) return false;
  }
  return true;
}

// const A = "abcabcbb";
// const A = "AaaA"
const A = "dadbc";

console.log(solve(A));
