// 650. 2 Keys Keyboard
// https://leetcode.com/problems/2-keys-keyboard/
// Solved
// Medium
// Topics
// Companies
// Hint
// There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
// Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

// Example 1:

// Input: n = 3
// Output: 3
// Explanation: Initially, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.
// Example 2:

// Input: n = 1
// Output: 0

// Constraints:

// 1 <= n <= 1000

// TC - O(2^n)
// 
function dfs(n, dp, currChars, copied) {
  if (currChars === n) return 0;

  let key = `${currChars}_${copied}`;
  if (dp[key] !== undefined) return dp[key];

  if (copied === 0) return (dp[key] = 1 + dfs(n, dp, currChars, currChars));

  const paste =
    currChars + copied > n
      ? Infinity
      : 1 + dfs(n, dp, currChars + copied, copied);
  const copyPaste =
    2 * currChars > n
      ? Infinity
      : 2 + dfs(n, dp, currChars + currChars, currChars);
  return (dp[key] = Math.min(copyPaste, paste));
}

// function dfs(n, dp) {
//     if(n<=1) return 0
//     if(dp[n]!==undefined) return dp[n]
//     let res = n
//     for(let i=n-1; i>=1; i--) {
//         if(n%i === 0) {
//             res = Math.min(res, (n/i)+dfs(i, dp))
//         }
//     }
//     return dp[n] = res
// }

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let ans = dfs(n, {}, 1, 0);
  return ans;
};

// TC - O(n)
var solve = function(n) {
    let steps = 0
    let curr = 1
    let copied = 0
    while(curr!==n) {
        if(n%curr === 0) {
            copied = curr
            curr += copied
            steps += 2
        } else {
            curr+=copied
            steps+=1
        }
    }
    return steps
};
