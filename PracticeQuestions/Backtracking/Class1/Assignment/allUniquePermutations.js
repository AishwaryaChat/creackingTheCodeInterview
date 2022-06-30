/*
All Unique Permutations

Problem Description
Given an array A of size N denoting collection of numbers that might contain duplicates, return all possible unique permutations.

NOTE: No 2 entries in the permutation sequence should be the same.

WARNING: DO NOT USE LIBRARY FUNCTION FOR GENERATING PERMUTATIONS. Example : next_permutations in C++ / itertools.permutations in python.
If you do, we will disqualify your submission retroactively and give you penalty points.


Problem Constraints
1 <= |A| <= 9

0 <= A[i] <= 10



Input Format
Only argument is an integer array A of size N.



Output Format
Return a 2-D array denoting all possible unique permutation of the array.



Example Input
Input 1:

A = [1, 1, 2]
Input 2:

A = [1, 2]


Example Output
Output 1:

[ [1,1,2]
  [1,2,1]
  [2,1,1] ]
Output 2:

[ [1, 2]
  [2, 1] ]


Example Explanation
Explanation 1:

 All the possible unique permutation of array [1, 1, 2].
Explanation 2:

 All the possible unique permutation of array [1, 2].
*/

// TC - O(N!) - N! is total permutations
// SC - O(N)

function solve(A) {
  let fr = new Array(Math.max(...A) + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (fr[A[i]]) fr[A[i]]++;
    else fr[A[i]] = 1;
  }
  let finalAns = [];

  function permute(A, fr, ans, index, max) {
    finalAns.push(ans.map((a) => a));
    for (let i = 0; i < fr.length; i++) {
      if (fr[i] === 0) continue;
      ans[index] = i;
      fr[i]--;
      permute(A, fr, ans, index + 1, max);
      fr[i]++;
    }
  }
  permute(A, fr, [], 0, Math.max(...A));
  return finalAns;
}
