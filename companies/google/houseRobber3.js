// House Robber III
// Medium
// 7.5K
// 114
// company
// Google
// company
// Amazon
// company
// Microsoft
// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

// Example 1:

// Input: root = [3,2,3,null,3,null,1]
// Output: 7
// Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:

// Input: root = [3,4,5,1,3,null,1]
// Output: 9
// Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

// Constraints:

// The number of nodes in the tree is in the range [1, 10^4].
// 0 <= Node.val <= 10^4

// TC - O(N)
// SC - O(N)
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

function dfs(root, parentRobbed, robbed, notRobbed) {
  if (root === null) return 0;
  if (parentRobbed) {
    if (robbed.has(root)) return robbed.get(root);
    const ans =
      dfs(root.left, false, robbed, notRobbed) +
      dfs(root.right, false, robbed, notRobbed);
    robbed.set(root, ans);
    return ans;
  } else {
    if (notRobbed.has(root)) return notRobbed.get(root);
    const choose =
      root.val +
      dfs(root.left, true, robbed, notRobbed) +
      dfs(root.right, true, robbed, notRobbed);
    const dontchoose =
      dfs(root.left, false, robbed, notRobbed) +
      dfs(root.right, false, robbed, notRobbed);
    const ans = Math.max(choose, dontchoose);
    notRobbed.set(root, ans);
    return ans;
  }
}
var rob = function (root) {
  let robbed = new Map();
  let notRobbed = new Map();
  return dfs(root, false, robbed, notRobbed);
};
