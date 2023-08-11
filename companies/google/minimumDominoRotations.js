// 1007. Minimum Domino Rotations For Equal Row
// Medium
// company
// Google
// Amazon
// Apple
// In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

// Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

// If it cannot be done, return -1.

// Example 1:

// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Explanation:
// The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
// Example 2:

// Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
// Output: -1
// Explanation:
// In this case, it is not possible to rotate the dominoes to make one row of values equal.

// Constraints:

// 2 <= tops.length <= 2 * 10^4
// bottoms.length == tops.length
// 1 <= tops[i], bottoms[i] <= 6

// The solution randomly takes any one domino and the function checks with both the numbers on the domino. suppose we took first domino which has numbers 2 and 5 on bottom, then while checking with 2, 2 should be present either on top or bottom, if it is not present in either side then it is imposible to rotate based on that value,. Similarly we will check for the bottom(5) of the selected domino
// TC - O(N)
// SC - O(1)
function check(t, A, B) {
  const N = A.length;
  let aMissing = 0;
  let bMissing = 0;
  for (let i = 0; i < N; i++) {
    if (!(A[i] === t || B[i] === t)) return -1;
    if (A[i] !== t) aMissing += 1;
    if (B[i] !== t) bMissing += 1;
  }
  return Math.min(aMissing, bMissing);
}

function solve(A, B) {
  const t1 = A[0];
  const t2 = B[0];
  const rotations = check(t1, A, B);
  if (rotations !== -1 || t1 == t2) return rotations;
  return check(t2, B, A);
}

const tops = [1, 2, 2, 4, 2, 2];
const bottoms = [2, 5, 6, 2, 3, 2];
// Output: 2

// const tops = [3,5,1,2,3]
// const bottoms = [3,6,3,3,4]
// Output: -1

console.log(solve(tops, bottoms));
