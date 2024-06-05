// Meeting Rooms II
// Medium
// 6.4K
// 135
// company
// Bloomberg
// company
// Amazon
// company
// Facebook
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1

// Constraints:

// 1 <= intervals.length <= 10^4
// 0 <= starti < endi <= 10^6

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

// TC - O(NlogN)
function solve(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 1;
  const minHeap = new Heap({ comparator: (a, b) => a[1] < b[1] });
  minHeap.push([intervals[0][0], intervals[0][1]]);
  for (let i = 1; i < intervals.length; i++) {
    const [st, end] = minHeap.peek();
    const [st1, end1] = intervals[i];
    if (st1 >= end) {
      minHeap.pop();
    } else {
      count += 1;
    }
    minHeap.push([st1, end1]);
  }
  return count;
}

// TC - O(NlogN)
// SC - O(N)
function solution2(intervals) {
  let startTime = intervals.map(a => a[0]).sort((a, b) => a-b)
    let endTime = intervals.map(a => a[1]).sort((a, b) => a-b)
    let startPointer = 0
    let endPointer = 0
    let roomsUsed = 0
    while(startPointer<intervals.length) {
      // we are just checking if a previous meeting is ending, so vacate its room
        if(startTime[startPointer] >= endTime[endPointer]) {
            endPointer+=1
            roomsUsed-=1
        } 
        // everytime a meeting is coming we are using a room, it will be compensated in above step if a meeting has ended by that time
        roomsUsed+=1
        startPointer+=1
    }
    return roomsUsed
}

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
  [3, 5],
  [9, 16],
  [17, 31],
  [30, 40],
];
// Output: 2
// Example 2:

// const intervals = [[7,10],[2,4]]
// Output: 1
console.log(solve(intervals));
