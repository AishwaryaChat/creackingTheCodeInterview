// DI String Match
// Easy
// company
// Google
// Microsoft
// Adobe
// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:

// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: s = "III"
// Output: [0,1,2,3]
// Example 3:

// Input: s = "DDI"
// Output: [3,2,0,1]

// Constraints:

// 1 <= s.length <= 10^5
// s[i] is either 'I' or 'D'.

// TC - O(N)
// SC - O(1), answer space is not considered as space complexity
function solve(s) {
  const n = s.length;
  let i = 0;
  let j = n;
  let result = new Array();
  for (let char of s) {
    if (char === "I") {
      result.push(i++);
    } else {
      result.push(j--);
    }
  }
  result.push(i);
  return result;
}

const s = "IDID"
// Output: [0,4,1,3,2]

// const s = "III"
// Output: [0,1,2,3]

// const s = "DDI"
// Output: [3,2,0,1]

console.log(solve(s))
