/*
N digit numbers

Problem Description
Find out the number of A digit positive numbers, whose digits on being added equals to a given number B.

Note that a valid number starts from digits 1-9 except the number 0 itself. i.e. leading zeroes are not allowed.

Since the answer can be large, output answer modulo 1000000007



Problem Constraints
1 <= A <= 1000

1 <= B <= 10000



Input Format
First argument is the integer A

Second argument is the integer B



Output Format
Return a single integer, the answer to the problem



Example Input
Input 1:

 A = 2
 B = 4
Input 2:

 A = 1
 B = 3


Example Output
Output 1:

 4
Output 2:

 1


Example Explanation
Explanation 1:

 Valid numbers are {22, 31, 13, 40}
 Hence output 4.
Explanation 2:

 Only valid number is 3
*/

// Start filling the digits from ones place and next going forward
// Do this until the sum left is 0
// If we do this using recusion this will take O(2^n) time with O(N) stack space
// If we see this follows optimial substructure and overlapping subproblem structure
// so we can solve this using DP
// TC = O(N^2)
// SP = O(N^2)

// space complexity can be optimised since we are using the the values only from previous row (digit) and current(digit)
// can be made O(N)

function solve(N, S) {
  let DP = [];
  for (let i = 0; i <= N; i++) {
    DP[i] = [];
    for (let j = 0; j <= S; j++) {
      DP[i][j] = 0;
    }
  }
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= S; j++) {
      if (i == 1) DP[i][j] = j > 9 ? 0 : 1;
      else {
        for (let digit = 0; digit <= 9 && digit <= j; digit++) {
          DP[i][j] += DP[i - 1][j - digit];
        }
      }
    }
  }
  return DP[N][S];
}

const N = 2;
const S = 3;

console.log(solve(N, S));


