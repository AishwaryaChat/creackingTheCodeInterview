// 2816. Double a Number Represented as a Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

// Return the head of the linked list after doubling it.

// Example 1:

// Input: head = [1,8,9]
// Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
// Example 2:

// Input: head = [9,9,9]
// Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998.

// Constraints:

// The number of nodes in the list is in the range [1, 104]
// 0 <= Node.val <= 9
// The input is generated such that the list represents a number that does not have leading zeros, except the number 0 itself.

function reverseAndReturnHead(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Below solution require Linked list to be traveresed thrice
// TC - O(3*N)
// SC - O(1)
var solve1 = function (head) {
  const reversedHead = reverseAndReturnHead(head);
  let curr = reversedHead;
  let carry = 0;
  let prev;
  while (curr) {
    const mul = curr.val * 2 + carry;
    const rem = mul % 10;
    carry = Math.floor(mul / 10);
    curr.val = rem;
    prev = curr;
    curr = curr.next;
  }
  if (carry > 0) {
    prev.next = new ListNode(carry);
  }
  return reverseAndReturnHead(reversedHead);
};

// Below solution requires linked list to be traversed only once
// TC - O(N)
// SC - O(1)
// We are intutively updating the value of carry to current node before moving to the next node
// A digit can be at max 9, and hence a carry can be at max 1
// We will check if next of current is greter than 4 than a carry will come and hence we will add the carry before hand
var solve2 = function (head) {
  if (head === null) return head;
  let curr = head;
  if (head.val > 4) {
    head = new ListNode(1, head);
    curr = head.next;
  }
  while (curr) {
    let mul = curr.val * 2;
    let rem = mul % 10;
    if (curr.next && curr.next.val > 4) rem += 1;
    curr.val = rem;
    curr = curr.next;
  }
  return head;
};
