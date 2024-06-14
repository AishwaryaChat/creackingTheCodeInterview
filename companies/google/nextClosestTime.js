// 681. Next Closest Time
// Solved
// Medium
// Topics
// Companies
// Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

// You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

// Example 1:

// Input: time = "19:34"
// Output: "19:39"
// Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
// It is not 19:33, because this occurs 23 hours and 59 minutes later.
// Example 2:

// Input: time = "23:59"
// Output: "22:22"
// Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
// It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.

// Constraints:

// time.length == 5
// time is a valid time in the form "HH:MM".
// 0 <= HH < 24
// 0 <= MM < 60

var nextClosestTime = function (time) {
  let allowed = {};
  for (let s of time) {
    if (s !== ":") allowed[s] = true;
  }
  time = time.split(":");
  let cur = Number(time[0]) * 60 + Number(time[1]);
  while (true) {
    cur = (cur + 1) % 1440;
    const hr = Math.floor(cur / 60);
    const min = cur - hr * 60;
    const t =
      (hr < 10 ? 0 + "" + hr : hr) + ":" + (min < 10 ? 0 + "" + min : min);
    let flag = true;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (s !== ":" && allowed[s] == undefined) {
        flag = false;
        break;
      }
    }
    if (flag) return t;
  }
};

function solve(time) {
    
}