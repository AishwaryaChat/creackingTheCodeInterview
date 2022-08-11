/*
Smallest Prefix String

Problem Description
Given 2 strings A and B of size N and M respectively consisting of lowercase alphabets, find the lexicographically smallest string that can be formed by concatenating non-empty prefixes of A and B (in that order).
Note: The answer string has to start with a non-empty prefix of string A followed by a non-empty prefix of string B.



Problem Constraints
1 <= N, M <= 100000



Input Format
The first argument is a string A of size N.
The second argument is a string B of size M.



Output Format
Return lexicographically smallest string that can be formed by concatenating non-empty prefixes of A and B (in that order).



Example Input
Input 1:

 A = "abba"
 B = "cdd"
Input 2:

 A = "acd"
 B = "bay"


Example Output
Output 1:

 "abbac"
Output 2:

 "ab"


Example Explanation
Explanation 1:

 We can concatenate prefix of A i.e "abba" and prefix of B i.e "c".
 The lexicographically smallest string will be "abbac".
Explanation 2:

 We can concatenate prefix of A i.e "a" and prefix of B i.e "b".
 The lexicographically smallest string will be "ab".
*/

// TC - O(N^2)

function bruteForce(A, B) {
  let smaller = "";
  for (let i = 0; i < A.length; i++) {
    let str = A.slice(0, i + 1);
    for (let j = 0; j < B.length; j++) {
      let str2 = str + B.slice(0, j + 1);
      if (smaller !== "") {
        if (str2 < smaller) smaller = str2;
      } else {
        smaller = str2;
      }
    }
  }
  return smaller;
}

// TC = O(N)
// The idea here is to select prefix from A until the last char from prefix of A is smaller then first character of B
// We are finding prefix from A because answer always contain the string first from A, and then any character from B, so till the time we have smaller elements in A than 1st character of B we can take till that prefix
// Once we find prefix from A like above then we can simply append first character of B in ans and return
//

function solve(A, B) {
  let prefix = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < B[0]) prefix += A[i];
    else break;
  }
  return prefix + B[0];
}

const A = "abba";
const B = "cdd";

console.log(solve(A, B));
