/*
Permutations

Problem Description
Given an integer array A of size N denoting collection of numbers , return all possible permutations.

NOTE:

No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
Return the answer in any order
WARNING: DO NOT USE LIBRARY FUNCTION FOR GENERATING PERMUTATIONS. Example : next_permutations in C++ / itertools.permutations in python.
If you do, we will disqualify your submission retroactively and give you penalty points.


Problem Constraints
1 <= N <= 9



Input Format
Only argument is an integer array A of size N.



Output Format
Return a 2-D array denoting all possible permutation of the array.



Example Input
A = [1, 2, 3]


Example Output
[ [1, 2, 3]
  [1, 3, 2]
  [2, 1, 3] 
  [2, 3, 1] 
  [3, 1, 2] 
  [3, 2, 1] ]


Example Explanation
All the possible permutation of array [1, 2, 3].
*/

let finalAns = [];
let j = 0

function solve(A) {
    function permuteRecursive(A, ans, index, visited) {
        if (index === A.length) {
            const a = ans.map(a => a)
            finalAns.push(a)
            return
        }
        for (let i = 0; i < A.length; i++) {
          if (visited[i]) continue;
          visited[i] = true;
          ans[index] = A[i];
          permuteRecursive(A, ans, index + 1, visited);
          visited[i] = false;
        }
      }
      permuteRecursive(A, [], 0, []);
      return finalAns;
}

const A = [1, 2, 3];
console.log(solve(A));
