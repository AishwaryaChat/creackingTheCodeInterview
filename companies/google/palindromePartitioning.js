// 131. Palindrome Partitioning
// Solved
// Medium
// Topics
// Companies
// Given a string s, partition s such that every
// substring
//  of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

// TC - O(N * 2^N), we are going through each index and for every index we have 2 options either put a cut or not put a cut
// SC - O(N^2), recursion stack space and space for dp
function dfs(start, N, s, ans, midAns, dp) {
  if (start === N) {
    ans.push(midAns.map((a) => a));
    return;
  }
  for (let end = start; end < N; end++) {
    const key = `${start + 1}_${end - 1}`;
    if (s[start] === s[end] && (end - start <= 2 || dp[key])) {
      dp[`${start}_${end}`] = true;
      dfs(end + 1, N, s, ans, [...midAns, s.substring(start, end + 1)], dp);
    }
  }
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let ans = [];
  const N = s.length;
  let dp = {};
  dfs(0, N, s, ans, [], dp);
  return ans;
};
