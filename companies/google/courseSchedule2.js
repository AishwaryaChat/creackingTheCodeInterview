// Course Schedule II
// Medium
// company
// Amazon
// TikTok
// Google
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

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
  let ans = [];
  let queue = new Queue();
  for (let key of Object.keys(indegree)) {
    if (indegree[key] == 0) queue.enqueue(key);
  }
  while (!queue.isEmpty()) {
    const ele = queue.dequeue();
    ans.push(ele);
    const neighbours = graph[ele];
    for (let i = 0; i < neighbours.length; i++) {
      indegree[neighbours[i]] -= 1;
      if (indegree[neighbours[i]] === 0) queue.enqueue(neighbours[i]);
    }
  }
  return ans.length === numCourses ? ans : [];
}

// const numCourses = 2
// const prerequisites = [[1,0]]
// Output: [0,1]

// const numCourses = 4
// const prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]

// const numCourses = 1
// const prerequisites = []
// Output: [0]

const numCourses = 3;
const prerequisites = [
  [1, 0],
  [1, 2],
  [0, 1],
];

console.log(solve(numCourses, prerequisites));
