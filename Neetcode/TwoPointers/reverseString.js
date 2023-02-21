// Reverse String
// Easy
// company
// Apple
// Amazon
// Adobe
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// TC - O(N)
// SC - O(1)
function solve(s) {
  let n = s.length;
  const half = Math.floor(n / 2);
  if (n === 0 || n === 1) return s;
  let i = 0;
  let j = n - 1;
  while (i < half) {
    let temp = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }
  return s;
}

const s = ["h", "e", "l", "l"];
// Output: ["o","l","l","e","h"]
// Example 2:

// const s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

console.log(solve(s));
