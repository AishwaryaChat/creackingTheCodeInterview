// Delete Nodes And Return Forest
// Medium
// company
// Google
// Amazon
// Facebook
// Given the root of a binary tree, each node in the tree has a distinct value.

// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

// Return the roots of the trees in the remaining forest. You may return the result in any order.

// Example 1:

// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]
// Example 2:

// Input: root = [1,2,4,null,3], to_delete = [3]
// Output: [[1,2,4]]

// Constraints:

// The number of nodes in the given tree is at most 1000.
// Each node has a distinct value between 1 and 1000.
// to_delete.length <= 1000
// to_delete contains distinct values between 1 and 1000.


// TC - O(N)
// SC - O(H)
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function deleteNode(root, toDelete, ans) {
  if (root === null) return null;
  root.left = deleteNode(root.left, toDelete, ans);
  root.right = deleteNode(root.right, toDelete, ans);
  if (toDelete.has(root.val)) {
    if (root.left) ans.push(root.left);
    if (root.right) ans.push(root.right);
    return null;
  }
  return root;
}

function solve(root, toDelete) {
  const map = new Set(to_delete);
  let ans = [];
  if (!map.has(root.val)) ans.push(root);
  deleteNode(root, map, ans);
  return ans;
}

const root = [1, 2, 3, 4, 5, 6, 7];
const to_delete = [3, 5];
// Output: [[1,2,null,4],[6],[7]]

// const root = [1,2,4,null,3]
// const to_delete = [3]
// Output: [[1,2,4]]

console.log(solve(root, to_delete));
