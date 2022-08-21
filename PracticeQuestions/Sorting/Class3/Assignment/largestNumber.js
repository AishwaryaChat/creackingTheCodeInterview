/*
Largest Number

Problem Description
Given an array A of non-negative integers, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer.



Problem Constraints
1 <= len(A) <= 100000
0 <= A[i] <= 2*10^9



Input Format
The first argument is an array of integers.



Output Format
Return a string representing the largest number.



Example Input
Input 1:

 A = [3, 30, 34, 5, 9]
Input 2:

 A = [2, 3, 9, 0]


Example Output
Output 1:

 "9534330"
Output 2:

 "9320"


Example Explanation
Explanation 1:

Reorder the numbers to [9, 5, 34, 3, 30] to form the largest number.
Explanation 2:

Reorder the numbers to [9, 3, 2, 0] to form the largest number 9320.
*/

function customSort(a, b) {
  let strAB = a + "" + b;
  let strBA = b + "" + a;
  if (strAB  > strBA) return -1;
  else return 1;
}

function solve(A) {
  A.sort(customSort);
  if (A[0] === 0) return "0";
  return A.join("");
}

// const A = [3, 30, 34, 5, 9];
// const A = [0, 0, 0, 0];
const A = [472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412];
console.log(solve(A));
