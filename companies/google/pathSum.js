// Path Sum
// Easy
// company
// Amazon
// Google
// Microsoft
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// TC - O(N), since we are visiting each node only once
// TC - O(H), height of tree, worst case - completely unbalanced tree O(N), best case - completely balanced tree O(logN)

function findRootToLeafPath(root, target, sum) {
  if (root === null) return false;
  sum += root.val;
  if (sum === target && root.left === null && root.right === null) return true;
  return (
    findRootToLeafPath(root.left, target, sum) ||
    findRootToLeafPath(root.right, target, sum)
  );
}

function solve(root, targetSum) {
  if (root === null) return false;
  return findRootToLeafPath(root, targetSum, 0);
}

function solveIterative(root, targetSum) {
  if (root === null) return false;
  let stack = [[root, targetSum - root.val]];
  while (stack.length > 0) {
    const [ele, sum] = stack.pop();
    if (ele.left === null && ele.right === null && sum === 0) return true;
    if (ele.left) stack.push([ele.left, sum - ele.left.val]);
    if (ele.right) stack.push([ele.right, sum - ele.right.val]);
  }
  return false;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// const root = [5,4,8,11,null,13,4,7,2,null,null,null,1]
const targetSum = 22;

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n7 = new TreeNode(7);
const n4Dash = new TreeNode(4, null, n1);
const n13 = new TreeNode(13);
const n11 = new TreeNode(11, n7, n2);
const n8 = new TreeNode(8, n13, n4Dash);
const n4 = new TreeNode(4, n11);
const root = new TreeNode(5, n4, n8);
// Output: true

// const root = [1,2,3]
// const targetSum = 5
// const n3 = new TreeNode(3)
// const n2 = new TreeNode(2)
// const root = new TreeNode(1, n2, n3)

// Output: false

// const root = []
// const targetSum = 0
// Output: false

// const targetSum = 1;
// const n2 = new TreeNode(2);
// const root = new TreeNode(1, n2);

console.log(solve(root, targetSum));
