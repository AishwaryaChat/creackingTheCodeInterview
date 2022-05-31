/*
Sort List

Problem Description
Sort a linked list, A in O(n log n) time using constant space complexity.



Problem Constraints
0 <= |A| = 10^5



Input Format
The first and the only arugment of input contains a pointer to the head of the linked list, A.



Output Format
Return a pointer to the head of the sorted linked list.



Example Input
Input 1:

A = [3, 4, 2, 8]
Input 2:

A = [1]


Example Output
Output 1:

[2, 3, 4, 8]
Output 2:

[1]


Example Explanation
Explanation 1:

 The sorted form of [3, 4, 2, 8] is [2, 3, 4, 8].
Explanation 2:

 The sorted form of [1] is [1].
*/
// TC = O(N log N)
// Sort Linked list using merge sort

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

function getMid(LL) {
  let slow = LL;
  let fast = LL;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(L1, L2) {
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
    ans = ans.next;
  }
  if (L1) ans.next = L1;
  if (L2) ans.next = L2;
  return head;
}

function sort(LL) {
  if (LL === null || LL.next === null) return LL;

  const mid = getMid(LL);
  let x = LL;
  let y = mid.next;
  mid.next = null;
  x = sort(x);
  y = sort(y);
  return merge(x, y);
}

const L11 = new Node(88);
const L10 = new Node(10, L11);
const L9 = new Node(9, L10);
const L8 = new Node(20, L9);
const L7 = new Node(7, L8);
const L6 = new Node(66, L7);
const L5 = new Node(1, L6);
const L4 = new Node(100, L5);
const L3 = new Node(3, L4);
const L2 = new Node(2, L3);
const L1 = new Node(0, L2);

printLL(L1);
const newLL = sort(L1);
printLL(newLL);
