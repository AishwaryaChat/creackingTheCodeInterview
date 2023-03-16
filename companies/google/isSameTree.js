// 100. Same Tree
// Easy
// company
// Amazon
// Google
// Apple
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -10^4 <= Node.val <= 10^4

// TC - O(N)
// SC - O(H)
function isSameTree(p, q) {
  if (p === null && q === null) return true;
  if ((p === null && q !== null) || (q === null && p !== null)) return false;
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
}

// const p = [1,2,3]
// const q = [1,2,3]
// Output: true
// Example 2:

// const p = [1,2]
// const q = [1,null,2]
// Output: false
// Example 3:

// const p = [1,2,1]
// const q = [1,1,2]
// Output: false