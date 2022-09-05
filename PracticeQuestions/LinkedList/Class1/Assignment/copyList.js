/*
Copy List

Problem Description
A linked list A is given such that each node contains an additional random pointer which could point to any node in the list or NULL.

Return a deep copy of the list.



Problem Constraints
0 <= |A| <= 10^6



Input Format
The first argument of input contains a pointer to the head of linked list A.



Output Format
Return a pointer to the head of the required linked list.



Example Input
Given list
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Output
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Explanation
You should return a deep copy of the list. The returned answer should not contain the same node as the original list, but a copy of them. The pointers in the returned list should not link to any node in the original input list.
*/

// TC = O(N)
// SC = O(1)
// the idea is to create new node from existing nodes
// place these new nodes in btw the existing nodes so this way all the new nodes will be created first
// then in seperate loop start storing the random pointer of new nodes using the previous nodes
// then in another loop remove the pointers of new nodes with the existing node

class Node {
  constructor(data, next = null, random = null) {
    this.data = data;
    this.next = next;
    this.random = random;
  }
}

function printLL(head) {
  let temp = head;
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

let L4 = new Node(4);
let L3 = new Node(3, L4);
let L2 = new Node(2, L3);
let L1 = new Node(1, L2, L3);
L2.random = L1;
L3.random = L1;
L4.random = L3;
printLL(L1);
// console.log("L1 data", L1.data)
// console.log("L1 next", L1.next)
// console.log("L1 random", L1.random)
function solveDeepCopy(head) {
  let x = head;
  while (x != null) {
    let newNode = new Node(`${x.data}|`);
    newNode.next = x.next;
    x.next = newNode;
    x = x.next.next;
  }
  x = head;
  while (x != null) {
    if (x.random) {
      x.next.random = x.random.next;
    }
    x = x.next.next;
  }
  x = head;
  let newHead = head.next;
  let y = newHead;
  while (y.next != null) {
    y.next = y.next.next;
    y = y.next;
  }
  return newHead;
}

console.log(solveDeepCopy(L1));
