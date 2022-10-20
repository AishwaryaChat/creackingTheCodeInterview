// Remove All Adjacent Duplicates in String II
// Medium

// 4523

// 86

// Add to List

// Share
// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

// Constraints:

// 1 <= s.length <= 105
// 2 <= k <= 104
// s only contains lowercase English letters.

// TC - O(N)
// SC - O(N)
function solve(s, k) {
  if (s.length == 0) return s;
  let stack = [[s[0], 1]];
  let i = 1;
  let prev = [s[0], 1];
  while (i < s.length) {
    let ele = [s[i], 1];
    if (prev && ele[0] === prev[0]) {
      ele[1] = prev[1] + 1;
      if (ele[1] == k) {
        let j = 0;
        while (
          stack.length > 0 &&
          j < k - 1 &&
          ele[0] === stack[stack.length - 1][0]
        ) {
          stack.pop();
          j++;
        }
        let top = stack[stack.length - 1];
        if (top) {
          prev = top;
        } else {
          prev = null;
        }
      } else {
        prev = ele;
        stack.push(ele);
      }
    } else {
      prev = ele;
      stack.push(ele);
    }
    i++;
  }
  return stack.map((e) => e[0]).join("");
}

// Below solution has
// TC - O(N)
// SC - O(N) (workst case)
// This solution is less lengthy, but this deals with string manipulation so the solution will run slower
function solve2(s, k) {
  const stack = [];
  for (const c of s) {
    if (stack.length && c === stack[stack.length - 1][0]) {
      stack[stack.length - 1] += c;
      if (stack[stack.length - 1].length === k) {
        stack.pop();
      }
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
}

// const s = "pbbcggttciiippooaais",
// const s = "aabccbd",
//   k = 2;
// const s = "deeedbbcccbdaa",
//   k = 3;

const s = "iiiixxxxxiiccccczzffffflllllllllfffffllyyyyyuuuuuz";
const k = 5;

console.log(solve(s, k));
