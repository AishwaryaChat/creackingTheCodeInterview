// Let's Party
// Unsolved
// character backgroundcharacter
// Stuck somewhere?
// Ask for help from a TA and get it resolved.
// Get help from TA.
// Problem Description

// In Danceland, one person can party either alone or can pair up with another person.

// Can you find in how many ways they can party if there are A people in Danceland?

// Note: Return your answer modulo 10003, as the answer can be large.

// Problem Constraints

// 1 <= A <= 105

// Input Format

// Given only argument A of type Integer, number of people in Danceland.

// Output Format

// Return an integer denoting the number of ways people of Danceland can party.

// Example Input

// Input 1:

//  A = 3
// Input 2:

//  A = 5

// Example Output

// Output 1:

//  4
// Output 2:

//  26

// Example Explanation

// Explanation 1:

//  Let suppose three people are A, B, and C. There are only 4 ways to party
//  (A, B, C) All party alone
//  (AB, C) A and B party together and C party alone
//  (AC, B) A and C party together and B party alone
//  (BC, A) B and C party together and A
//  here 4 % 10003 = 4, so answer is 4.

// Explanation 2:

//  Number of ways they can party are: 26.

// The idea is to have tow cases, one where a person will dance alone and in that case we simply have to add the number of ways for DP[i-1] and another way where the person will dance with other person so he will choose hispartner from remaining (i-1)persons and for remaining (i-2) we will have to find the way to dance
// SC - O(N)
// TC - O(N)
function solve(N) {
  let MOD = 10003;
  let DP = new Array(N + 1).fill(0);
  DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= N; i++) {
    DP[i] = ((DP[i - 1] % MOD) + (((i - 1) * (DP[i - 2] % MOD)) % MOD)) % MOD;
    console.log(DP);
  }
  return DP[N];
}

// Since we are writing an iterative solution so there is scope of improvement in space complexity
// SC - O(1)
// TC - O(N)
function solveOptimised(N) {
  let MOD = 10003;
  let DP1 = 1;
  let DP2 = 2;
  let DP = 0;
  for (let i = 3; i <= N; i++) {
    DP = ((DP2 % MOD) + (((i - 1) * (DP1 % MOD)) % MOD)) % MOD;
    DP1 = DP2;
    DP2 = DP;
  }
  return DP;
}

const N = 4;
console.log(solveOptimised(N));
