// Reverse Substrings Between Each Pair of Parentheses
// Medium
// company
// Microsoft
// Amazon
// Paypal
// You are given a string s that consists of lower case English letters and brackets.

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.

// Example 1:

// Input: s = "(abcd)"
// Output: "dcba"
// Example 2:

// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.
// Example 3:

// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

// Constraints:

// 1 <= s.length <= 2000
// s only contains lower case English characters and parentheses.
// It is guaranteed that all parentheses are balanced.

// O(n^2)
function solve(s) {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ")") {
      ans.push(s[i]);
    } else {
  let intermediate = [];
  while (ans[ans.length - 1] !== "(") {
        intermediate.push(ans.pop());
      }
      ans.pop();
      let j=0
      while (j < intermediate.length) {
        ans.push(intermediate[j]);
        j++
      }
    }
  }
  return ans.join("");
}

// const s = "(abcd)"
// Output: "dcba"

// const s = "(u(love)i)"
// Output: "iloveu"

const s = "(ed(et(oc))el)";
// Output: "leetcode"

console.log(solve(s));
