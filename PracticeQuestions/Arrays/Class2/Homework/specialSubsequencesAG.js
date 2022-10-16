/*
Special Subsequences "AG"

Problem Description
You have given a string A having Uppercase English letters.

You have to find how many times subsequence "AG" is there in the given string.

NOTE: Return the answer modulo 109 + 7 as the answer can be very large.



Problem Constraints
1 <= length(A) <= 10^5



Input Format
First and only argument is a string A.



Output Format
Return an integer denoting the answer.



Example Input
Input 1:

 A = "ABCGAG"
Input 2:

 A = "GAB"


Example Output
Output 1:

 3
Output 2:

 0


Example Explanation
Explanation 1:

 Subsequence "AG" is 3 times in given string 
Explanation 2:

There is no subsequence "AG" in the given string.
*/

// The concept is based on sliding window
// TC = O(N)
// Find first occurence of A
// Find count of G after first occurence of A
// Keep adding gcount to answer whenever an A is encountered
// Keep subtracting 1 from gcount whenever a G is encountered 
function solve(A) {
  let MOD = Math.pow(10, 9) + 7;
  let aIndex = -1;
  let gCountAfterA = 0;
  for (let i = 0; i < A.length; i++) {
    if (aIndex === -1 && A[i] === "A") aIndex = i;
    if (aIndex !== -1 && A[i] === "G") gCountAfterA++;
  }
  let ans = 0;
  let i = aIndex;
  while (i < A.length) {
    if (A[i] === "A") ans = ((ans % MOD) + gCountAfterA) % MOD;
    if (A[i] === "G") gCountAfterA--;
    i++;
  }
  return ans % MOD;
}

// const A = "GUGPUAGAFQBMPYAGGAAOALAELGGGAOGLGEGZ"

// console.log(solve(A))

// const  A = "ABCGAG"
// console.log(solve(A))

const A = "GAB";
console.log(solve(A));
