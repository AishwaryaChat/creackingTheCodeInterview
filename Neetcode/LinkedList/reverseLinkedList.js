// Reverse Linked List
// Easy
// company
// Amazon
// Apple
// Oracle
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

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLL(root) {
  let curr = root;
  let ans = "";
  while (curr) {
    ans += curr.val + " ";
    curr = curr.next;
  }
  console.log(ans);
}

function solve(root) {
  let curr = root;
  let prev = null;
  let next = curr;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev
}

const n5 = new Node(5);
const n4 = new Node(4, n5);
const n3 = new Node(3, n4);
const n2 = new Node(2, n3);
const root = new Node(1, n2);

printLL(root);
const reversed = solve(root);
console.log("reverses", printLL(reversed))