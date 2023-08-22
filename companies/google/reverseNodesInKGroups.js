// 25. Reverse Nodes in k-Group
// Hard
// company
// Microsoft
// Google
// Commvault
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function printLL(head, newList) {
  let str = "";
  while (head) {
    str += head.val;
    if (newList) console.log("head.val", head.val);
    head = head.next;
  }
  return str;
}

function reverseKNodes(LL, k, reversing) {
  let current = LL;
  let prev = null;
  let i = k;
  while (i > 0 && current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i--;
  }
  if (i > 0 && reversing !== "reversing")
    return reverseKNodes(prev, k - i, "reversing");
  return [prev, current];
}

// TC - O(N)
function solve(head, k) {
  let curr = head;
  let tail = head;
  let first = false;
  let prevTail;
  while (curr) {
    const [prev, next] = reverseKNodes(curr, k);
    if (!first) {
      head = prev;
      first = true;
    } else {
      tail.next = prev;
      tail = prevTail;
    }
    prevTail = next;
    curr = next;
  }
  return head;
}

const n8 = new ListNode(8);
const n7 = new ListNode(7, n8);
const n6 = new ListNode(6, n7);
const n5 = new ListNode(5, n6);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const root = new ListNode(1, n2);
const k = 3;
console.log(printLL(root));
const reversed = solve(root, k);
console.log(printLL(reversed));
