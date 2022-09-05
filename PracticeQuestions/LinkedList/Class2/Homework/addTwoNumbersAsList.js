/*
 Add Two Numbers as Lists

Problem Description
You are given two linked lists, A and B, representing two non-negative numbers.

The digits are stored in reverse order, and each of their nodes contains a single digit.

Add the two numbers and return it as a linked list.



Problem Constraints
1 <= |A|, |B| <= 10^5



Input Format
The first argument of input contains a pointer to the head of linked list A.

The second argument of input contains a pointer to the head of linked list B.



Output Format
Return a pointer to the head of the required linked list.



Example Input
Input 1:

 
 A = [2, 4, 3]
 B = [5, 6, 4]
Input 2:

 
 A = [9, 9]
 B = [1]


Example Output
Output 1:

 
 [7, 0, 8]
Output 2:

 
 [0, 0, 1]


Example Explanation
Explanation 1:

 A = 342 and B = 465. A + B = 807. 
Explanation 2:

 A = 99 and B = 1. A + B = 100. 
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
  let newLL = new Node();
  let x = newLL;
  let carry = 0;
  while (L1 && L2) {
    let res = L1.data + L2.data + carry;
    carry = Math.floor(res / 10);
    res = res % 10;
    let newNode = new Node(res);
    x.next = newNode;
    x = x.next;
    L1 = L1.next;
    L2 = L2.next;
  }
  while (L1) {
    let res = L1.data + carry;
    carry = Math.floor(res / 10);
    res = res % 10;
    let newNode = new Node(res);
    x.next = newNode;
    x = x.next;
    L1 = L1.next;
  }
  while (L2) {
    let res = L2.data + carry;
    carry = Math.floor(res / 10);
    res = res % 10;
    let newNode = new Node(res);
    x.next = newNode;
    x = x.next;
    L2 = L2.next;
  }
  if (carry) {
    let newNode = new Node(carry);
    x.next = newNode;
  }
  return newLL.next;
}

const L6 = new Node(3);
const L5 = new Node(4, L6);
const L4 = new Node(2, L5);
const L3 = new Node(4);
const L2 = new Node(6, L3);
const L1 = new Node(5, L2);

const result = solve(L1, L4);
printLL(result);

const L7 = new Node(9);
const L8 = new Node(9, L7);
const L9 = new Node(1);

const result2 = solve(L8, L9);
printLL(result2);
