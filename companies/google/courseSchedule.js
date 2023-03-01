// Course Schedule
// Medium
// company
// Amazon
// Google
// Uber
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function getAdjacencyListAndIndegree(n, edges) {
  let graph = {};
  let indegree = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
    indegree[i] = 0;
  }
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i];
    graph[n2].push(n1);
    indegree[n1] += 1;
  }
  return [graph, indegree];
}


// TC - O(N+E), where N is number of nodes and E is number of edges
// SC - O(N+E), where N is number of nodes and E is number of edges
function solve(numCourses, prerequisites) {
  const [graph, indegree] = getAdjacencyListAndIndegree(
    numCourses,
    prerequisites
  );
  let ans = new Array(numCourses).fill(false);
  let queue = new Queue();
  for (let key of Object.keys(indegree)) {
    if (indegree[key] == 0) queue.enqueue(key);
  }
  while (!queue.isEmpty()) {
    const ele = queue.dequeue();
    ans[ele] = true;
    const neighbours = graph[ele];
    for (let i = 0; i < neighbours.length; i++) {
      indegree[neighbours[i]] -= 1;
      if (indegree[neighbours[i]] === 0) queue.enqueue(neighbours[i]);
    }
  }
  for (let i = 0; i < ans.length; i++) {
    if (!ans[i]) return false;
  }
  return true;
}

// const numCourses = 2;
// const prerequisites = [[1, 0]];
// Output: true

const numCourses = 2
const prerequisites = [[1,0],[0,1]]
// Output: false

// const numCourses = 5
// const prerequisites = [[1,0],[2,1], [4,4]]

// const numCourses = 5;
// const prerequisites = [
//   [1, 4],
//   [2, 4],
//   [3, 1],
//   [3, 2],
// ];

console.log(solve(numCourses, prerequisites));
