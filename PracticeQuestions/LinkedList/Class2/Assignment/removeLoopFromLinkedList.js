/*
Remove Loop from Linked List

Problem Description
You are given a linked list that contains a loop.
You need to find the node, which creates a loop and break it by making the node point to NULL.



Problem Constraints
1 <= number of nodes <= 1000



Input Format
Only argument is the head of the linked list.



Output Format
return the head of the updated linked list.



Example Input
Input 1:

 
1 -> 2
^    |
| - - 
Input 2:

3 -> 2 -> 4 -> 5 -> 6
          ^         |
          |         |    
          - - - - - -


Example Output
Output 1:

 1 -> 2 -> NULL
Output 2:

 3 -> 2 -> 4 -> 5 -> 6 -> NULL


Example Explanation
Explanation 1:

 Chain of 1->2 is broken.
Explanation 2:

 Chain of 4->6 is broken.
*/

// The solution to this problem is based on relative motion
// We will first detect the cycle, then remove the cycle by making the next pointer of the node equal to null which is creating cycle
// So we will have two pointers slow and fast
// fast will move at twice the speed of slow
// If both of them meet before fast pointing to null, that means the cycle exist
// in this case we will point the slow pointer to head
// and then we again start moving slow and next forward, but this time both will move one step at a time, this will make them meet at a point where the cycle is originating from

// TC - O(N)

class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function printLL(LL) {
  let temp = LL;
  let flag = 0;
  while (temp != null) {
    if (flag == 0) {
      process.stdout.write(temp.data.toString());
      flag = 1;
    } else process.stdout.write(" " + temp.data.toString());
    temp = temp.next;
  }
  process.stdout.write("\n");
}

function detectCycle(LL) {
  let slow = (fast = LL);
  while (fast.next != null && fast.next.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      slow = LL;
      break;
    }
  }
  if (slow != LL) return null;
  let prev = slow;
  while (slow != fast) {
    prev = fast;
    slow = slow.next;
    fast = fast.next;
  }
  return prev;
}

function solve(LL) {
  let cycle = detectCycle(LL);
  if (cycle == null) return LL;
  cycle.next = null;
  return LL;
}

let L8 = new Node(11);
let L7 = new Node(10, L8);
let L6 = new Node(9, L7);
const L5 = new Node(8, L6);
const L4 = new Node(3, L5);
// const L3 = new Node(5, L4);
const L2 = new Node(5, L4);
const L1 = new Node(1, L2);
L8.next = L5;
// let L6 = new Node(6);
// const L5 = new Node(8);
// const L4 = new Node(3, L5);
// const L3 = new Node(5, L4);
// const L2 = new Node(5, L3);
// const L1 = new Node(6, L2);
// L2.next = L3
// 6 - 5 - 5 - 3 - 8
// L6.next = L4
// console.log("solve(L1)", solve(L1))
// const LLFinal = solve(L1);
// console.log(LLFinal)
// printLL(L1);
printLL(solve(L1));
