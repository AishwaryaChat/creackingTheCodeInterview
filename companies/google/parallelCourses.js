// Parallel Courses
// Medium
// company
// Google
// Microsoft
// Amazon
// You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei has to be taken before course nextCoursei.

// In one semester, you can take any number of courses as long as you have taken all the prerequisites in the previous semester for the courses you are taking.

// Return the minimum number of semesters needed to take all courses. If there is no way to take all the courses, return -1.

// Example 1:

// Input: n = 3, relations = [[1,3],[2,3]]
// Output: 2
// Explanation: The figure above represents the given graph.
// In the first semester, you can take courses 1 and 2.
// In the second semester, you can take course 3.
// Example 2:

// Input: n = 3, relations = [[1,2],[2,3],[3,1]]
// Output: -1
// Explanation: No course can be studied because they are prerequisites of each other.

// Constraints:

// 1 <= n <= 5000
// 1 <= relations.length <= 5000
// relations[i].length == 2
// 1 <= prevCoursei, nextCoursei <= n
// prevCoursei != nextCoursei
// All the pairs [prevCoursei, nextCoursei] are unique.

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function findIndegree(n, relations) {
  let map = {};
  for (let i = 1; i <= n; i++) {
    map[i] = 0;
  }
  for (let i = 0; i < relations.length; i++) {
    const [n1, n2] = relations[i];
    map[n2] += 1;
  }
  return map;
}

function getAdacencyList(n, relations) {
  let map = {};
  for (let i = 1; i <= n; i++) {
    map[i] = [];
  }
  for (let i = 0; i < relations.length; i++) {
    const [n1, n2] = relations[i];
    map[n1].push(n2);
  }
  return map;
}

/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
// TC - O(N + E)
// SC - O(N + E) - in worst case we might need to add all nodes in the queue at same time(when indegree of all nodes is 0)
// This question can also be done using DFS, check if the graph has cycle, if it doesnt have cycle then find the longest path in the graph, that will be the answer
var solve = function (n, relations) {
  const adjacencyList = getAdacencyList(n, relations);
  const indegreeMap = findIndegree(n, relations);
  let queue = new Queue();
  for (let i = 1; i <= n; i++) {
    if (indegreeMap[i] === 0) {
      queue.enqueue(i);
    }
  }
  let visited = new Array(n + 1).fill(false);
  let semester = 0;
  while (!queue.isEmpty()) {
    semester += 1;
    let nextQueue = new Queue();
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      visited[node] = true;
      const neighbours = adjacencyList[node];
      for (neighbour of neighbours) {
        indegreeMap[neighbour] -= 1;
        if (!visited[neighbour] && indegreeMap[neighbour] === 0) {
          nextQueue.enqueue(neighbour);
          visited[neighbour] = true;
        }
      }
    }
    queue = nextQueue;
  }
  return visited.filter((a, i) => i !== 0 && a === false).length > 0
    ? -1
    : semester;
};

const n = 3,
  relations = [
    [1, 3],
    [2, 3],
  ];
// Output: 2

// const n = 3, relations = [[1,2],[2,3],[3,1]]
// Output: -1

console.log(solve(n, relations));
