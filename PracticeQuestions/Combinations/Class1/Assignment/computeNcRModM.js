// Compute nCr % m
// Attempted
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description
// Given three integers A, B, and C, where A represents n, B represents r, and C represents m, find and return the value of nCr % m where nCr % m = (n!/((n-r)!*r!))% m.

// x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

// Problem Constraints
// 1 <= A * B <= 10^6

// 1 <= B <= A

// 1 <= C <= 10^6

// Input Format
// The first argument given is integer A ( = n).
// The second argument given is integer B ( = r).
// The third argument given is integer C ( = m).

// Output Format
// Return the value of nCr % m.

// Example Input
// Input 1:

//  A = 5
//  B = 2
//  C = 13
// Input 2:

//  A = 6
//  B = 2
//  C = 13

// Example Output
// Output 1:

//  10
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  The value of 5C2 % 11 is 10.
// Explanation 2:

//  The value of 6C2 % 13 is 2.

function solve(n, r, m) {
  const dp = new Array(r).fill(0);
  let dpiMinus1 = new Array(r).fill(0);
  dpiMinus1[0] = 1;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= r; j++) {
      if (j === 0) dp[j] = 1;
      else if (i === j) dp[j] = 1;
      else if (j <= i) {
        dp[j] = (dpiMinus1[j - 1] + dpiMinus1[j]) % m;
      }
    }
    dpiMinus1 = dp.map(a => a)
  }
  
  return dp[r];
}

const n = 5;
const r = 2;
const m = 13;
// Output: 10

// const n = 6
// const r = 2
// const m = 13
// Output: 2

// const n = 6;
// const r = 3;
// const m = 9;

console.log(solve(n, r, m));
