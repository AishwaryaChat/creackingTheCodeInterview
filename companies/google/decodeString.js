// Decode String
// Medium
// company
// Bloomberg
// Google
// Amazon
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 10^5.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].
// TC - O(N)
function solve(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let str = "";
      while (stack.length) {
        const ele = stack.pop();
        if (isNaN(Number(ele)) && ele !== "[") {
          str = ele + str;
        } else break;
      }
      let num = "";
      while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
        const ele = stack.pop();
        num = ele + num;
      }
      stack.push(str.repeat(Number(num)));
    } else {
      stack.push(s[i]);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (!isNaN(Number(stack[i]))) return "";
  }
  return stack.join("");
}

// const s = "3[a]2[bc]"
// Output: "aaabcbc"

// const s = "3[a2[c]]"
// Output: "accaccacc"

// const s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

const s = "3";

console.log(solve(s));
