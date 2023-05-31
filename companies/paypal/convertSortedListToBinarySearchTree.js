// Convert Sorted List to Binary Search Tree
// Medium
// company
// Facebook
// Amazon
// Microsoft
// Paypal
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a
// height-balanced
//  binary search tree.

// Example 1:

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in head is in the range [0, 2 * 10^4].
// -10^5 <= Node.val <= 10^5

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function TreeNode(val, left = null, right = null) {
  this.val = val === undefined ? 0 : val;
  this.left = left;
  this.right = right;
}

// TC - O(N logN), N for calculating mid every time and we are doing that for log N times, since every time we divide our list into two halves
// SC - O(logN) - height of a height balanced tree

function findMid(head) {
  let slow = head;
  let fast = head;
  let prev
  while (fast && fast.next) {
    prev = slow
    slow = slow.next;
    fast = fast.next.next;
  }
  if(prev!==undefined) prev.next = null
  return slow
}

function generateTree(head) {
  if (head === null) return null;
  const mid = findMid(head);
  const tree = new TreeNode(mid.val)

  if(mid===head) return tree
  tree.left = generateTree(head)
  tree.right = generateTree(mid.next)
  return tree;
}

function solve(head) {
  return generateTree(head);
}

// const head = [-10, -3, 0, 5, 9];

const N10 = new ListNode(10);
const N9 = new ListNode(9, N10);
const N5 = new ListNode(5, N9);
const N0 = new ListNode(0, N5);
const N3 = new ListNode(-3, N0);
const head = new ListNode(-10, N3);
// Output: [0,-3,9,-10,null,5]

// const head = []
// Output: []

console.log(solve(head));
