// Merge Overlapping Intervals

// Problem Description
// Given a collection of intervals, merge all overlapping intervals.

// Problem Constraints
// 1 <= Total number of intervals <= 100000.

// Input Format
// First argument is a list of intervals.

// Output Format
// Return the sorted list of intervals after merging all the overlapping intervals.

// Example Input
// Input 1:

// [1,3],[2,6],[8,10],[15,18]

// Example Output
// Output 1:

// [1,6],[8,10],[15,18]

// Example Explanation
// Explanation 1:

// Merge intervals [1,3] and [2,6] -> [1,6].
// so, the required answer after merging is [1,6],[8,10],[15,18].
// No more overlapping intervals present.

// TC - O(NlogN) - for sorting, for merging intervals its O(N), so if intervals are already sorted w.r.t start index of an interval, then TC - O(N)
// The idea here is to check if the start coordinate of current interval is greater or smaller than the end of previous index
// if it is greater that means intervals are not overlapping
// if it is smaller of equal then these intervals are overlapping and we can change our right with current right, but dont push the interval yet to the answer array


function solve(A) {
  A.sort((a, b) => a[0] - b[0]);
  let L = A[0][0];
  let R = A[0][1];
  let ans = [];
  for (let i = 1; i < A.length; i++) {
    if (R >= A[i][0]) {
      R = Math.max(R, A[i][1]);
    } else {
      ans.push([L, R]);
      L = A[i][0];
      R = A[i][1];
    }
  }
  ans.push([L, R]);
  return ans;
}

const A = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

// [1,6],[8,10],[15,18]

console.log(solve(A));
