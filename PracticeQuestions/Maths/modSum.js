/*
Mod Sum

Problem Description

Given an array of integers A, calculate the sum of A [ i ] % A [ j ] for all possible i, j pairs. Return sum % (109 + 7) as an output.



Problem Constraints

1 <= length of the array A <= 105

1 <= A[i] <= 103



Input Format

The only argument given is the integer array A.



Output Format

Return a single integer denoting sum % (109 + 7).



Example Input

Input 1:

 A = [1, 2, 3]
Input 2:

 A = [17, 100, 11]


Example Output

Output 1:

 5
Output 2:

 61


Example Explanation

Explanation 1:

 (1 % 1) + (1 % 2) + (1 % 3) + (2 % 1) + (2 % 2) + (2 % 3) + (3 % 1) + (3 % 2) + (3 % 3) = 5

*/
function solve(A) {
  let mod = 1e9 + 7;
  let freq = new Array(1001).fill(0);
  A.forEach((a) => freq[a]++);
  let ans = 0;
  for (let i = 1; i <= 1000; i++) {
    if (freq[i] === 0) continue;
    for (let j = 1; j <= 1000; j++) {
      if (freq[j] === 0) continue;
      let val = j % i;
      let mul = val * freq[i] * freq[j];

      ans = ((ans % mod) + (mul % mod)) % mod;
    }
  }
  return ans;
}

const A = [686, 675, 758, 659, 377, 965, 430, 220, 599, 699];

console.log(solve(A));
