/*
Count A

Problem Description
You are given a string A. Find the number of substrings that start and end with 'a'.



Problem Constraints
1 <= |A| <= 10^5

The string will have only lowercase English letters.



Input Format
Given the only argument is a String A.



Output Format
Return number of substrings that start and end with 'a'.



Example Input
Input 1:

 A = "aab"
Input 2:

 A = "bcbc"


Example Output
Output 1:

 3
Output 2:

 0


Example Explanation
Explanation 1:

 Substrings that start and end with 'a' are:
    1. "a"
    2. "aa"
    3. "a"
Explanation 2:

 There are no substrings that start and end with 'a'.
*/

// TC - O(N)
// SC - O(1)

function solve(s) {
  let countA = 0;
  let ans = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "a") {
      ans += countA + 1;
      countA++;
    }
  }
  return ans
}

const s = "abaacdak";

console.log(solve(s));
