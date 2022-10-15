// Copy List with Random Pointer
// Medium

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.

class Node {
  constructor(value, next = null, random = null) {
    this.value = value;
    this.next = next;
    this.random = random;
  }
}

// here I didnt copy the random pointers
// function copyLinkedList(head) {
//   let current = head;
//   const newNode = new Node(current.value);
//   let current2 = newNode;
//   let head2 = current2;
//   while (current !== null && current.next !== null) {
//     current = current.next;
//     const newNode1 = new Node(current.value);
//     current2.next = newNode1;
//     current2 = current2.next;
//   }
//   return head2;
// }

// Complexity - O(n)
// Space complexity - O(1), since n nodes are required in o/p so we wont consider it as space complexity

function copyLinkedList(head) {
  if (head == null) return null;
  let current = head;
  //   Inserting a new node between every node
  // 7 -> 7~ -> 13 -> 13~ -> 11 -> 11~ -> 10 -> 10~ -> 1 -> 1~
  while (current !== null) {
    const newNode = new Node(current.value);
    newNode.next = current.next;
    current.next = newNode;
    current = current.next.next;
  }
  let x = head;
  //   updating random pointer of new inserted nodes
  while (x !== null) {
    if (x.random) {
      x.next.random = x.random.next;
    }
    x = x.next.next;
  }
  let y = head.next;
  x = head;
  const newHead = y;
  //   Seperating original list and new list pointers
  while (x !== null && y !== null && x.next != null && y.next !== null) {
    x.next = x.next.next;
    y.next = y.next.next;
    y = y.next;
    x = x.next;
    if (x.next !== null) {
      x.next = x.next.next;
    }
  }
  //   last node of x will be remaining to be updated, so updating thatc
  if (x !== null) {
    x.next = x.next.next;
  }

  return newHead;
}

function printList(LL) {
  let current = LL;
  while (current !== null) {
    console.log(current.value);
    console.log("random", current.random && current.random.value);
    current = current.next;
  }
}

const L1 = new Node(1);
const L10 = new Node(10, L1);
const L11 = new Node(11, L10, L1);
const L13 = new Node(13, L11);
const L7 = new Node(7, L13);
L13.random = L7;
L10.random = L11;
L1.random = L7;

console.log("before changing");
// printList(L7)
const newLL = copyLinkedList(L7);

console.log("after changing");
printList(newLL);
