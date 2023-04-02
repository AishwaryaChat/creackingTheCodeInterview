// Pairs of Songs With Total Durations Divisible by 60
// Medium
// company
// Paypal
// company
// Goldman Sachs
// JPMorgan
// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

// Constraints:

// 1 <= time.length <= 6 * 10^4
// 1 <= time[i] <= 500

function solve(time) {
  let ans = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) ans += 1;
    }
  }
  return ans;
}

// Idea here is to keep storing frequency of remainder
// Add in count the freq of remainder when remainder is 0 else add freq[60-rem] in ans
// TC - O(N)
// SC - O(60) ~ O(1)

function solveTimeOptimised(time) {
  let count = 0;
  let freq = new Array(60).fill(0);
  for (let t of time) {
    const rem = t % 60;
    if (rem == 0) {
      count += freq[rem];
    } else count += freq[60 - rem];
    freq[rem] += 1;
  }
  return count;
}

const time = [30, 20, 150, 100, 40];
// Output: 3

// const time = [60, 60, 60];
// Output: 3

console.log(solveTimeOptimised(time));
