/*
Merge Two Sorted Lists

Problem Description
Merge two sorted linked lists, A and B, and return it as a new list.

The new list should be made by splicing together the nodes of the first two lists and should also be sorted.



Problem Constraints
0 <= |A|, |B| <= 10^5



Input Format
The first argument of input contains a pointer to the head of linked list A.

The second argument of input contains a pointer to the head of linked list B.



Output Format
Return a pointer to the head of the merged linked list.



Example Input
Input 1:

 A = 5 -> 8 -> 20
 B = 4 -> 11 -> 15
Input 2:

 A = 1 -> 2 -> 3
 B = Null


Example Output
Output 1:

 4 -> 5 -> 8 -> 11 -> 15 -> 20
Output 2:

 1 -> 2 -> 3


Example Explanation
Explanation 1:

 Merging A and B will result in 4 -> 5 -> 8 -> 11 -> 15 -> 20 
Explanation 2:

 We don't need to merge as B is empty. 
*/

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
    } else {
      process.stdout.write(" " + temp.data.toString());
    }
    temp = temp.next;
  }
  process.stdout.write("\n");
}

function solve(L1, L2) {
  if (L1 === null) return L2;
  if (L2 === null) return L1;
  let head;
  if (L1.data <= L2.data) {
    head = L1;
    L1 = L1.next;
  } else {
    head = L2;
    L2 = L2.next;
  }
  let ans = head;
  while (L1 && L2) {
    if (L1.data <= L2.data) {
      ans.next = L1;
      L1 = L1.next;
    } else {
      ans.next = L2;
      L2 = L2.next;
    }
    ans = ans.next
  }
  if (L1) ans.next = L1;
  if (L2) ans.next = L2;
  return head;
}

const L6 = new Node(20);
const L5 = new Node(8, L6);
const L4 = new Node(5, L5);
const L3 = new Node(15);
const L2 = new Node(11, L3);
const L1 = new Node(4, L2);
printLL(L4);
printLL(L1);
const result = solve(L1, L4);
printLL(result);
