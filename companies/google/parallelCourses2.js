// Parallel Courses II
// Hard
// company
// Google
// You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei has to be taken before course nextCoursei. Also, you are given the integer k.

// In one semester, you can take at most k courses as long as you have taken all the prerequisites in the previous semesters for the courses you are taking.

// Return the minimum number of semesters needed to take all courses. The testcases will be generated such that it is possible to take every course.

// Example 1:

// Input: n = 4, relations = [[2,1],[3,1],[1,4]], k = 2
// Output: 3
// Explanation: The figure above represents the given graph.
// In the first semester, you can take courses 2 and 3.
// In the second semester, you can take course 1.
// In the third semester, you can take course 4.
// Example 2:

// Input: n = 5, relations = [[2,1],[3,1],[4,1],[1,5]], k = 2
// Output: 4
// Explanation: The figure above represents the given graph.
// In the first semester, you can only take courses 2 and 3 since you cannot take more than two per semester.
// In the second semester, you can take course 4.
// In the third semester, you can take course 1.
// In the fourth semester, you can take course 5.

// Constraints:

// 1 <= n <= 15
// 1 <= k <= n
// 0 <= relations.length <= n * (n-1) / 2
// relations[i].length == 2
// 1 <= prevCoursei, nextCoursei <= n
// prevCoursei != nextCoursei
// All the pairs [prevCoursei, nextCoursei] are unique.
// The given graph is a directed acyclic graph.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function findInDegree(n, relations) {
  let map = {};
  for (let i = 0; i < n; i++) {
    if (!map[i]) map[i] = 0;
  }
  for (let i = 0; i < relations.length; i++) {
    const [, n2] = relations[i];
    map[n2 - 1] += 1;
  }
  return map;
}

function getAdacencyList(n, relations) {
  let map = {};
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  for (let i = 0; i < relations.length; i++) {
    const [n1, n2] = relations[i];
    map[n1 - 1].push(n2 - 1);
  }
  return map;
}

// The given question looks like can be solved using topological sort, but it cant be done that way, reason being we are given a limitation of k courses that can be taken in a semester, and because of this our choice of taken course in a semester can return back different answers. Our goal is to find out the minimum from this, so we have to take all the choises into consideration and return the one which gives minimum result
// So we have to solve this question using backtracking

function getCombinations(pos, nodes, k, ans, tempAns) {
  if (nodes.length < k) return [nodes];
  if (tempAns.length === k) {
    ans.push(tempAns.map((a) => a));
    return;
  }
  for (let i = pos; i < nodes.length; i++) {
    getCombinations(i + 1, nodes, k, ans, tempAns.concat([nodes[i]]));
  }
  return ans;
}

function recurse(mask, indegree, adjacencyList, k, dp) {
  if (!mask) return 0;
  if(dp[mask]!==undefined) return dp[mask]
  let eligibleNodes = [];
  for (i = 0; i < mask; i++) {
    if (mask & (1 << i) && indegree[i] === 0) {
      eligibleNodes.push(i);
    }
  }
  const combinations = getCombinations(0, eligibleNodes, k, [], []);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < combinations.length; i++) {
    let newMask = mask;
    let newIndegree = JSON.parse(JSON.stringify(indegree));
    const nodes = combinations[i];
    for (let j = 0; j < nodes.length; j++) {
      newMask ^= 1 << nodes[j];
      const neighbours = adjacencyList[nodes[j]];
      for (let l = 0; l < neighbours.length; l++) {
        newIndegree[neighbours[l]] -= 1;
      }
    }
    ans = Math.min(ans, 1 + recurse(newMask, newIndegree, adjacencyList, k, dp));
  }
  dp[mask] = ans
  return ans;
}

function solve(n, relations, k) {
  const indegree = findInDegree(n, relations);
  const adjacencyList = getAdacencyList(n, relations);
  let dp = []
  return recurse((1 << n) - 1, indegree, adjacencyList, k, dp);
}

// const n = 4
// const relations = [[2,1],[3,1],[1,4]]
// const k = 2
// Output: 3

const n = 5;
const relations = [
  [2, 1],
  [3, 1],
  [4, 1],
  [1, 5],
];
const k = 2;
// Output: 4

// const n = 11;
// const relations = [];
// const k = 2;

// const n = 4;
// const relations = [
//   [2, 1],
//   [2, 4],
// ];
// const k = 2;

console.log(solve(n, relations, k));
