// Regular Expression II
// Solution reference - https://www.youtube.com/watch?v=HAA8mgxlov8
// Problem Description
// Implement wildcard pattern matching with support for ' ? ' and ' * ' for strings A and B.

// ' . ' : Matches any single character.
// ' * ' : Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Problem Constraints
// 1 <= length(A), length(B) <= 104

// Input Format
// The first argument of input contains a string A.
// The second argument of input contains a string B denoting the pattern.

// Output Format
// Return 1 if the patterns match else return 0.

// Example Input
// Input 1:

//  A = "aab"
//  B = "c*a*b"
// Input 2:

//  A = "acz"
//  B = "a.a"

// Example Output
// Output 1:

//  1
// Output 2:

//  0

// Example Explanation
// Explanation 1:

//  'c' can be repeated 0 times, 'a' can be repeated 1 time. Therefore, it matches "aab".
//  So, return 1.
// Explanation 2:

//  '.' matches any single character. First two character in string A will be match.
//  But the last character i.e 'z' != 'a'. Return 0.

// TC - O(N*M)
// SC - O(N*M)
function dfs(i, j, s, p, dp) {
  if (i >= s.length && j >= p.length) return true;
  if (j >= p.length) return false;
  const key = `${i}_${j}`;
  if (dp[key] !== undefined) return dp[key];
  const match = i < s.length && (s[i] === p[j] || p[j] === ".");
  if (j + 1 < p.length && p[j + 1] === "*") {
    dp[key] = (match && dfs(i + 1, j, s, p, dp)) || dfs(i, j + 2, s, p, dp);
  } else if (match) {
    dp[key] = dfs(i + 1, j + 1, s, p, dp);
  } else dp[key] = false;
  return dp[key];
}

function solve(s, p) {
  let dp = {};
  return dfs(0, 0, s, p, dp) ? 1 : 0;
}

// const A = "aab"
// const B = "c*a*b"

// const A = "acz"
// const B = "a.a"

const A = "abcbcd";
const B = "a.*c.*d";
console.log(solve(A, B));
