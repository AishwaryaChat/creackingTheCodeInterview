/*
Ath Magical Number

Problem Description
You are given three positive integers, A, B, and C.

Any positive integer is magical if divisible by either B or C.

Return the Ath smallest magical number. Since the answer may be very large, return modulo 109 + 7.



Problem Constraints
1 <= A <= 109

2 <= B, C <= 40000



Input Format
The first argument given is an integer A.

The second argument given is an integer B.

The third argument given is an integer C.



Output Format
Return the Ath smallest magical number. Since the answer may be very large, return modulo 109 + 7.



Example Input
Input 1:

 A = 1
 B = 2
 C = 3
Input 2:

 A = 4
 B = 2
 C = 3


Example Output
Output 1:

 2
Output 2:

 6


Example Explanation
Explanation 1:

 1st magical number is 2.
Explanation 2:

 First four magical numbers are 2, 3, 4, 6 so the 4th magical number is 6.
*/

// bruteforce solution
// TC = O(N*min(A, B))
// SC = O(1)
function bruteforce(A, B, N) {
  let L = Math.min(A, B);
  let R = N * L;
  let i = 1;
  let result;
  while (i <= N && L <= R) {
    if (L % A === 0 || L % B === 0) {
      result = L;
      i++;
    }
    L++;
  }
  return result;
}

let B = 2;
let C = 3;
let A = 1;
// console.log(bruteforce( B, C, A))

B = 2;
C = 3;
A = 4;
// console.log(bruteforce( B, C, A))

// let B = 11
// let C = 13
// let A = 19
// console.log(bruteforce( B, C, A))

// Tc = O((N)
// SC = O(1)
function solve(A, B, N) {
  let a = A;
  let b = B;
  for (let i = 1; i < N; i++) {
    if (a < b) a += A;
    else if (a > b) b += B;
    else {
      a += A;
      b += B;
    }
  }
  return Math.min(a, b);
}

//  B = 11
//  C = 13
//  A = 19

// console.log(solve(B, C, A))

// Solution using binary search
// TC = O(log (N * min(A, B)))
// SC = O(1)
function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

function solveBinary(N, A, B) {
  const MOD = 1000000007;
  A = A;
  B = B;
  let L = Math.min(A, B);
  let R = N * L;
  let gcdOfAB = gcd(A, B);
  let lcm = Math.floor(A / gcdOfAB) * B;
  while (L <= R) {
    let mid = L + Math.floor((R - L) / 2);
    let count =
      Math.floor(mid / A) + Math.floor(mid / B) - Math.floor(mid / lcm);
    if (count === N && (mid % A === 0 || mid % B === 0)) return mid % MOD;
    if (count < N) L = mid + 1;
    else R = mid - 1;
  }
}

// A = 19;
// B = 11;
// C = 13;

A = 807414236;
B = 3788;
C = 38141;

console.log(solveBinary(A, B, C));
