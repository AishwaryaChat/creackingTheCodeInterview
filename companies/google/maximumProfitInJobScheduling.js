// Maximum Profit in Job Scheduling
// Hard
// 4.9K
// 56
// company
// Airbnb
// company
// DoorDash
// company
// Google
// We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

// You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

// If you choose a job that ends at time X you will be able to start another job that starts at time X.

// Example 1:

// Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
// Output: 120
// Explanation: The subset chosen is the first and fourth job.
// Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
// Example 2:

// Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
// Output: 150
// Explanation: The subset chosen is the first, fourth and fifth job.
// Profit obtained 150 = 20 + 70 + 60.
// Example 3:

// Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
// Output: 6

// Constraints:

// 1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4
// 1 <= startTime[i] < endTime[i] <= 10^9
// 1 <= profit[i] <= 10^4

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

function sortWithStartTime(startTime, endTime, profit) {
  return startTime
    .map((a, i) => [a, endTime[i], profit[i], i])
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
}

function findMaximumProfit(jobs) {
  const heap = new Heap({ comparator: (a, b) => a[0] < b[0] });
  let maxProfit = 0;
  for (let i = 0; i < jobs.length; i++) {
    const [start, end, profit] = jobs[i];
    while (heap.getSize() > 0 && heap.peek()[0] > start) {
      const [, prof] = heap.pop();
      maxProfit = Math.max(maxProfit, prof);
    }
    heap.push([end, maxProfit + profit]);
  }
  while (heap.getSize() > 0) {
    maxProfit = Math.max(maxProfit, heap.pop()[1]);
  }
  return maxProfit;
}

function solve(startTime, endTime, profit) {
  const jobs = sortWithStartTime(startTime, endTime, profit);
  return findMaximumProfit(jobs);
}

function findNextIndex(startTime, endInterval) {
  let low = 0;
  let high = startTime.length - 1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (startTime[mid] < endInterval) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

function recurse(pos, matrix, n, startTime, dp) {
  if (dp[pos] !== undefined) return dp[pos];
  if (pos === n) return 0;
  const [, endTime] = matrix[pos];
  const nextIndex = findNextIndex(startTime, endTime);
  const maxProfit = Math.max(
    recurse(pos + 1, matrix, n, startTime, dp),
    matrix[pos][2] + recurse(nextIndex, matrix, n, startTime, dp)
  );
  dp[pos] = maxProfit;
  return dp[pos];
}

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;
  if (n === 1) return profit[0];
  const matrix = sortWithStartTime(startTime, endTime, profit);
  let dp = {};
  for (let i = 0; i < n; i++) {
    startTime[i] = matrix[i][0];
  }
  return recurse(0, matrix, n, startTime, dp);
};

const startTime = [1, 2, 3, 3];
const endTime = [3, 4, 5, 6];
const profit = [50, 10, 40, 70];
// Output: 120

// const startTime = [1,2,3,4,6]
// const endTime = [3,5,10,6,9]
// const profit = [20,20,100,70,60]
// Output: 150

// const startTime = [1,1,1]
// const endTime = [2,3,4]
// const profit = [5,6,4]
// Output: 6

console.log(solve(startTime, endTime, profit));
