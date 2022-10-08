// Coin Sum Infinite

// Problem Description
// You are given a set of coins A. In how many ways can you make sum B assuming you have infinite amount of each coin in the set.

// NOTE:

// Coins in set A will be unique. Expected space complexity of this problem is O(B).
// The answer can overflow. So, return the answer % (106 + 7).

// Problem Constraints
// 1 <= A <= 500
// 1 <= A[i] <= 1000
// 1 <= B <= 50000

// Input Format
// First argument is an integer array A representing the set.
// Second argument is an integer B.

// Output Format
// Return an integer denoting the number of ways.

// Example Input
// Input 1:

//  A = [1, 2, 3]
//  B = 4
// Input 2:

//  A = [10]
//  B = 10

// Example Output
// Output 1:

//  4
// Output 2:

//  1

// Example Explanation
// Explanation 1:

//  The 4 possible ways are:
//  {1, 1, 1, 1}
//  {1, 1, 2}
//  {2, 2}
//  {1, 3}
// Explanation 2:

//  There is only 1 way to make sum 10.

// Below solution is correct when we want result for all permutations
function solve(A, B) {
  const ways = new Array(B + 1).fill(0);
  ways[0] = 1;
  for (let i = 1; i <= B; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[j] <= i) {
        ways[i] += ways[i - A[j]];
      }
    }
  }
  return ways[B];
}

// Below solution is correct when we want result only for a combination of coins, order doesn't matter, so {1, 3} === {3, 1}
// TC - O(N * B)
// SC = O(B)
function solveCombinations(A, B) {
  const ways = new Array(B + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < A.length; i++) {
    for (let sum = A[i]; sum <= B; sum++) {
      ways[sum] += ways[sum - A[i]];
    }
  }
  return ways[B];
}

// const A = [1, 2, 3];
// const B = 4;

const A = [10];
const B = 10;

console.log(solveCombinations(A, B));
