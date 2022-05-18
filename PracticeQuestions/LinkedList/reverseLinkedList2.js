/*
Reverse Link List II

Problem Description
Reverse a linked list A from position B to C.

NOTE: Do it in-place and in one-pass.



Problem Constraints
1 <= |A| <= 10^6

1 <= B <= C <= |A|



Input Format
The first argument contains a pointer to the head of the given linked list, A.

The second arugment contains an integer, B.

The third argument contains an integer C.



Output Format
Return a pointer to the head of the modified linked list.



Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5
 B = 2
 C = 4

Input 2:

 A = 1 -> 2 -> 3 -> 4 -> 5
 B = 1
 C = 5


Example Output
Output 1:

 1 -> 4 -> 3 -> 2 -> 5
Output 2:

 5 -> 4 -> 3 -> 2 -> 1


Example Explanation
Explanation 1:

 In the first example, we want to reverse the highlighted part of the given linked list : 1 -> 2 -> 3 -> 4 -> 5 
 Thus, the output is 1 -> 4 -> 3 -> 2 -> 5 
Explanation 2:

 In the second example, we want to reverse the highlighted part of the given linked list : 1 -> 4 -> 3 -> 2 -> 5  
 Thus, the output is 5 -> 4 -> 3 -> 2 -> 1 

*/

// TC = O(N)
// SC = O(1)

const { LinkedList } = require("./implementation");

const reverseLinkedList = (head, B, C) => {
  if (head === null || head.next === null) return head;
  let current = head;
  let i = 1;
  let start = head;
  while (i < B) {
    start = current;
    current = current.next;
    i++;
  }
  let tail = current;
  let previous = null;
  while (i <= C) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }
  start.next = previous;
  tail.next = current;
  if (B === 1) return previous;
  else return head;
};

const printLL = (LL) => {
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
};

// let LL = new LinkedList();
// LL.insert_node(1, 7);
// LL.insert_node(1, 6);
// LL.insert_node(1, 5);
// LL.insert_node(1, 4);
// LL.insert_node(1, 3);
// LL.insert_node(1, 2);
// LL.insert_node(1, 1);
// console.log("printing LL")
// LL.print_ll();
// const reverse = reverseLinkedList(LL.getHead(), 1, 7);
// console.log("printing reverse")
// printLL(reverse)
// let LL2 = new LinkedList();
// LL2.insert_node(1, 7);
// LL2.insert_node(1, 6);
// LL2.insert_node(1, 5);
// LL2.insert_node(1, 4);
// LL2.insert_node(1, 3);
// LL2.insert_node(1, 2);
// LL2.insert_node(1, 1);
// console.log("printing LL2");
// LL2.print_ll();
// const reverse2 = reverseLinkedList(LL2.getHead(), 1, 4);
// console.log("printing reverse");
// printLL(reverse2);

// let LL3 = new LinkedList();
// LL3.insert_node(1, 3);
// LL3.insert_node(1, 2);
// LL3.insert_node(1, 1);
// console.log("printing LL3")
// LL3.print_ll();
// const reverse3 = reverseLinkedList(LL3.getHead(), 1, 2);
// console.log("printing reverse")
// printLL(reverse3)

let LL2 = new LinkedList();
LL2.insert_node(1, 7);
LL2.insert_node(1, 6);
LL2.insert_node(1, 5);
LL2.insert_node(1, 4);
LL2.insert_node(1, 3);
LL2.insert_node(1, 2);
LL2.insert_node(1, 1);
console.log("printing LL2");
LL2.print_ll();
const reverse2 = reverseLinkedList(LL2.getHead(), 1, 7);
console.log("printing reverse");
printLL(reverse2);

// Lengthy solution

const reverse = (head, B, C) => {
  let x = head;
  let i = 1;
  while (i <= B - 1) {
      x = x.next;
      i++;
    }
    let prev = head;
  console.log("x", x)
  let current = x;
  let previous = null;
  let next = x;
  while (i <= C) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }
  let y = previous;
  while (y.next !== null) {
    y = y.next;
  }
  let z = head
  while(z.next !== null) {
      z=z.next
  }
    z.next = previous;
    y.next = current;
  return head;
}
