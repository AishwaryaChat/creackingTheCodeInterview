// Valid Palindrome II
// Easy
// company
// Facebook
// Microsoft
// Apple
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

// Constraints:

// 1 <= s.length <= 10^5
// s consists of lowercase English letters.

// TC - O(N)
// SC - O(1)
function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return [false, left, right];
    }
    left++;
    right--;
  }
  return [true];
}

function solve(s) {
  const [firstCheck, left, right] = isPalindrome(s, 0, s.length - 1);
  if (!firstCheck) {
    const [leftPalindrome] = isPalindrome(s, left, right - 1);
    const [rightPalindrome] = isPalindrome(s, left + 1, right);
    if (leftPalindrome || rightPalindrome) return true;
    return false;
  }
  return true;
}

// const s = "aba"
// Output: true

// const s = "abca";
// Output: true

const s = "abc";
// Output: false
// const s = "edeeee";
console.log(solve(s));
