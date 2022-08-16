/*
Ways to Decode

Problem Description
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message denoted by string A containing digits, determine the total number of ways to decode it modulo 109 + 7.



Problem Constraints
1 <= length(A) <= 10^5



Input Format
The first and the only argument is a string A.



Output Format
Return an integer, representing the number of ways to decode the string modulo 109 + 7.



Example Input
Input 1:

 A = "12"
Input 2:

 A = "8"


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 Given encoded message "8", it could be decoded as only "H" (8).
 The number of ways decoding "8" is 1.
Explanation 2:

 Given encoded message "12", it could be decoded as "AB" (1, 2) or "L" (12).
 The number of ways decoding "12" is 2.

*/

// Solving this question using Bottom Up DP approach
// TC = O(N)
// SC = O(1)

function solve(A) {
  if (A[0] === 0) return 0;
  let DP = new Array(A.length + 1).fill(0);
  DP[0] = 1;
  DP[1] = 1;
  let MOD = Math.pow(10, 9) + 7;
  for (let i = 2; i <= A.length; i++) {
    let numA = Number(A[i - 1]);
    let numB = Number(A[i - 2]);
    if (numA >= 1 && numA <= 9) {
      DP[i] = DP[i - 1];
    }
    if (numB === 1 || (numB === 2 && numA >= 0 && numA <= 6)) {
      DP[i] = (DP[i] + DP[i - 2]) % MOD;
    }
  }
  console.log(DP)
  return DP[A.length];
}

// const A = "12";
// const A = "8";
const A = "4126";
// const A =
//   "5163490394499093221199401898020270545859326357520618953580237168826696965537789565062429676962877038781708385575876312877941367557410101383684194057405018861234394660905712238428675120866930196204792703765204322329401298924190";

// const A = "10";

console.log(solve(A));
