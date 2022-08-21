/*
Sum the Difference

Problem Description
Given an integer array, A of size N.
You have to find all possible non-empty subsequences of the array of numbers and then, for each subsequence, find the difference between the largest and smallest numbers in that subsequence. Then add up all the differences to get the number.

As the number may be large, output the number modulo 1e9 + 7 (1000000007).

NOTE: Subsequence can be non-contiguous.



Problem Constraints
1 <= N <= 10000

1<= A[i] <=1000



Input Format
First argument is an integer array A.



Output Format
Return an integer denoting the output.



Example Input
Input 1:

A = [1, 2] 
Input 2:

A = [1]


Example Output
Output 1:

 1 
Output 2:

 0


Example Explanation
Explanation 1:

All possible non-empty subsets are:
[1]    largest-smallest = 1 - 1 = 0
[2]    largest-smallest = 2 - 2 = 0
[1 2]  largest-smallest = 2 - 1 = 1
Sum of the differences = 0 + 0 + 1 = 1
So, the resultant number is 1 
Explanation 2:

 Only 1 subsequence of 1 element is formed.
*/

// The idea is to find 

function solve(A) {
    const MOD = Math.pow(10, 9) + 7;
    A.sort((a, b) => a - b);
    const N = A.length;
    let ans = 0;
    let map = {};
    for (let i = 0; i < N; i++) {
      let greaterNumbers = N - i - 1;
      const minContributionSubsets = map[greaterNumbers]
        ? map[greaterNumbers]
        : Math.pow(2, greaterNumbers);
      const maxContributionSubsets = map[i] ? map[i] : Math.pow(2, i);
      map[greaterNumbers] = minContributionSubsets;
      map[i] = maxContributionSubsets;
      ans =
        (ans%MOD +
          (((A[i] % MOD * (maxContributionSubsets % MOD - minContributionSubsets % MOD)) % MOD) %
            MOD)) %
        MOD;
    }
    return ans;
}

// const A = [1, 2];
const A = [3, 2, 8, 7, 4, 6];

console.log(solve(A));
