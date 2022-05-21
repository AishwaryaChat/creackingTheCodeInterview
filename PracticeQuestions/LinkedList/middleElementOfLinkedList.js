/*
Middle element of linked list

Problem Description
Given a linked list of integers, find and return the middle element of the linked list.

NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.



Problem Constraints
1 <= length of the linked list <= 100000

1 <= Node value <= 10^9



Input Format
The only argument given head pointer of linked list.



Output Format
Return the middle element of the linked list.



Example Input
Input 1:

 1 -> 2 -> 3 -> 4 -> 5
Input 2:

 1 -> 5 -> 6 -> 2 -> 3 -> 4


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 The middle element is 3.
Explanation 2:

 The middle element in even length linked list of length N is ((N/2) + 1)th element which is 2.
*/

// TC - O(N)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function solve(LL) {
  let slow = LL;
  let fast = LL;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next) {
    return slow.next;
  }
  return slow;
}

// 1 -> 2 -> 3 -> 4 -> 5 -> 6

const LL6 = new Node(6);
const LL5 = new Node(5, LL6);
const LL4 = new Node(4, LL5);
const LL3 = new Node(3, LL4);
const LL2 = new Node(2, LL3);
const LL1 = new Node(1, LL2);

console.log(solve(LL1));
