// Maximum Sum Value

// Problem Description

// You are given an array A of N integers and three integers B, C, and D.

// You have to find the maximum value of A[i]*B + A[j]*C + A[k]*D, where 1 <= i <= j <= k <= N.

// Problem Constraints

// 1 <= N <= 105

// -10000 <= A[i], B, C, D <= 10000

// Input Format

// First argument is an array A
// Second argument is an integer B
// Third argument is an integer C
// Fourth argument is an integer D

// Output Format

// Return an Integer S, i.e maximum value of (A[i] * B + A[j] * C + A[k] * D), where 1 <= i <= j <= k <= N.

// Example Input

// Input 1:

//  A = [1, 5, -3, 4, -2]
//  B = 2
//  C = 1
//  D = -1
// Input 2:

//  A = [3, 2, 1]
//  B = 1
//  C = -10
//  D = 3

// Example Output

// Output 1:

//  18
// Output 2:

//  -4

// Example Explanation

// Explanation 1:

//  If you choose i = 2, j = 2, and k = 3 then we will get
//  A[2]*B + A[2]*C + A[3]*D = 5*2 + 5*1 + (-3)*(-1) = 10 + 5 + 3 = 18
// Explanation 2:

//  If you choose i = 1, j = 3, and k = 3 then we will get
//  A[1]*B + A[3]*C + A[3]*D = (3*1) + (-10*1) + (3*1) = 3 - 10 + 3 = -4

// The idea here is to first get the prefixMax for first number
// Now since the value of j and k can only be greater than i, start finding out
// prefixMax for C ysing prefixMax for B and then for D using prefixMax for C
// so if A = [1, 5, -3, -4, -2], B = 2, C = 1, D = -1
// prefixMaxB = [2*1, 2*5, 2*-3 < 10 so 10, 10, 10] - after 2*5 everything is less than 10
// prefixMaxC = [1*1+prefixMaxB[0] === 3, 5*-1 + prefixMaxB[1] === 15, ...]
// similarly find prefixMaxD and prefixMaxC[A.length-1] will be the answer
// TC - O(N)
// SC - O(N)

function solve(A, B, C, D) {
  let prefixMaxB = [B * A[0]];
  for (let i = 1; i < A.length; i++) {
    prefixMaxB[i] = Math.max(prefixMaxB[i - 1], B * A[i]);
  }
  let prefixMaxC = [C * A[0] + prefixMaxB[0]];
  for (let i = 1; i < A.length; i++) {
    prefixMaxC[i] = Math.max(prefixMaxC[i - 1], C * A[i] + prefixMaxB[i]);
  }

  let prefixMaxD = [D * A[0] + prefixMaxC[0]];
  for (let i = 1; i < A.length; i++) {
    prefixMaxD[i] = Math.max(prefixMaxD[i - 1], D * A[i] + prefixMaxC[i]);
  }
  return prefixMaxD[A.length - 1];
}

const A = [1, 5, -3, 4, -2];
const B = 2;
const C = 1;
const D = -1;
console.log("solve", solve(A, B, C, D));
