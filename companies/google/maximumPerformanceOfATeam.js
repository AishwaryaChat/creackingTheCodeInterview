// Maximum Performance of a Team
// Hard
// company
// Amazon
// Google
// DE Shaw
// You are given two integers n and k and two integer arrays speed and efficiency both of length n. There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and efficiency of the ith engineer respectively.

// Choose at most k different engineers out of the n engineers to form a team with the maximum performance.

// The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.

// Return the maximum performance of this team. Since the answer can be a huge number, return it modulo 109 + 7.

// Example 1:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
// Output: 60
// Explanation:
// We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
// Example 2:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
// Output: 68
// Explanation:
// This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
// Example 3:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
// Output: 72

// Constraints:

// 1 <= k <= n <= 10^5
// speed.length == n
// efficiency.length == n
// 1 <= speed[i] <= 10^5
// 1 <= efficiency[i] <= 10^8

const Heap = require("../../PracticeQuestions/Heaps/heapGeneralisedImplementation");

function sortWRTEfficiency(speed, efficiency) {
  return speed.map((a, i) => [a, efficiency[i]]).sort((a, b) => b[1] - a[1]);
}

// TC - O(N + NlogN + NlogK) ~~ O(NlogN)
// SC - O(N+K)
function solve(n, speed, efficiency, k) {
  const MOD = BigInt(1e9 + 7);
  const minHeap = new Heap({ comparator: (a, b) => a[0] < b[0] });
  const sorted = sortWRTEfficiency(speed, efficiency);
  let totalSpeed = BigInt(0);
  let maximumPerformance = 0;
  for (let i = 0; i < speed.length; i++) {
    if (minHeap.getSize() === k) {
      const ele = minHeap.pop();
      totalSpeed -= BigInt(ele[0]);
    }
    minHeap.push(sorted[i]);
    totalSpeed += BigInt(sorted[i][0]);
    const performance = totalSpeed * BigInt(sorted[i][1]);
    if (performance > maximumPerformance) {
      maximumPerformance = performance;
    }
  }
  return Number(maximumPerformance % MOD);
}

// const n = 6;
// const speed = [2, 10, 3, 1, 5, 8];
// const efficiency = [5, 4, 3, 9, 7, 2];
// const k = 2;
// Output: 60

const n = 6;
const speed = [2, 10, 3, 1, 5, 8];
const efficiency = [5, 4, 3, 9, 7, 2];
const k = 3;
// Output: 68

// const n = 6
// const speed = [2,10,3,1,5,8]
// const efficiency = [5,4,3,9,7,2]
// const k = 4
// Output: 72

console.log(solve(n, speed, efficiency, k));
