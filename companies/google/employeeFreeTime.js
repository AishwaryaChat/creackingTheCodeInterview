// Employee Free Time
// Hard
// company
// Google
// Pinterest
// Wayfair
// We are given a list schedule of employees, which represents the working time for each employee.

// Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

// Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

// (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined).  Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

// Example 1:

// Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
// Output: [[3,4]]
// Explanation: There are a total of three employees, and all common
// free time intervals would be [-inf, 1], [3, 4], [10, inf].
// We discard any intervals that contain inf as they aren't finite.
// Example 2:

// Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
// Output: [[5,6],[7,9]]

// Constraints:

// 1 <= schedule.length , schedule[i].length <= 50
// 0 <= schedule[i].start < schedule[i].end <= 10^8

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

// TC - O(nlogn)
// Merge all the intervals and then find non-overlapping intervals
function solve(schedule) {
  schedule = schedule.reduce((acc, a) => [...acc, ...a], []);
  schedule.sort((a, b) => a.start - b.start);
  let start = schedule[0].start;
  let end = schedule[0].end;
  let freeTime = [];
  for (let i = 1; i < schedule.length; i++) {
    const current = schedule[i];
    if (end >= current.start) {
      start = Math.min(start, current.start);
      end = Math.max(end, current.end);
    } else {
      freeTime.push(new Interval(end, current.start));
      start = current.start;
      end = current.end;
    }
  }
  return freeTime;
}

// Solution using heap
// push everything to minHeap,
// TC - O(nlogn)
// SC - O(n)

function solveUsingHeap(schedule) {
  const heap = new Heap({ comparator: (a, b) => a.start < b.start });
  let ans = [];
  for (let times of schedule) {
    for (let time of times) {
      heap.push(time);
    }
  }
  while (heap.getSize() > 0) {
    const prev = heap.pop();
    const current = heap.peek();
    if (current && prev.end >= current.start) {
      if (prev.end > current.end) {
        heap.pop();
        heap.push(prev);
      }
    } else {
      if (current) {
        ans.push(new Interval(prev.end, current.start));
      }
    }
  }
  return ans;
}

// const schedule = [
//   [
//     { start: 1, end: 2 },
//     { start: 5, end: 6 },
//   ],
//   [{ start: 1, end: 3 }],
//   [{ start: 4, end: 10 }],
// ];
// Output: [[3,4]]

const schedule = [
  [
    { start: 1, end: 3 },
    { start: 6, end: 7 },
  ],
  [{ start: 2, end: 4 }],
  [
    { start: 2, end: 5 },
    { start: 9, end: 12 },
  ],
];
// Output: [[5,6],[7,9]]

console.log(solveUsingHeap(schedule));
