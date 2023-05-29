// Reverse Linked List
// Easy
// company
// Apple
// Amazon
// Bloomberg
// Paypal
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function printLL(head) {
  let curr = head;
  let str = "";
  while (curr) {
    str += curr.val + " ";
    curr = curr.next;
  }
  console.log(str);
}

function solve(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Couldn't understand
function recursive(head) {
  if (head === null || head.next === null) return head;
  const prev = recursive(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
}

function solveRecursive(head) {
  if (head === null) return;
  return recursive(head, null);
}

const L5 = new ListNode(5);
const L4 = new ListNode(4, L5);
const L3 = new ListNode(3, L4);
const L2 = new ListNode(2, L3);
const L1 = new ListNode(1, L2);

printLL(L1);
const res = solveRecursive(L1);
printLL(res);
