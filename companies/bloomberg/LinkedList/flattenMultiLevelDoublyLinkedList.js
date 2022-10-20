// Flatten a Multilevel Doubly Linked List

// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

// Example 1:

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
// Explanation: The multilevel linked list in the input is shown.
// After flattening the multilevel linked list it becomes:

// Example 2:

// Input: head = [1,2,null,3]
// Output: [1,3,2]
// Explanation: The multilevel linked list in the input is shown.
// After flattening the multilevel linked list it becomes:

// Example 3:

// Input: head = []
// Output: []
// Explanation: There could be empty list in the input.

// Constraints:

// The number of Nodes will not exceed 1000.
// 1 <= Node.val <= 105

// How the multilevel linked list is represented in test cases:

// We use the multilevel linked list from Example 1 above:

//  1---2---3---4---5---6--NULL
//          |
//          7---8---9---10--NULL
//              |
//              11--12--NULL
// The serialization of each level is as follows:

// [1,2,3,4,5,6,null]
// [7,8,9,10,null]
// [11,12,null]
// To serialize all levels together, we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:

// [1,    2,    3, 4, 5, 6, null]
//              |
// [null, null, 7,    8, 9, 10, null]
//                    |
// [            null, 11, 12, null]
// Merging the serialization of each level and removing trailing nulls we obtain:

// [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Leetcode question 
// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

class DoublyNode {
  constructor(data = 0, next = null, prev = null, child = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

function solve(head) {
  let current = head;
  let start = head;
  let end = null;
  while (current) {
    if (current.child) {
      const [childStart, childEnd] = solve(current.child);
      current.child = null
      let temp = current.next;
      current.next = childStart;
      childStart.prev = current;
      childEnd.next = temp;
      if(temp) temp.prev = childEnd;
      current = childEnd;
    }
    end = current;
    current = current.next;
  }
  return [start, end];
}

function traverseLL(head, flag) {
  if (head == null) return;
  if (flag == 0) {
    process.stdout.write(head.data.toString());
    flag = 1;
  } else {
    process.stdout.write(" " + head.data.toString());
  }
  if (head.child) traverseLL(head.child);
  traverseLL(head.next);
}

function traverseLLNext(head, flag) {
  if (head == null) return;
  if (flag == 0) {
    process.stdout.write(head.data.toString());
    flag = 1;
  } else {
    process.stdout.write(" " + head.data.toString());
  }
  traverseLLNext(head.next);
}

const L6 = new DoublyNode(6, null, null, null);
const L5 = new DoublyNode(5, L6, null, null);
const L4 = new DoublyNode(4, L5, null, null);
const L10 = new DoublyNode(10, null, null, null);
const L9 = new DoublyNode(9, L10, null, null);
const L12 = new DoublyNode(12, null, null, null);
const L11 = new DoublyNode(11, L12, null, null);
const L8 = new DoublyNode(8, L9, null, L11);
const L7 = new DoublyNode(7, L8, null, null);
const L3 = new DoublyNode(3, L4, null, L7);
const L2 = new DoublyNode(2, L3, null, null);
const L1 = new DoublyNode(1, L2, null, null);
L2.prev = L1;
L3.prev = L2;
L4.prev = L3;
L5.prev = L4;
L6.prev = L5;
L8.prev = L7;
L9.prev = L8;
L10.prev = L10;
L12.prev = L11;
// traverseLL(L1)
const [start, end] = solve(L1);
console.log("yeeeee start");
traverseLLNext(start, 0);
// console.log("yeeeee endddd", )
// traverseLL(end)
