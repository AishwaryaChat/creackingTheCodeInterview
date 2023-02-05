// Longest Palindromic Substring
// company
// Amazon
// Cisco
// Adobe
// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function solve(s) {
  const N = s.length;
  let max = Number.MIN_SAFE_INTEGER;
  let maxStr = "";
  const dp = new Array(N).fill().map(() => new Array(N).fill(0));
  for (let l = 1; l <= N; l++) {
    for (let i = 0; i <= N - l; i++) {
      const j = i + l - 1;
      if (i === j) dp[i][j] = 1;
      else if (i + 1 === j) dp[i][j] = s[i]===s[j] ? 2 : 0;
      else if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] > 0 ? 2 + dp[i + 1][j - 1] : 0
      else dp[i][j] = 0;
      if (dp[i][j] > max) {
        max = Math.max(max, dp[i][j]);
        maxStr = s.substring(i, j+1);
      }
    }
  }
  return maxStr
}

// const s = "babad";
// Output: "bab"

// const s = "cbbd"
// Output: "bb"

// const s = "cdddbdddd"
const s = "aacabdkacaa"

console.log(solve(s));

// console.log("abcdef".substring(2,5))
