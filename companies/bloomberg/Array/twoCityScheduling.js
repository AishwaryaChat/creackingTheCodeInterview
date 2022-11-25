// Two City Scheduling
// Medium

// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
// Example 2:

// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859
// Example 3:

// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086

// Constraints:

// 2 * n == costs.length
// 2 <= costs.length <= 100
// costs.length is even.
// 1 <= aCosti, bCosti <= 1000

// TC - O(NlogN)
// The problem is based on greedy concept
// Whenever the problem says something like "Find minimum number of something to do something", then mark it as a greedy problem
// The idea of greedy algorithm is to pick the locally optimal move at each step, that will lead to the globally optimal solution.
// The idea here is to minimise the cost of the company.
// This can be done by check if sending a person to city A or city B which costs more
// So we sort the array with priceA-priceB and send first n/2 people to city A and next n/2 people to city B

function sortAMinusB(A) {
  return A.sort((a, b) => {
    if (a[0] - a[1] < b[0] - b[1]) {
      return -1;
    } else if (a[0] - a[1] > b[0] - b[1]) {
      return 1;
    }
    return 0;
  });
}

function solve(costs) {
  sortAMinusB(costs);
  let ans = 0;
  for (
    let i = 0, j = costs.length / 2;
    i < costs.length / 2 && j < costs.length;
    i++, j++
  ) {
    const [costA] = costs[i];
    const costB = costs[j][1];
    ans += costA + costB;
  }
  return ans;
}

// const costs = [
//   [515, 563],
//   [451, 713],
//   [537, 709],
//   [343, 819],
//   [855, 779],
//   [457, 60],
//   [650, 359],
//   [631, 42],
// ];

// const costs = [
//   [259, 770],
//   [448, 54],
//   [926, 667],
//   [184, 139],
//   [840, 118],
//   [577, 469],
// ];

const costs = [
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
];

console.log(solve(costs));
