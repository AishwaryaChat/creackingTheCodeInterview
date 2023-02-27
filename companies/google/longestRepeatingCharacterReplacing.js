// Longest Repeating Character Replacement
// Medium
// company
// Amazon
// Uber
// Google
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

// Constraints:

// 1 <= s.length <= 10^5
// s consists of only uppercase English letters.
// 0 <= k <= s.length

// TC - O(N)
function solve(s, k) {
  let i = 0;
  let j = 0;
  let maxLength = 0;
  let map = new Array(26).fill(0);
  while (j < s.length) {
    map[s[j].charCodeAt(0) - 65] += 1;
    const mostFrequentCount = getMostFrequest(map);
    const window = j - i + 1;
    // If non matching characters are greater that k, then we have to slide our window
    if (window - mostFrequentCount > k) {
      map[s[i].charCodeAt(0) - 65] -= 1;
      i++;
    }
    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }
  return maxLength;
}

function getMostFrequest(map) {
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    maxCount = Math.max(maxCount, map[i]);
  }
  return maxCount;
}

// const s = "ABAB";
// const k = 2;
// Output: 4

const s = " ";
const k = 2;
// Output: 4
// const s = "ABBAAAAAAA";
// const k = 2;

console.log(solve(s, k));
