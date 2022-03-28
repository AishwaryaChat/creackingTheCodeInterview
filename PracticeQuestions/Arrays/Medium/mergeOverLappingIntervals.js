/*
Merge Overlapping Intervals
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA & get it resolved
Get help from TA
Problem Description

Given a collection of intervals, merge all overlapping intervals.



Problem Constraints

1 <= Total number of intervals <= 100000.



Input Format

First argument is a list of intervals.



Output Format

Return the sorted list of intervals after merging all the overlapping intervals.



Example Input

Input 1:

[1,3],[2,6],[8,10],[15,18]


Example Output

Output 1:

[1,6],[8,10],[15,18]


Example Explanation

Explanation 1:

Merge intervals [1,3] and [2,6] -> [1,6].
so, the required answer after merging is [1,6],[8,10],[15,18].
No more overlapping intervals present.
*/

const merge = (A) => {
  A.sort((a, b) => a[0] - b[0]);
  let merged = [];
  let prevStart = A[0][0],
    prevEnd = A[0][1];
  for (let i = 1; i < A.length; i++) {
    const start = A[i][0];
    const end = A[i][1];
    if (start <= prevEnd) {
      prevEnd = Math.max(end, prevEnd);
    } else {
      merged.push([prevStart, prevEnd]);
      prevStart = start;
      prevEnd = end;
    }
  }
  merged.push([prevStart, prevEnd]);
  return merged;
};

const A = [
  [1, 10],
  [2, 9],
  [3, 8],
  [4, 7],
  [5, 6],
  [6, 6],
];

console.log(merge(A));

const B = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(B))