// Find Leaves of Binary Tree
// Medium

// company
// Google
// company
// Amazon
// company
// LinkedIn
// Given the root of a binary tree, collect a tree's nodes as if you were doing this:

// Collect all the leaf nodes.
// Remove all the leaf nodes.
// Repeat until the tree is empty.

// Example 1:

// Input: root = [1,2,3,4,5]
// Output: [[4,5,3],[2],[1]]
// Explanation:
// [[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.
// Example 2:

// Input: root = [1]
// Output: [[1]]

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

// The intution here is, if we find height of each node, all the leaf nodes at same height will have same height, then another level and so pn
// Here by height we mean, the number of edges from the node to the deepest leaf

function dfs(root, height) {
  if (root === null) return 0;
  const h1 = 1 + Math.max(dfs(root.left, height), dfs(root.right, height));
  if (!height[h1]) height[h1] = [];
  height[h1].push(root.data);
  return h1;
}

function solve(root) {
  const nMax = 200;
  const height = new Array(nMax);
  dfs(root, height);
  return height.filter((h) => h);
}

class Node {
  constructor(data = 0, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// const n5 = new Node(0);
// const n4 = new Node(100);
// const n3 = new Node(3);
// const n2 = new Node(2, n4, n5);
// const root = new Node(-100, n2, n3);
const n5 = new Node(5);
const n4 = new Node(4);
const n3 = new Node(3);
const n2 = new Node(2, n4, n5);
const root = new Node(1, n2, n3);
console.log(solve(root));
