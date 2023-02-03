// Longest Common Prefix

// Problem Description
// Given the array of strings A, you need to find the longest string S, which is the prefix of ALL the strings in the array.

// The longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

// Example: the longest common prefix of "abcdefgh" and "abcefgh" is "abc".

// Problem Constraints
// 0 <= sum of length of all strings <= 1000000

// Input Format
// The only argument given is an array of strings A.

// Output Format
// Return the longest common prefix of all strings in A.

// Example Input
// Input 1:

// A = ["abcdefgh", "aefghijk", "abcefgh"]
// Input 2:

// A = ["abab", "ab", "abcd"];

// Example Output
// Output 1:

// "a"
// Output 2:

// "ab"

// Example Explanation
// Explanation 1:

// Longest common prefix of all the strings is "a".
// Explanation 2:

// Longest common prefix of all the strings is "ab".


function solve(A) {
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    let longest = "";
    const A1 = A[i - 1];
    const A2 = A[i];

    for (let j = 0; j < A2.length && j < A1.length; j++) {
      if (A1[j] !== A2[j]) break;
      longest += A1[j];
    }
    if (longest.length < max.length) {
      max = longest;
    }
  }
  return max;
}

const A = ["abcdefgh", "aefghijk", "abcefgh"]
// Output: "a"

// const A = ["abab", "ab", "abcd"];
// Output: "ab"


console.log(solve())
