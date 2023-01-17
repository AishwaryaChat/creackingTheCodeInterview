// My Calendar I
// Medium

// Google
// Amazon
// Uber
// You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.

// A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

// The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), the range of real numbers x such that start <= x < end.

// Implement the MyCalendar class:

// MyCalendar() Initializes the calendar object.
// boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

// Example 1:

// Input
// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// Output
// [null, true, false, true]

// Explanation
// MyCalendar myCalendar = new MyCalendar();
// myCalendar.book(10, 20); // return True
// myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
// myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.

// Constraints:

// 0 <= start < end <= 109
// At most 1000 calls will be made to book.

// TC - O(N^logN) - since we are inserting and then sorting as well, searching will take O(logN)
// SC - O(N) - for calender
function MyCalender() {
  this.calender = [];

  this.searchForOverLappingInterval = function (x, y) {
    let start = 0;
    let end = this.calender.length - 1;

    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      const [midx, midy] = this.calender[mid];
      if (x < midy && y > midx) return true;
      else if (x < midx) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return false;
  };
  this.book = function (slot) {
    const [x, y] = slot;
    if (this.calender.length === 0) {
      this.calender.push([x, y]);
      return true;
    } else {
      const isOverlapping = this.searchForOverLappingInterval(x, y);
      if (isOverlapping) return false;
      else {
        this.calender.push(slot);
        this.calender.sort((a, b) => a[0] - b[0]);
        return true;
      }
    }
  };
}

function solve(inputs) {
  let calender = new MyCalender();
  let output = [];
  for (let i = 0; i < inputs.length; i++) {
    output.push(calender.book(inputs[i]));
  }
  return output;
}

const operations = ["book", "book", "book"];
// const input = [
//   [10, 20],
//   [15, 25],
//   [20, 30],
// ];
const input = [
  [10, 20],
  [2, 3],
  [4, 5],
  [3, 4],
];

// const input = [[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]

console.log(solve(input));
