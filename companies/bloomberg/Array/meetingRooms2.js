// Meeting Rooms II
// Medium

// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1

// Constraints:

// 1 <= intervals.length <= 104
// 0 <= starti < endi <= 106

// TC - O(NlogN)
// SC - O(N) - Heap space

const {
  Heap,
} = require("../../../PracticeQuestions/Heaps/minheapImplementation");


function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let heap = new Heap();
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (i == 0) {
      heap.push(end);
    } else {
      const top = heap.peek();
      if (start >= top) {
        heap.pop();
      }
      heap.push(end);
    }
  }
  return heap.size();
}

// const intervals = [[7,10],[2,4]]
// const intervals = [[5,10], [0, 30], [15, 20]]
const intervals = [
  [1, 10],
  [2, 7],
  [3, 19],
  [8, 12],
  [10, 20],
  [11, 30],
];
console.log(minMeetingRooms(intervals));
