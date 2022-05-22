/*
Merge Intervals

Problem Description
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.



Problem Constraints
0 <= |intervals| <= 10^5



Input Format
First argument is the vector of intervals

second argument is the new interval to be merged



Output Format
Return the vector of intervals after merging



Example Input
Input 1:

Given intervals [1, 3], [6, 9] insert and merge [2, 5] .
Input 2:

Given intervals [1, 3], [6, 9] insert and merge [2, 6] .


Example Output
Output 1:

 [ [1, 5], [6, 9] ]
Output 2:

 [ [1, 9] ]


Example Explanation
Explanation 1:

(2,5) does not completely merge the given intervals
Explanation 2:

(2,6) completely merges the given intervals

*/

function merge(A, B) {
  let L = B[0];
  let R = B[1];
  const merged = [];
  let flag = true
  for (let i = 0; i < A.length; i++) {
    const start = A[i][0];
    const end = A[i][1];
    if (L <= end && R >= start) {
      L = Math.min(L, start);
      R = Math.max(R, end);
    } else {
      if (R < A[i][0] && flag) {
        flag = false;
        merged.push([L, R]);
      }
      merged.push(A[i]);
    }
  }
  if(flag) {
      merged.push([L, R])
  }
  return merged;
}

const A = [
  [1, 3],
  [8, 9],
];
const B = [4, 5];

console.log(merge(A, B));

const C = [
  [1, 3],
  [6, 9],
];
const D = [2, 6];
console.log(merge(C,D))

const E = [
  [1, 2],
  [3, 6],
];
const F = [8, 10];
// console.log(merge(E,F))

const G = [
  [3, 5],
  [8, 10],
];
const H = [1, 12];
// console.log(merge(G, H));

const I = [
    [1,2],
    [3,4],
    [5,6],
    [7,12],
  ];
const J = [2, 7];
console.log(merge(I, J));
