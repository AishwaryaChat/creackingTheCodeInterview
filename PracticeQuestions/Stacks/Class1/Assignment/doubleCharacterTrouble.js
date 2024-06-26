/*
Double Character Trouble

Problem Description
You are given a string A.

An operation on the string is defined as follows:

Remove the first occurrence of the same consecutive characters. eg for a string "abbcd", the first occurrence of same consecutive characters is "bb".

Therefore the string after this operation will be "acd".

Keep performing this operation on the string until there are no more occurrences of the same consecutive characters and return the final string.



Problem Constraints
1 <= |A| <= 100000



Input Format
First and only argument is string A.



Output Format
Return the final string.



Example Input
Input 1:

 A = abccbc
Input 2:

 A = ab


Example Output
Output 1:

 "ac"
Output 2:

 "ab"


Example Explanation
Explanation 1:

Remove the first occurrence of same consecutive characters. eg for a string "abbc", 
the first occurrence of same consecutive characters is "bb".
Therefore the string after this operation will be "ac".
Explanation 2:

 No removals are to be done.
*/

function solve(A) {
  let st = [];
  let top = -1;
  for (let i = 0; i < A.length; i++) {
    if (top != -1) {
      if (st[top] === A[i]) {
        st.pop();
        top -= 1;
      } else {
        st.push(A[i]);
        top += 1;
      }
    } else {
      st.push(A[i]);
      top += 1;
    }
  }
  return st.join('')
}

const A = "abccbc";

console.log(solve(A));
