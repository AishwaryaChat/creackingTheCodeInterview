/*
Cyclic Permutations

Problem Description
Given two binary strings A and B, count how many cyclic shift of B when taken XOR with A give 0.

NOTE: If there is a string, S0, S1, ... Sn-1 , then it is a cyclic shift is of the form Sk, Sk+1, ... Sn-1, S0, S1, ... Sk-1 where k can be any integer from 0 to N-1.



Problem Constraints
1 ≤ length(A) = length(B) ≤ 10^5



Input Format
The first argument is a string A.
The second argument is a string B.



Output Format
Return an integer denoting the required answer.



Example Input
Input 1:

 A = "1001"
 B = "0011"
Input 2:

 A = "111"
 B = "111"


Example Output
Output 1:

 1
Output 2:

 3


Example Explanation
Explanation 1:

 4 cyclic shifts of B exists: "0011", "0110", "1100", "1001".  
 There is only one cyclic shift of B i.e. "1001" which has 0 xor with A.
Explanation 2:

 All cyclic shifts of B are same as A and give 0 when taken xor with A. So, the ans is 3.

*/
// Below algo is a bruteforce algorithm
// TC = O(N^2)

function compare(i, A, B) {
  let j = 0;
  let k = i;
  while (j < A.length && A[j] === B[k]) {
    j++;
    k++;
    if (k >= A.length) k = 0;
  }
  if (j === A.length) return true;
  return false;
}

function solve(A, B) {
  let count = 0;
  for (let i = 0; i < B.length; i++) {
    if (compare(i, A, B)) count++;
  }
  return count;
}

// Below is the optimised solution 
// The Algorithm is called KMP (Knuth Morris Pratt) algorithm
// The idea is to find out the number of cyclic permutations in B which 
// are exactly equal to A
// This is because XOR of two strings can only be 0 if they are identical
// So if we do B + B and then keep taking the substrings of length B.length from B+B, we will get all the cyclic permutations of B
// TC = O(N)
// SC = O(1)

function solve2(A, B) {
  let newB = B + B;
  let count = 0;
  for (let i = 1; i <= A.length; i++) {
    let str = newB.slice(i, i + B.length);
    if (A == str) count++;
  }
  return count;
}

// const A = "1001";
// const B = "0011";

// const A = "111";
// const B = "111";

// const A = "0011000010"
// const B = "0101000001"

const A = "1101111111";
const B = "1101111111";

// const A =
//   "00110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010001100001000110000100011000010";
// const B =
//   "01010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001010100000101010000010101000001";

console.log(solve2(A, B));
