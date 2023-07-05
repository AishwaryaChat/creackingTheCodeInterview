// Student Attendance Record II
// Hard
// company
// Sprinklr
// Google
// An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// Any student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

// Example 1:

// Input: n = 2
// Output: 8
// Explanation: There are 8 records with length 2 that are eligible for an award:
// "PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
// Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
// Example 2:

// Input: n = 1
// Output: 3
// Example 3:

// Input: n = 10101
// Output: 183236316

// Constraints:

// 1 <= n <= 10^5

/**
 * @param {number} n
 * @return {number}
 */

const MOD = Math.pow(10, 9) + 7;

function countRecursive(n, absentDays, totalValidAtendance, dp, s) {
  if (n === 0) {
    return 1;
  }
  let absentCount = 0;
  let lateDays = 0;
  if (absentDays + 1 < 2) {
    absentCount +=
      countRecursive(n - 1, absentDays + 1, totalValidAtendance, dp, s + "A") %
      MOD;
  }
  let newS = s + "L";
  if (newS.indexOf("LLL" < 0)) {
    lateDays +=
      countRecursive(n - 1, absentDays, totalValidAtendance, dp, newS) % MOD;
  }
  let presentAttendence = 0;
  presentAttendence +=
    countRecursive(n - 1, absentDays, totalValidAtendance, dp, s + "P") % MOD;
  return (
    ((absentCount % MOD) + (lateDays % MOD) + (presentAttendence % MOD)) % MOD
  );
}

function countIterative(n) {
  let prevDP = new Array(2).fill().map(() => new Array(3).fill(1));
  for (let i = 1; i < n; i++) {
    let newDP = new Array(2).fill().map(() => new Array(3).fill(1));
    for (let A = 0; A < 2; A++) {
      for (let L = 0; L < 3; L++) {
        if (A > 0) {
          newDP[A][L] += prevDP[A - 1][2];
        }
        if (L > 0) {
          newDP[A][L] += prevDP[A][L - 1];
        }
        newDP[A][L] += prevDP[A][2];
      }
    }

    prevDP = newDP.map((a) => a.map((b) => b));
  }
  console.log("prevDP", prevDP)
  return prevDP[1][2];
}
var solve = function (n) {
  // return countRecursive(n, 0, 0, {}, "");
  return countIterative(n);
};

const n = 3;
// const n = 2;
// const n = 1;
// const n = 10101

console.log(solve(n));
// console.log("LLL".indexOf("LLL"))
