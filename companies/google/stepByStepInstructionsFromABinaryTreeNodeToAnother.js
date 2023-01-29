// Step-By-Step Directions From a Binary Tree Node to Another
// Medium
// 1.9K
// 97
// company
// Google
// company
// Amazon
// company
// Microsoft
// You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

// Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

// 'L' means to go from a node to its left child node.
// 'R' means to go from a node to its right child node.
// 'U' means to go from a node to its parent node.
// Return the step-by-step directions of the shortest path from node s to node t.

// Example 1:

// Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
// Output: "UURL"
// Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
// Example 2:

// Input: root = [2,1], startValue = 2, destValue = 1
// Output: "L"
// Explanation: The shortest path is: 2 → 1.

// Constraints:

// The number of nodes in the tree is n.
// 2 <= n <= 10^5
// 1 <= Node.val <= n
// All the values in the tree are unique.
// 1 <= startValue, destValue <= n
// startValue != destValue

const Queue = require("../../PracticeQuestions/Queues/arrayImpelemtation");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function getAdjacencyList(root, parent, map) {
  if (root === null) return map;
  const data = root.val;
  map[data] = [];
  if (parent) map[data].push([parent.val, "U"]);
  if (root.left) {
    map[data].push([root.left.val, "L"]);
    getAdjacencyList(root.left, root, map);
  }
  if (root.right) {
    map[data].push([root.right.val, "R"]);
    getAdjacencyList(root.right, root, map);
  }
  return map;
}

// TC - O(N)
// SC - O(N)
function solve(root, start, destination) {
  const adjacencyList = getAdjacencyList(root, null, {});
  const queue = new Queue();
  queue.enqueue([start, ""]);
  let visited = {};
  while (!queue.isEmpty()) {
    const [dest, path] = queue.dequeue();
    if (dest === destination) return path;
    visited[dest] = true;
    const adjacentPaths = adjacencyList[dest];
    for (let i = 0; i < adjacentPaths.length; i++) {
      const [node, direction] = adjacentPaths[i];
      if (!visited[node]) {
        queue.enqueue([node, path + direction]);
      }
    }
  }
}

function findPath(root, node, path) {
  if (root === null) return false;
  if (root.val === node) return true;
  if (root.left) {
    path.push("L");
    if (findPath(root.left, node, path)) return true;
    path.pop();
  }
  if (root.right) {
    path.push("R");
    if (findPath(root.right, node, path)) return true;
    path.pop();
  }
  return false;
}

// TC - O(N)
// SC - O(N)
function solveOptimised(root, start, destination) {
  const startPath = [];
  findPath(root, start, startPath);
  let destPath = [];
  findPath(root, destination, destPath);
  let i = 0;
  let j = 0;
  while (i < startPath.length && j < destPath.length) {
    if (startPath[i] !== destPath[j]) break;
    i++;
    j++;
  }
  let ans = "";
  while (i < startPath.length) {
    ans += "U";
    i++;
  }
  return ans + destPath.slice(j).join("");
}

const r4 = new TreeNode(4);
const r6 = new TreeNode(6);
const r3 = new TreeNode(3);
const r2 = new TreeNode(2, r6, r4);
const r1 = new TreeNode(1, r3);
const root = new TreeNode(5, r1, r2);
const start = 4;
const destination = 6;
console.log(solveOptimised(root, start, destination));
