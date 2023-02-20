/*
SUBARRAY OR

Problem Description
You are given an array of integers A of size N.

The value of a subarray is defined as BITWISE OR of all elements in it.

Return the sum of value of all subarrays of A % 109 + 7.



Problem Constraints
1 <= N <= 10^5

1 <= A[i] <= 10^8



Input Format
The first argument given is the integer array A.



Output Format
Return the sum of Value of all subarrays of A % 109 + 7.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [7, 8, 9, 10]


Example Output
Output 1:

 71
Output 2:

 110


Example Explanation
Explanation 1:

 Value([1]) = 1
 Value([1, 2]) = 3
 Value([1, 2, 3]) = 3
 Value([1, 2, 3, 4]) = 7
 Value([1, 2, 3, 4, 5]) = 7
 Value([2]) = 2
 Value([2, 3]) = 3
 Value([2, 3, 4]) = 7
 Value([2, 3, 4, 5]) = 7
 Value([3]) = 3
 Value([3, 4]) = 7
 Value([3, 4, 5]) = 7
 Value([4]) = 4
 Value([4, 5]) = 5
 Value([5]) = 5
 Sum of all these values = 71
Explanation 2:

 Sum of value of all subarray is 110.
*/

// Bruteforce
// TC - O(N^2)

function solve(A) {
  const MOD = Math.pow(10, 9) + 7;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let or = A[i];
    sum += A[i];
    sum = sum % MOD;
    for (let j = i + 1; j < A.length; j++) {
      or |= A[j];
      sum += or;
      sum = sum % MOD;
    }
  }
  return sum % MOD;
}

// const A = [1, 2, 3, 4, 5];
// const A = [7, 8, 9, 10];
// console.log(solve(A));

// Optimized
// TC - O(27 * N) === O(N)

function solveOptimized(A) {
  const MOD = Math.pow(10, 9) + 7;
  let ans = 0;
  let n = A.length;
  for (let i = 0; i <= 31; i++) {
    let ind = n;
    for (let j = n - 1; j >= 0; j--) {
      const bit = (A[j] >> i) & 1;
      if (bit) ind = j;
      ans += (n - ind) * (1 << i);
      ans = ans % MOD;
    }
  }
  return ans;
}

const A = [1, 2, 3, 4, 5];
// const A = [7, 8, 9, 10];
console.log(solveOptimized(A));
