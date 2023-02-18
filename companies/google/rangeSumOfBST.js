// Range Sum of BST
// Easy
// company
// Facebook
// Google
// Apple
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Example 1:

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
// Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 10^5
// 1 <= low <= high <= 10^5
// All Node.val are unique.

class TreeNode {
  constructor(data = -1, left = null, right = null) {
    this.val = data;
    this.left = left;
    this.right = right;
  }
}

// TC - O(N)
// SC - O(H)
function recurse(root, low, high) {
  if (root === null) return 0;
  let ans = 0;
  if (root.val >= low && root.val <= high) {
    ans += root.val;
  }
  return ans + recurse(root.left, low, high) + recurse(root.right, low, high);
}

function solve(root, low, high) {
  return recurse(root, low, high);
}

const n18 = new TreeNode(18);
const n7 = new TreeNode(7);
const n3 = new TreeNode(3);
const n15 = new TreeNode(15, null, n18);
const n5 = new TreeNode(5, n3, n7);
const root = new TreeNode(10, n5, n15);
const low = 7;
const high = 15;

console.log(solve(root, low, high));
