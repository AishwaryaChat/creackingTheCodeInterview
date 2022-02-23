/*
 24. Swap Nodes in Pairs
Medium

5930

272

Add to List

Share
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/

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
 var swapPairs = function(head) {
    let current = head
    let newNode = new ListNode(0,head)
    let previous = newNode
    while(current && current.next) {
        previous.next = current.next
        current.next = current.next.next
        previous.next.next = current
        current = current.next
        previous = previous.next.next
    }
    return newNode.next
};

// Recursion
var swapPairsRecursion =  function(head) {
    let temp1 = head,temp2 = head;
    if(!temp1 || !temp1.next) return head;
    temp2 = temp1.next;
    temp1.next = temp2.next;
    temp2.next = temp1;
    head = temp2;
    temp1.next = swapPairs(temp1.next);
    return head;
};