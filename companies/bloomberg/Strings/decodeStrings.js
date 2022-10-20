// Decode String
// Difficulty Level - Medium

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

// Solution is implemented using stack
// TC - Linear

function getString(stack, ele) {
  let str = "";
  while (ele !== "[") {
    ele = stack.pop();
    if (ele !== "[") {
      str = ele + str;
    }
  }
  return str;
}

function getNumber(ele, stack) {
  let num = "";
  while (!isNaN(ele)) {
    num = ele.toString() + num;
    ele = stack.pop();
  }
  return [ele, num];
}

function pushBackString(stack, str, num) {
  stack.push(str.repeat(num));
  return;
}

function solve(s) {
  let stack = [];
  stack.push();
  let i = 0;
  while (i < s.length) {
    let ele = s[i];
    let str = "";
    if (ele == "]") {
      str = getString(stack, ele);
      ele = Number(stack.pop());
      let [element, num] = getNumber(ele, stack);
      if (element !== undefined) stack.push(element);
      num = Number(num);
      pushBackString(stack, str, num);
    } else {
      stack.push(ele);
    }
    i++;
  }
  return stack.join("");
}

// const s = "3[a]2[bc]"
// Output: "aaabcbc"

// const s = "3[a2[c]]"
// Output: "accaccacc"

// const s = "2[abc]3[cd]ef";
// Output: "abcabccdcdcdef"

// const s = "100[leetcode]";
const s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef";
// console.log("zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef".split(""))
// 3[z]2[2[y]pq4[2[jk]e1[f]]]ef
console.log(solve(s));
