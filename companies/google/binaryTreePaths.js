// Binary Tree Paths
// Easy
// Topics
// Companies
// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

function rootToLeafPaths(root, path, ans) {
  if (root.left === null && root.right === null) {
    ans.push(path + root.val);
    return;
  }
  if (root.left) rootToLeafPaths(root.left, path + `${root.val}->`, ans);
  if (root.right) rootToLeafPaths(root.right, path + `${root.val}->`, ans);
}

var binaryTreePaths = function (root) {
  let ans = [];
  rootToLeafPaths(root, "", ans);
  return ans;
};
