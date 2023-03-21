// Backspace String Compare
// Easy
// company
// Microsoft
// Google
// Booking.com
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

// TC - O(N)
// SC - O(N)
function solve(s, t) {
  let newS = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "#") {
      newS.pop();
    } else {
      newS.push(s[i]);
    }
    i++;
  }
  newS = newS.join("");
  let newT = [];
  let j = 0;
  while (j < t.length) {
    if (t[j] === "#") {
      newT.pop();
    } else {
      newT.push(t[j]);
    }
    j++;
  }
  newT = newT.join("");
  return newS == newT;
}

const s = "ab#c";
const t = "ad#c";
// Output: true

// const s = "ab##"
// const t = "c#d#"
// Output: true

// const s = "a#c"
// const t = "b"
// Output: false

console.log(solve(s, t));
