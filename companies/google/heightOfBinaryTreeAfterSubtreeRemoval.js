// Height of Binary Tree After Subtree Removal Queries
// Hard
// company
// Google
// You are given the root of a binary tree with n nodes. Each node is assigned a unique value from 1 to n. You are also given an array queries of size m.

// You have to perform m independent queries on the tree where in the ith query you do the following:

// Remove the subtree rooted at the node with the value queries[i] from the tree. It is guaranteed that queries[i] will not be equal to the value of the root.
// Return an array answer of size m where answer[i] is the height of the tree after performing the ith query.

// Note:

// The queries are independent, so the tree returns to its initial state after each query.
// The height of a tree is the number of edges in the longest simple path from the root to some node in the tree.

// Example 1:

// Input: root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]
// Output: [2]
// Explanation: The diagram above shows the tree after removing the subtree rooted at node with value 4.
// The height of the tree is 2 (The path 1 -> 3 -> 2).
// Example 2:

// Input: root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]
// Output: [3,2,3,2]
// Explanation: We have the following queries:
// - Removing the subtree rooted at node with value 3. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 4).
// - Removing the subtree rooted at node with value 2. The height of the tree becomes 2 (The path 5 -> 8 -> 1).
// - Removing the subtree rooted at node with value 4. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 6).
// - Removing the subtree rooted at node with value 8. The height of the tree becomes 2 (The path 5 -> 9 -> 3).

// Constraints:

// The number of nodes in the tree is n.
// 2 <= n <= 10^5
// 1 <= Node.val <= n
// All the values in the tree are unique.
// m == queries.length
// 1 <= m <= min(n, 10^4)
// 1 <= queries[i] <= n
// queries[i] != root.val

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// TC - O(Q*n) - n is number of nodes
function findHeightAfterRemoval(root, node) {
  if (root === null) return -1;
  if (root.val === node) return -1;
  const l = findHeightAfterRemoval(root.left, node);
  const r = findHeightAfterRemoval(root.right, node);
  return 1 + Math.max(l, r);
}

function solve(root, queries) {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    ans.push(findHeightAfterRemoval(root, queries[i]));
  }
  return ans;
}

// In this solution we are finding the depth and height for each node before hand
// Also we are finding the nodes at each level so that we will have information about each sibbling.
// TC - O(N + Q + NlogN) ~ O(NlogN)
function sortNodesByHeightOnALevel(nodesOnLevelMap, nodeToHeight) {
  const levels = Object.keys(nodesOnLevelMap);
  for (let i = 0; i < levels.length; i++) {
    const nodesOnLevel = nodesOnLevelMap[levels[i]];
    nodesOnLevel.sort((a, b) => nodeToHeight[a] - nodeToHeight[b]);
  }
}

function solveOptimised(root, queries) {
  const nodeToHeight = {};
  const nodeToDepth = {};
  const nodesOnLevel = {};
  function generateTree(root, depth) {
    const left = root.left ? generateTree(root.left, depth + 1) + 1 : 0;
    const right = root.right ? generateTree(root.right, depth + 1) + 1 : 0;
    const height = Math.max(left, right);
    if (nodesOnLevel[depth] === undefined) nodesOnLevel[depth] = [];
    nodesOnLevel[depth].push(root.val);
    nodeToHeight[root.val] = height;
    nodeToDepth[root.val] = depth;
    return height;
  }
  generateTree(root, 0);
  sortNodesByHeightOnALevel(nodesOnLevel, nodeToHeight);
  let ans = []
  for (let i = 0; i < queries.length; i++) {
    const node = queries[i];
    const depth = nodeToDepth[node];
    const cousins = nodesOnLevel[depth];
    let queryAns;
    if (cousins.length === 1) {
      queryAns = depth - 1;
    } else {
      const lastNode = cousins[cousins.length - 1];
      const secondLastNode = cousins[cousins.length - 2];
      queryAns =
        node === lastNode
          ? nodeToDepth[secondLastNode] + nodeToHeight[secondLastNode]
          : nodeToDepth[lastNode] + nodeToHeight[lastNode];
    }
    ans.push(queryAns)
  }
  return ans
}

const r7 = new TreeNode(7);
const r5 = new TreeNode(5, null, r7);
const r6 = new TreeNode(6);
const r2 = new TreeNode(2);
const r4 = new TreeNode(4, r6, r5);
const r3 = new TreeNode(3, r2);
const root = new TreeNode(1, r3, r4);
const queries = [4, 6];

// const r2 = new TreeNode(2);
// const r4 = new TreeNode(4);
// const r3 = new TreeNode(3, r2, r4);
// const r5 = new TreeNode(5, r3);
// const root = new TreeNode(1, null, r5);
// const queries = [3,5,4,2,4];

console.log(solveOptimised(root, queries));
