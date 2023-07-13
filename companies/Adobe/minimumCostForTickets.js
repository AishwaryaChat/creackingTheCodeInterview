// Minimum Cost For Tickets
// Medium
// company
// Adobe
// Amazon
// Google
// You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.

// Train tickets are sold in three different ways:

// a 1-day pass is sold for costs[0] dollars,
// a 7-day pass is sold for costs[1] dollars, and
// a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.

// For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
// Return the minimum number of dollars you need to travel every day in the given list of days.

// Example 1:

// Input: days = [1,4,6,7,8,20], costs = [2,7,15]
// Output: 11
// Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
// On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
// On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
// In total, you spent $11 and covered all the days of your travel.
// Example 2:

// Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
// Output: 17
// Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
// On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
// In total, you spent $17 and covered all the days of your travel.

// Constraints:

// 1 <= days.length <= 365
// 1 <= days[i] <= 365
// days is in strictly increasing order.
// costs.length == 3
// 1 <= costs[i] <= 1000

// TC - O(K), where K is last day of days array
// TC - O(K), space for dp and stack space
function findCost(days, costs, dp, currDay, daysToTravel) {
  if (currDay > days[days.length - 1]) return 0;
  if (daysToTravel[currDay] === undefined)
    return findCost(days, costs, dp, currDay + 1, daysToTravel);
  if (dp[currDay] !== undefined) return dp[currDay];
  const oneDay =
    costs[0] + findCost(days, costs, dp, currDay + 1, daysToTravel);
  const sevenDays =
    costs[1] + findCost(days, costs, dp, currDay + 7, daysToTravel);
  const oneMonth =
    costs[2] + findCost(days, costs, dp, currDay + 30, daysToTravel);
  return (dp[currDay] = Math.min(oneDay, sevenDays, oneMonth));
}

function solve(days, costs) {
  let daysToTravel = {};
  for (let day of days) {
    daysToTravel[day] = true;
  }
  const dp = {};
  return findCost(days, costs, dp, 1, daysToTravel);
}

// TC - O(K), Where K is last day in days
// SC - O(K), for dp
function bottomUpApproach(days, costs) {
  let lastDay = days[days.length - 1];
  const dp = new Array(lastDay + 1).fill(0);
    let i = 0;
    for (let day = 1; day <= lastDay; day++) {
      if (day < days[i]) dp[day] = dp[day - 1];
      else {
        i++;
        dp[day] = Math.min(
          dp[day - 1] + costs[0],
          dp[Math.max(0, day - 7)] + costs[1],
          dp[Math.max(0, day - 30)] + costs[2]
        );
      }
    }
  return dp[lastDay];
}

const days = [1, 4, 6, 7, 8, 20];
const costs = [2, 7, 15];
// Output: 11

// const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
// const costs = [2, 7, 15];
// Output: 17

console.log(bottomUpApproach(days, costs));
