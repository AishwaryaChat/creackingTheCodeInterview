// Another Coin Problem

// Problem Description
// The monetary system in DarkLand is really simple and systematic. The locals-only use coins. The coins come in different values. The values used are:

//  1, 5, 25, 125, 625, 3125, 15625, ...
// Formally, for each K >= 0 there are coins worth 5K.

// Given an integer A denoting the cost of an item, find and return the smallest number of coins necessary to pay exactly the cost of the item (assuming you have a sufficient supply of coins of each of the types you will need).

// Problem Constraints
// 1 <= A <= 2×10^9

// Input Format
// The only argument given is integer A.

// Output Format
// Return the smallest number of coins necessary to pay exactly the cost of the item.

// Example Input
// Input 1:

//  A = 47
// Input 2:

//  A = 9

// Example Output
// Output 1:

//  7
// Output 2:

//  5

// Example Explanation
// Explanation 1:

//  Representation of 7 coins will be : (1 + 1 + 5 + 5 + 5 + 5 + 25).
// Explanation 2:

//  Representation of 5 coins will be : (1 + 1 + 1 + 1 + 5).

function recursive(A, num, dp) {
  if (dp[A] !== undefined) return dp[A];
  if (A === 0) return 0;
  if (A === 1) return 1;
  let count = Number.MAX_SAFE_INTEGER;
  let pow = Math.pow(num, 0);
  for (let i = 0; pow <= A; i++) {
    count = Math.min(count, 1 + recursive(A - pow, num, dp));
    pow = Math.pow(num, i + 1);
  }
  dp[A] = count;
  return count;
}

function iterative(A) {
  const dp = new Array(A + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= A; i++) {
    dp[i] = i;
    let pow = Math.pow(5, 0);
    for (let j = 1; j <= i; j *= 5) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j]);
    }
  }
  return dp[A];
}

// TC - O(log N, base 5)
function logN(A) {
  let count = 0;
  while (A > 0) {
    count += A % 5;
    A = Math.floor(A / 5);
  }
  return count;
}

function solve(A) {
  // return recursive(A, 5, {})
  //   return iterative(A, 5);
  return logN(A);
}

// const A = 47;
// Output: 7

// const A = 9;
// Output: 5

// const A = 87;
const A = 15625;
// const A = 35;

console.log(solve(A));
// console.log(Math.log10(15625) / Math.log10(5));
