// Odd Even Linked List
// Medium
// 8K
// 438
// company
// Google
// company
// Amazon
// company
// Apple
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// Constraints:

// The number of nodes in the linked list is in the range [0, 10^4].
// -10^6 <= Node.val <= 10^6

// TC - O(N)
// SC - O(1)
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function solve(head) {
    let odd = head
    let even = head.next
    let currEven = even
    while(odd.next && odd.next.next) {
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = currEven
    return head
}

// Input: head = [1,2,3,4,5]

const n7 = new ListNode(7);
const n6 = new ListNode(6, n7);
const n5 = new ListNode(5, n6);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);
// Output: [1,3,5,2,4]
// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

console.log(solve(head))
