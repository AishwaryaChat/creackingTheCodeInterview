/*
Greatest Common Divisor
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA & get it resolved
Get help from TA
Problem Description
Given 2 non-negative integers A and B, find gcd(A, B)

GCD of 2 integers A and B is defined as the greatest integer 'g' such that 'g' is a divisor of both A and B. Both A and B fit in a 32 bit signed integer.

Note: DO NOT USE LIBRARY FUNCTIONS.



Problem Constraints
0 <= A, B <= 109



Input Format
First argument is an integer A.
Second argument is an integer B.



Output Format
Return an integer denoting the gcd(A, B).



Example Input
Input 1:

A = 4
B = 6
Input 2:

A = 6
B = 7


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 2 divides both 4 and 6
Explanation 2:

 1 divides both 6 and 7
*/

function gcd(a, b) {
  if (a == 0 || b == 0) return Math.max(a, b);
  else if (a === b) return b;
  else if (a < b) return gcd(a, b % a);
  else return gcd(b, a % b);
//   OR
// return b ? gcd(b, b%a) : a
}

const a = 4
const b = 6

console.log(gcd(a, b))
