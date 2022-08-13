/*
Minimum Number of Squares

Problem Description
Given an integer A. Return minimum count of numbers, sum of whose squares is equal to A.



Problem Constraints
1 <= A <= 10^5



Input Format
First and only argument is an integer A.



Output Format
Return an integer denoting the minimum count.



Example Input
Input 1:

 A = 6
Input 2:

 A = 5


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 Possible combinations are : (12 + 12 + 12 + 12 + 12 + 12) and (12 + 12 + 22).
 Minimum count of numbers, sum of whose squares is 6 is 3. 
Explanation 2:

 We can represent 5 using only 2 numbers i.e. 12 + 22 = 5
*/

// TC - O(N * sqRoot(N))
// SC - O(N)

// The idea here is to findout min(1 + count(N - x^2)), where x^2 is all the numbers between 1 to N (adding 1, because for x^2 we have to add 1 count)
// to find out above we first have to find out minimum count for smaller numbers
// so running the loop for all the numbers from 1 to N, counting minimum for all
// We cant optimise here on space because we don't know which all previous values we need to calculate answer for current number

function solve(N) {
  let dp = [0, 1];
  for (let i = 2; i <= N; i++) {
    dp[i] = i;
    for (let x = 1; x * x <= i; x++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - x * x]);
    }
  }
  return dp[N]
}


console.log(solve(10))