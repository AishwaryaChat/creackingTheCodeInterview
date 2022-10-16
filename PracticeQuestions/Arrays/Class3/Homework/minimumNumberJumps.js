/*
Minimum number of jumps

Problem Description
Given an array of non-negative integers A where each element represents your maximum jump length at that position.
The initial position is the first index of the array, and the goal is to reach the last index of the array with the minimum number of jumps.

Note: If it is not possible to reach the last index, return -1 instead.



Problem Constraints
1 <= length of the array <= 100000
0 <= A[i] <= 109



Input Format
The only argument given is the integer array A.



Output Format
Return the minimum number of jumps to reach the last index or -1 if it is not possible.



Example Input
Input 1:

A = [1, 2, 3, 4, 5]
Input 2:

A = [5, 17, 100, 11]


Example Output
Output 1:

3
Output 2:

1


Example Explanation
Explanation 1:

Initial position is the first index.
From index 0 we can only jump to index 1 as first element is 0.
From index 1 we can jump to index 2 or index 3.
From index 2 we can reach the last index i.e. 4 in 1 jump.
so, the minimum number of jumps required is 3.
*/

// TC - O(N)
// SC - O(1)

function minimumNuberOfJumps(A) {
  // curr denotes the maximum position that we can reach with our current jump
  let curr = 0;
  //   far denotes the maximum distance we can go if we jump to any of the option for our current jump
  // For example
  // A = [1, 8, 7, 16, 4, 9, 4, 9, 6, 1, 6, 1, 3, 6, 2, 3, 5, 5]
  // if I am at i = 1, curr = 9, since from i = 0 if we take a jump of 8 we will go to index 9
  // here far denotes = 2+7 === 9 for index i = 2
  // 3 + 16 === 19 for index i = 3
  // so from i = 1 till i = 9, we will keep finding what is the farther jump we can make if we choose any option from i = 1 (8)

  let far = 0;
  let jumps = 0;
  for (let i = 0; i < A.length; i++) {
    if (far < i) return -1;
    far = Math.max(far, i + A[i]);
    if (curr === i && i !== A.length - 1) {
      curr = far;
      jumps += 1;
    }
  }
  return jumps;
}
const D = [1, 8, 7, 16, 4, 9, 4, 9, 6, 1, 6, 1, 3, 6, 2, 3, 5, 5];
console.log(minimumNuberOfJumps(D));

// const A = [5, 17, 100, 11]
// console.log(minimumNuberOfJumps(A))

// const B = [1, 2, 3, 4, 5]
// console.log(minimumNuberOfJumps(B))

// const C = [ 3, 6, 6, 10, 6, 1, 3, 1, 10, 1, 1, 10, 1, 7, 7, 2, 3, 1, 2, 4, 5, 8, 7, 2, 6, 8, 6, 7, 5, 4, 10, 4, 8, 10, 8 ]
// console.log(minimumNuberOfJumps(C))
