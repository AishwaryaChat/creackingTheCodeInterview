// Valid Palindrome
// Easy
// 6.1K
// 6.7K
// company
// Facebook
// company
// Apple
// company
// Google
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

function isAlphanumeric(s) {
  return (
    (s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57) ||
    (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122)
  );
}

// TC - O(N)
function solve(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !isAlphanumeric(s[i])) i++;
    while (i < j && !isAlphanumeric(s[j])) j--;
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}

const s = "A man, a plan, a canal:: Panama";
// Output: true

// const s = "race a car"
// Output: false

// const s = " "
// Output: true
// const s = "0P";

console.log(solve(s));
// console.log("p".charCodeAt(0));
