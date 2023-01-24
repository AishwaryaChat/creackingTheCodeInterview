// Length of Last Word
// Easy
// Companies
// Apple -5
// Amazon -3
// Google-2
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:

// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// TC - O(N)
// SC - O(N)
function solve(s) {
  let a = s.trim().split(" ");
  return a[a.length - 1].length;
}

// TC - O(N)
// SC - O(1)
function solveAnother(s) {
  let last = "";
  let p = s.length - 1;
  while (s[p] === " ") p--;
  for (let i = 0; i <= p; i++) {
    if (s[i] === " ") {
      last = "";
    } else {
      last = last + s[i];
    }
  }
  return last.length;
}

const s = "Hello World";

// const s = "   fly me   to   the moon  ";

console.log(solveAnother(s));
