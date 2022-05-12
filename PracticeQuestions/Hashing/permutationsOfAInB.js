/*
Permutations of A in B

Problem Description
You are given two strings, A and B, of size N and M, respectively.

You have to find the count of all permutations of A present in B as a substring. You can assume a string will have only lowercase letters.



Problem Constraints
1 <= N < M <= 105



Input Format
Given two arguments, A and B of type String.



Output Format
Return a single integer, i.e., number of permutations of A present in B as a substring.



Example Input
Input 1:

 A = "abc"
 B = "abcbacabc"
Input 2:

 A = "aca"
 B = "acaa"


Example Output
Output 1:

 5
Output 2:

 2


Example Explanation
Explanation 1:

 Permutations of A that are present in B as substring are:
    1. abc
    2. cba
    3. bac
    4. cab
    5. abc
    So ans is 5.
Explanation 2:

 Permutations of A that are present in B as substring are:
    1. aca
    2. caa 
*/

// TC = O(M), M is length of bigger string

function checkIsEqual(freqA, freqB) {
  for (let i = 0; i < freqA.length; i++) {
    if (freqA[i] !== freqB[i]) return false;
  }
  return true;
}

function solve(A, B) {
  let freqA = Array(26).fill(0);
  let freqB = Array(26).fill(0);
  const N = A.length;
  const M = B.length;
  for (let i = 0; i < N; i++) {
    if (A[i]) {
      freqA[A.charCodeAt(i) - "a".charCodeAt(0)]++;
    }
    freqB[B.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  let ans = 0;
  if (checkIsEqual(freqA, freqB)) ans++;
  for (let i = N; i < M; i++) {
    const subtractFreq = B.charCodeAt(i - N);
    const addFreq = B.charCodeAt(i);
    freqB[subtractFreq - "a".charCodeAt(0)]--;
    freqB[addFreq - "a".charCodeAt(0)]++;
    if (checkIsEqual(freqA, freqB)) ans++;
  }
  return ans;
}

// const A = "abc";
// const B = "abcbacabc";

const A = "aca";
const B = "acaa";

console.log(solve(A, B));
