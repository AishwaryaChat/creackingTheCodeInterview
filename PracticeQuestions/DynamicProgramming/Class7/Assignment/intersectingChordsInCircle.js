// Intersecting Chords in a Circle

// Problem Description
// Given a number A, return number of ways you can draw A chords in a circle with 2 x A points such that no 2 chords intersect.

// Two ways are different if there exists a chord which is present in one way and not in other.
// Return the answer modulo 109 + 7.

// Problem Constraints
// 1 <= A <= 103

// Input Format
// The first and the only argument contains the integer A.

// Output Format
// Return an integer answering the query as described in the problem statement.

// Example Input
// Input 1:

//  A = 1
// Input 2:

//  A = 2

// Example Output
// Output 1:

//  1
// Output 2:

//  2

// Example Explanation
// Explanation 1:

//  If points are numbered 1 to 2 in clockwise direction, then different ways to draw chords are: {(1-2)} only. So, we return 1.
// Explanation 2:

//  If points are numbered 1 to 4 in clockwise direction, then different ways to draw chords are:{(1-2), (3-4)} and {(1-4), (2-3)}.
//  So, we return 2.

// TC - O(N^2)
// SC - O(N)
function solve(N) {
  let MOD = 1000000007n;
  let DP = new Array(N + 1).fill(0n);
  DP[0] = 1n;
  DP[1] = 1n;
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      DP[i] =
        ((DP[i] % MOD) + (((DP[j] % MOD) * (DP[i - j - 1] % MOD)) % MOD)) % MOD;
    }
  }
  return Number(DP[N]);
}

// const N = 4;
// const N = 2
const N = 36;
console.log(solve(N));
