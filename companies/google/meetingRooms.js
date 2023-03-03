// Meeting Rooms
// Easy
// company
// Google
// Amazon
// Bloomberg
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: true

// Constraints:

// 0 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti < endi <= 10^6

// TC - O(NlogN)
// SC - O(1)
function solve(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }
  return true;
}

// const intervals = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
// Output: false

const intervals = [[7,10],[2,4]]
// Output: true

console.log(solve(intervals));
