// Remove Zero Sum Consecutive Nodes from Linked List
// Medium
// company
// Google
// Amazon
// Apple
// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// (Note that in the examples below, all sequences are serializations of ListNode objects.)

// Example 1:

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
// Example 2:

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]
// Example 3:

// Input: head = [1,2,3,-3,-2]
// Output: [1]

// Constraints:

// The given linked list will contain between 1 and 1000 nodes.
// Each node in the linked list has -1000 <= node.val <= 1000.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// TC - O(N)
// SC - O(N)
// The idea here is to store sum and corresponding node pair  in a hadmap 
// Then check if the sum has repeated(since we are overriding the sum in our map, so it will point you to correct location), then just move the current to the next pointer of this sum node. The reason is if the sum is repeating that means any elements between these two are making the sum 0
function solve(head) {
  const newNode = new ListNode(0, head);
  let sumNodeMap = {};
  if (head !== null) {
    let curr = head;
    let sum = 0;
    while (curr) {
      sum += curr.val;
      sumNodeMap[sum] = curr;
      curr = curr.next;
    }
    sum = 0;
    curr = newNode;
    while (curr) {
      sum += curr.val;
      if (sumNodeMap[sum]) {
        curr.next = sumNodeMap[sum].next;
      }
      curr = curr.next;
    }
  }
  return newNode.next;
}

// const LL11 = new ListNode(1)
// const LL3 = new ListNode(3, LL11)
// const LLM3 = new ListNode(-3, LL3)
// const LL2 = new ListNode(2, LLM3)
// const LL = new ListNode(1, LL2)
// const head = [1,2,-3,3,1]
// Output: [3,1]

const LL4 = new ListNode(4);
const LLM3 = new ListNode(-3, LL4);
const LL3 = new ListNode(3, LLM3);
const LL2 = new ListNode(2, LL3);
const LL = new ListNode(1, LL2);
// const head = [1,2,3,-3,4]
// Output: [1,2,4]
// const head = [1,2,3,-3,-2]
// Output: [1]

console.log(solve(LL));
