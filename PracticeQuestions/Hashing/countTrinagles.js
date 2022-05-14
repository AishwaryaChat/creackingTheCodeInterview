/*
Count Right Triangles

Problem Description
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2D Cartesian plane.

Find and return the number of unordered triplets (i, j, k) such that (A[i], B[i]), (A[j], B[j]) and (A[k], B[k]) form a right-angled triangle with the triangle having one side parallel to the x-axis and one side parallel to the y-axis.

NOTE: The answer may be large so return the answer modulo (109 + 7).



Problem Constraints
1 <= N <= 10^5

0 <= A[i], B[i] <= 10^9



Input Format
The first argument given is an integer array A.
The second argument given is the integer array B.



Output Format
Return the number of unordered triplets that form a right angled triangle modulo (109 + 7).



Example Input
Input 1:

 A = [1, 1, 2]
 B = [1, 2, 1]
Input 2:

 A = [1, 1, 2, 3, 3]
 B = [1, 2, 1, 2, 1]


Example Output
Output 1:

 1
Output 2:

 6


Example Explanation
Explanation 1:

 All three points make a right angled triangle. So return 1.
Explanation 2:

 6 triplets which make a right angled triangle are:    (1, 1), (1, 2), (2, 2)
                                                       (1, 1), (3, 1), (1, 2)
                                                       (1, 1), (3, 1), (3, 2)
                                                       (2, 1), (3, 1), (3, 2)
                                                       (1, 1), (1, 2), (3, 2)
                                                       (1, 2), (3, 1), (3, 2)


*/

// TC = O(N^2)
// SC = O(N)

// Solution is not correct
// function solveN2(A, B) {
//   let map = {};
//   for (let i = 0; i < A.length; i++) {
//     map[[A[i], B[i]]] = (map[[A[i], B[i]]] || 0) + 1;
//   }
// //   console.log("map", map);
//   let ans = 0;
//   for (let i = 0; i < A.length; i++) {
//     // console.log("i", i);
//     for (let j = i + 1; j < B.length; j++) {
//       let pointX = map[[A[i], B[j]]];
//       let pointX1 = map[[B[i], A[j]]];
//       if (
//         (pointX || pointX1) &&
//         B[i] != B[j] &&
//         A[i] != A[j]
//       ) {
//         ans++;
//       }
//     }
//   }
//   return ans;
// }

// const K = [1, 1, 2, 3, 3]
// const L = [1, 2, 1, 2, 1]

// const K = [1, 1, 2];
// const L = [1, 2, 1];

// console.log(solveN2(K, L));

// TC = O(N)
// SC = O(N)
// Idea is to assume every point is a right angle point, if other two points exist for it then count that for a triangle
// 
function solve(A, B) {
  let aMap = {};
  let bMap = {};
  for (let i = 0; i < A.length; i++) {
    aMap[A[i]] = (aMap[A[i]] || 0) + 1;
    bMap[B[i]] = (bMap[B[i]] || 0) + 1;
  }
  let ans = 0;
  let MOD = 1000000007;
  for (let i = 0; i < A.length; i++) {
    let xPoint = A[i];
    let yPoint = B[i];
    let xCount = aMap[xPoint];
    let yCount = bMap[yPoint];
    if (xCount && yCount) {
      ans += ((xCount - 1) * (yCount - 1)) % MOD;
    }
  }
  return ans % MOD;
}

const A = [1, 1, 2, 3, 3];
const B = [1, 2, 1, 2, 1];

// const A = [1, 1, 2]
// const B = [1, 2, 1]

console.log(solve(A, B))
