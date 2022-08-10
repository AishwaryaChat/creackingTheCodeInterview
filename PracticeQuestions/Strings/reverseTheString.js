/*
Reverse the String

Problem Description
You are given a string A of size N.

Return the string A after reversing the string word by word.

NOTE:

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.


Problem Constraints
1 <= N <= 3 * 10^5



Input Format
The only argument given is string A.



Output Format
Return the string A after reversing the string word by word.



Example Input
Input 1:
    A = "the sky is blue"
Input 2:
    A = "this is ib"


Example Output
Output 1:
    "blue is sky the"
Output 2:
    "ib is this"    


Example Explanation
Explanation 1:
    We reverse the string word by word so the string becomes "the sky is blue".
Explanation 2:
    We reverse the string word by word so the string becomes "this is ib".
*/

// TC = O(N)
// The idea is to first reverse the whole string
// Then find out the indexes of spaces in the string
// then again reverse the text between spaces

function removeStartingSpaces(A) {
  let i = 0;
  while (A[i] === " ") {
    A.shift();
  }
  return A;
}

function solve(A) {
  let y = 0;
  let z = A.length - 1;
  A = A.split("");
  while (y < z) {
    [A[y], A[z]] = [A[z], A[y]];
    y++;
    z--;
  }
  A = removeStartingSpaces(A);
  let i = 0;
  let spaces = [];
  while (i < A.length) {
    if (A[i] === " ") spaces.push(i);
    i++;
  }
  let j = 0;
  let k = spaces[0];
  for (let l = 0; l <= spaces.length; l++) {
    k = spaces[l] ? spaces[l] - 1 : A.length - 1;
    while (j < k) {
      [A[j], A[k]] = [A[k], A[j]];
      j++;
      k--;
    }
    j = spaces[l] + 1;
  }
  return A.join("");
}

// const A = "the sky is blue";
const A = "crulgzfkif gg ombt vemmoxrgf qoddptokkz op xdq hv ";

console.log(solve(A));
