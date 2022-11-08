// Bus Routes
// Hard

// You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

// For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
// You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

// Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

// Example 1:

// Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
// Output: 2
// Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
// Example 2:

// Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
// Output: -1

// Constraints:

// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 105
// All the values of routes[i] are unique.
// sum(routes[i].length) <= 105
// 0 <= routes[i][j] < 106
// 0 <= source, target < 106

// Solving this question using breadth first search

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function createGraph(matrix) {
  let list = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const stop = matrix[i][j];
      if (!list[stop]) {
        list[stop] = [];
      }
      list[stop].push(i);
    }
  }
  return list;
}
// N - No of different stops, R - routes for each element, S - Stop in each route
function solve(routes, source, target) {
  const adjacencyList = createGraph(routes);
  const queue = new Queue({});
  const visitedRoutes = {};
  const visited = {
    [source]: true,
  };
  queue.enqueue([source, 0]);
  while (!queue.isEmpty()) {
    const [ele, buses] = queue.dequeue();
    if (ele === target) return buses;
    const eleRoutes = adjacencyList[ele];
    for (let i = 0; i < eleRoutes.length; i++) {
      const route = eleRoutes[i];
      if (!visitedRoutes[route]) {
        visitedRoutes[route] = true;
        const elementInRoute = routes[route];
        for (let j = 0; j < elementInRoute.length; j++) {
          const routeElement = elementInRoute[j];
          if (routeElement !== ele && !visited[routeElement]) {
            queue.enqueue([routeElement, buses + 1]);
            visited[routeElement] = true;
          }
        }
      }
    }
  }
  return -1;
}

// const routes = [
//   [1, 2, 7],
//   [3, 6, 7],
// ];
// console.log(solve(routes, 1, 6));

// const routes = [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]];

// console.log(solve(routes, 15, 12));

const routes = [
  [1, 9, 12, 20, 23, 24, 35, 38],
  [10, 21, 24, 31, 32, 34, 37, 38, 43],
  [10, 19, 28, 37],
  [8],
  [14, 19],
  [11, 17, 23, 31, 41, 43, 44],
  [21, 26, 29, 33],
  [5, 11, 33, 41],
  [4, 5, 8, 9, 24, 44],
];
console.log(solve(routes, 37, 28));
